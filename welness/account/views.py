from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from rest_framework.response import Response
from account import constants
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser


class UserAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
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
