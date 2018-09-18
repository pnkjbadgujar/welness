from rest_framework import permissions
from account.constants import ADMIN, CUSTOMER, VENDOR


class CustomerPermission(permissions.BasePermission):
    """
    Customer user permitted
    """
    def has_permission(self, request, view):
        return request.user.type == CUSTOMER or request.user.type == VENDOR or request.user.type == ADMIN


class VendorPermission(permissions.BasePermission):
    """
    Vendor and Admin user permitted
    """
    def has_permission(self, request, view):
        return request.user.type == VENDOR or request.user.type == ADMIN


class AdminPermission(permissions.BasePermission):
    """
    Only Admin user permitted
    """
    def has_permission(self, request, view):
        return request.user.type == ADMIN
