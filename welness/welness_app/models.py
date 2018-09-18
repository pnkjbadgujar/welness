from django.db import models
from account.models import Vendor, User
from account import constants
# Create your models here.


class OperatingHours(models.Model):
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    day = models.IntegerField(choices=constants.DAYS)
    opening_time = models.TimeField()
    closing_time = models.TimeField()

    def __str__(self):
        return self.vendor.name


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rate = models.FloatField(default=0.0)
    title = models.CharField(max_length=200)
    comment = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.email


class Category(models.Model):
    name = models.CharField(max_length=200)
    image_name = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class CategoryService(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    service_time = models.TimeField(blank=True, null=True)
    price = models.FloatField(default=0.0)
    discount_price = models.FloatField(default=0.0)
    brand = models.CharField(max_length=200)
    image_name = models.TextField(blank=True, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.FloatField(default=0.0)

    def __str__(self):
        return self.user.email


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    service = models.ForeignKey(CategoryService, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    price = models.FloatField(default=0.0)

    def __str__(self):
        return self.service.title


class Appointment(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    address = models.TextField()
    appointment_date_time = models.DateTimeField()

    def __str__(self):
        return self.cart.user


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(CategoryService, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.email
