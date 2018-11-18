from django.conf.urls import url
from account.views import UserAuthToken, logout, change_user_password, user_signup, get_otp, verify_email
from django.conf import settings
from django.conf.urls.static import static
from welness_app import views

urlpatterns = [
    url(r'^login/$', UserAuthToken.as_view()),
    url(r'^user_sign_up/$', user_signup),
    url(r'^change_user_password/$', change_user_password),
    url(r'^logout/$', logout),
    url(r'^user_list/$', views.user_list),
    url(r'^admin_vendor_list/$', views.admin_vendor_list),
    url(r'^admin_vendor_detail/(?P<pk>[0-9]+)/$', views.admin_vendor_detail),
    url(r'^countries/$', views.country_list),
    url(r'^categories/$', views.category_list),
    url(r'^get_otp/$', get_otp),
    url(r'^verify_email/(?P<pk>[0-9]+)/$', verify_email),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
