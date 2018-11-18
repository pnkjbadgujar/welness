from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.db import transaction
from rest_framework.response import Response
from account import constants
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from account.models import Customer, User
from account.helper import send_sms, send_email, account_verification_email
import random
import uuid


class UserAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        customer = Customer.objects.filter(user=user).first()
        if customer:
            if not customer.is_active:
                return Response(status=401)
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'type': user.type
        })


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def logout(request):
    try:
        token = Token.objects.get(user=request.user)
        token.delete()
        error = False
        msg = 'Logout successfully.'
    except Token.DoesNotExist as e:
        error = True
        msg = str(e)
    context_data = dict()
    context_data[constants.RESPONSE_ERROR] = error
    context_data[constants.RESPONSE_MESSAGE] = msg
    return JsonResponse(context_data, status=200)


@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def change_user_password(request):
    context_data = dict()
    data = JSONParser().parse(request)
    error = False
    msg = ''
    old_password = data.get('old_password')
    new_password = data.get('new_password')
    c_password = data.get('confirm_password')

    if not old_password:
        error = True
        msg = 'Old password is required'

    if not error and not new_password:
        error = True
        msg = 'New password is required'

    if not error and not c_password:
        error = True
        msg = 'Confirm password is required'

    if not error and not request.user.check_password(old_password):
        error = True
        msg = 'Old password was wrong'

    if not error and new_password != c_password:
        error = True
        msg = 'Password mismatch'

    if not error:
        request.user.set_password(new_password)
        request.user.save()
        error = False
        msg = 'Password changed successfully.'
    context_data[constants.RESPONSE_ERROR] = error
    context_data[constants.RESPONSE_MESSAGE] = msg
    return JsonResponse(context_data, status=200)


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def user_signup(request):
    context_data = dict()
    data = JSONParser().parse(request)
    error = False
    msg = ''
    mobile = data.get('mobile')
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')

    if not mobile:
        error = True
        msg = 'Mobile Number is required'

    if not error and not name:
        error = True
        msg = 'Name is required'

    if not error and not email:
        error = True
        msg = 'Email is required'
    else:
        u = User.objects.filter(email=email).first()
        if u:
            error = True
            msg = '%s this email has already registered, Please login instead.' % email

    if not error and not password:
        error = True
        msg = 'Password is required'

    if not error and not confirm_password:
        error = True
        msg = 'confirm password is required'

    if not error and password != confirm_password:
        error = True
        msg = 'Password mismatch'

    if not error:
        try:
            with transaction.atomic():
                user = User.objects.create_user(
                    email=email,
                    password=password
                )
                customer = Customer.objects.create(
                    user=user,
                    first_name=name,
                    mobile_no=mobile
                )
                verification_code = str(uuid.uuid4())
                customer.verify_code = verification_code
                customer.is_active = False
                customer.save()
                account_verification_email({
                    'name': name, 'code': verification_code, 'user_id': customer.user_id
                }, recipient_list=[email, ])
                error = False
                msg = 'Ok'
        except Exception as e:
            error = True
            msg = str(e)
    context_data[constants.RESPONSE_ERROR] = error
    context_data[constants.RESPONSE_MESSAGE] = msg
    return JsonResponse(context_data, status=200)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def get_otp(request):
    context_data = dict()
    error = False
    msg = 'Ok'
    mobile = request.GET.get('mobile')
    if not mobile:
        error = True
        msg = 'Mobile Number is required'
    if not error:
        try:
            otp = random.randint(111111, 999999)
            # send_sms(
            #     mobile=mobile,
            #     message='Your ClickEazy.com OTP is: %s. \n Note Please DO NOT SHARE this OTP with anyone.' % str(otp)
            # )
            context_data[constants.RESPONSE_RESULT] = otp
        except Exception as e:
            error = True
            msg = str(e)
    context_data[constants.RESPONSE_ERROR] = error
    context_data[constants.RESPONSE_MESSAGE] = msg
    return JsonResponse(context_data, status=200)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def verify_email(request, pk):
    context_data = dict()
    try:
        verification_code = request.GET.get('code')
        user = Customer.objects.get(user_id=pk)
        if user.is_active:
            error = False
            msg = 'Your email %s is already verified. Please Login!' % (user.user.email, )
        else:
            if user.verify_code == verification_code:
                user.is_active = True
                user.save()
                error = False
                msg = 'Your email %s has been verified successfully. Please Login!' % (user.user.email, )
            else:
                error = True
                msg = 'Account verification code not matched.'
    except Exception as e:
        error = True
        msg = str(e)
    context_data[constants.RESPONSE_ERROR] = error
    context_data[constants.RESPONSE_MESSAGE] = msg
    return JsonResponse(context_data, status=200)
