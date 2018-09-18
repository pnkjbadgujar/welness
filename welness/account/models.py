from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from account import constants


class UserManager(BaseUserManager):
    def create_vendor(self, email, password=None):
        """
                Creates and saves a User with the given email, date of
                birth and password.
                """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )
        user.type = constants.VENDOR
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )
        user.type = constants.CUSTOMER
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(email, password=password)
        user.type = constants.ADMIN
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):

    USER_TYPE = (
        (constants.ADMIN, 'ADMIN'),
        (constants.VENDOR, 'VENDOR'),
        (constants.CUSTOMER, 'CUSTOMER')
    )

    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    type = models.IntegerField(choices=USER_TYPE, default=constants.CUSTOMER)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def get_full_name(self):
        # The user is identified by their email address
        return self.email

    def get_short_name(self):
        # The user is identified by their email address
        return self.email

    def __str__(self):              # __unicode__ on Python 2
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.type == constants.ADMIN


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Customer(models.Model):
    GENDER_TYPE = (
        ('M', 'Male'),
        ('F', 'Female')
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    date_of_birth = models.DateField(null=True, blank=True)
    mobile_no = models.CharField(max_length=10, null=True, blank=True)
    gender = models.IntegerField(choices=GENDER_TYPE)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    def get_full_name(self):
        # The user is identified by their email address
        return self.first_name + ' ' + self.last_name

    def get_short_name(self):
        # The user is identified by their email address
        return self.first_name

    def save(self, *args, **kwargs):
        self.user.type = constants.CUSTOMER
        super(Customer, self).save(*args, **kwargs)


class Vendor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    contact_name = models.CharField(max_length=200, blank=True, null=True)
    contact_title = models.CharField(max_length=200, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.ForeignKey('City', null=True)
    state = models.ForeignKey('State', null=True)
    country = models.ForeignKey('Country', null=True)
    postal_code = models.CharField(max_length=6, blank=True, null=True)
    mobile_no = models.CharField(max_length=10, null=True, blank=True)
    notify_of_our_project = models.TextField(blank=True, null=True)
    return_consent_receive = models.BooleanField(default=False)
    notes = models.TextField(blank=True, null=True)
    image_name = models.TextField(blank=True, null=True)
    start_time = models.TimeField(null=True)
    end_time = models.TimeField(null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.user.type = constants.VENDOR
        super(Vendor, self).save(*args, **kwargs)


class Country(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class State(models.Model):
    name = models.CharField(max_length=120)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=120)
    state = models.ForeignKey(State, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
