from django.http import JsonResponse
from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from account.permissions import CustomerPermission, VendorPermission, AdminPermission
from account import constants
from .serializers import VendorSerializer, Vendor, Category, CatergorySerializer
from rest_framework.parsers import JSONParser
from account.models import Country, State, City
# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, CustomerPermission))
def user_list(request):
    context_data = dict()
    return JsonResponse(context_data)


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, AdminPermission))
def admin_vendor_list(request):
    context_data = dict()
    if request.method == 'GET':
        vendor_list = Vendor.objects.order_by('-id')
        search = request.GET.get('q', '')
        if search:
            vendor_list = vendor_list.filter(Q(name__icontains=search) | Q(mobile_no__icontains=search))
        serializer = VendorSerializer(vendor_list, many=True)
        context_data[constants.RESPONSE_RESULT] = serializer.data
        context_data[constants.RESPONSE_ERROR] = False
        context_data[constants.RESPONSE_MESSAGE] = 'Vendor list retrieved successfully.'
    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = VendorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            context_data[constants.RESPONSE_RESULT] = serializer.data
            context_data[constants.RESPONSE_ERROR] = False
            context_data[constants.RESPONSE_MESSAGE] = 'New Vendor added successfully.'
        else:
            context_data[constants.RESPONSE_ERROR] = True
            context_data[constants.RESPONSE_MESSAGE] = serializer.errors
    return JsonResponse(context_data)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes((IsAuthenticated, AdminPermission))
def admin_vendor_detail(request, pk):
    context_data = dict()
    try:
        vendor = Vendor.objects.get(id=pk)
    except Vendor.DoesNotExist as e:
        raise e

    if request.method == 'GET':
        serializer = VendorSerializer(instance=vendor)
        context_data[constants.RESPONSE_RESULT] = serializer.data
        context_data[constants.RESPONSE_ERROR] = False
        context_data[constants.RESPONSE_MESSAGE] = 'Vendor retrieved successfully. '
        return JsonResponse(context_data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = VendorSerializer(instance=vendor, data=data)
        if serializer.is_valid():
            serializer.save()
            context_data[constants.RESPONSE_RESULT] = serializer.data
            context_data[constants.RESPONSE_ERROR] = False
            context_data[constants.RESPONSE_MESSAGE] = 'Vendor updated successfully.'
        else:
            context_data[constants.RESPONSE_ERROR] = True
            context_data[constants.RESPONSE_MESSAGE] = serializer.errors
    elif request.method == 'DELETE':
        vendor.user.delete()
        context_data[constants.RESPONSE_ERROR] = False
        context_data[constants.RESPONSE_MESSAGE] = 'Vendor deleted successfully.'
    return JsonResponse(context_data)


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated,))
def country_list(request):
    context_data = dict()
    countries = list(Country.objects.all().values('id', 'name'))
    states = list(State.objects.all().values('id', 'name', 'country_id'))
    cities = list(City.objects.all().values('id', 'name', 'state_id'))
    context_data[constants.RESPONSE_RESULT] = {
        "countries": countries,
        "states": states,
        'cities': cities
    }
    context_data[constants.RESPONSE_ERROR] = False
    context_data[constants.RESPONSE_MESSAGE] = 'SuccessFully'
    return JsonResponse(context_data)


def category_list(request):
    """
    Categories list will be our service title
    :param request:
    :return:
    """
    query = request.GET.get('q', '')
    if query:
        category_queryset = Category.objects.filter(Q(name__icontains=query))
    else:
        category_queryset = Category.objects.all()
    serializer = CatergorySerializer(category_queryset, many=True)
    context_data = dict()
    context_data[constants.RESPONSE_RESULT] = serializer.data
    context_data[constants.RESPONSE_ERROR] = False
    context_data[constants.RESPONSE_MESSAGE] = 'SuccessFully'
    return JsonResponse(context_data)


