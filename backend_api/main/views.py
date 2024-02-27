from . import serializers
from rest_framework import generics,permissions,pagination,viewsets
from . import models

from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Customer, Proffesionals

# Create your views here.

#Proffesionals
class ProffesionalList(generics.ListCreateAPIView):
    queryset = models.Proffesionals.objects.all()
    serializer_class = serializers.ProffesionalSerializer

class ProffesionalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Proffesionals.objects.all()
    serializer_class = serializers.ProffesionalDetailSerializer

@csrf_exempt
def proffesional_register(request):  
    first_name=request.POST.get('first_name')
    last_name=request.POST.get('last_name')
    username=request.POST.get('username')
    email=request.POST.get('email')
    mobile=request.POST.get('mobile')
    address=request.POST.get('address')
    password=request.POST.get('password')
    try:

        # Check if the username already exists
        if User.objects.filter(username=username).exists():
            raise IntegrityError("Username already exists")

        
        # Check if the mobile number already exists
        if Proffesionals.objects.filter(mobile=mobile).exists():
            raise IntegrityError("Mobile number already exists")

        # Create the user
        user = User.objects.create_user(
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,
            email=email,
        )

        # Create the customer
        proffesional = Proffesionals.objects.create(user=user, mobile=mobile, address=address)

        msg = {
            'bool': True,
            'user': user.id,
            'proffesional': proffesional.id,
            'msg': 'Registration successful!!!'
        }
    except IntegrityError as e:
        msg = {
            'bool': False,
            'msg': str(e)
        }

    return JsonResponse(msg) 


#Product
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs=super().get_queryset()
        category_id = self.request.GET.get('category')
        if category_id:
            category = models.ProductCategory.objects.get(id=category_id)
            qs = qs.filter(category=category)
        return qs
    
class TagProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs=super().get_queryset()
        tag=self.kwargs['tag']
        qs = qs.filter(tags_icontains=tag)
        return qs

class RelatedProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs=super().get_queryset()
        product_id = self.kwargs['pk']
        product = models.Product.objects.get(id=product_id)
        qs = qs.filter(category=product.category).exclude(id=product_id)
        return qs

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer  

#Customers
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer

@csrf_exempt
def customer_login(request): 
    username=request.POST.get('username')
    password=request.POST.get('password')
    user=authenticate(username=username,password=password)

    if user:
        msg={
            'bool':True,
            'user':user.username,
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid username or password'
        }
    return JsonResponse(msg) 

@csrf_exempt
def customer_register(request):  
    first_name=request.POST.get('first_name')
    last_name=request.POST.get('last_name')
    username=request.POST.get('username')
    email=request.POST.get('email')
    mobile=request.POST.get('mobile')
    password=request.POST.get('password')
    try:

        # Check if the username already exists
        if User.objects.filter(username=username).exists():
            raise IntegrityError("Username already exists")
        
        # Check if the email already exists
        if User.objects.filter(email=email).exists():
            raise IntegrityError("Email already exists")
        
        # Check if the mobile number already exists
        if Customer.objects.filter(mobile=mobile).exists():
            raise IntegrityError("Mobile number already exists")

        # Create the user
        user = User.objects.create_user(
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,
            email=email,
        )

        # Create the customer
        customer = Customer.objects.create(user=user, mobile=mobile)

        msg = {
            'bool': True,
            'user': user.id,
            'customer': customer.id,
            'msg': 'Registration successful!!!'
        }
    except IntegrityError as e:
        msg = {
            'bool': False,
            'msg': str(e)
        }

    return JsonResponse(msg) 

#Order
class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer

class OrderDetail(generics.ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id=self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter(order=order)
        return order_items

class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomAddressSerializer
    queryset = models.CustomerAddress.objects.all()

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductRatingSerializer
    queryset = models.ProductRating.objects.all()

#Categories
class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer