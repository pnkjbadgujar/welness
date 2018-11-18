import requests
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.template import Context
from django.template.loader import render_to_string, get_template


def send_sms(mobile=None, message=''):
    context_dict = dict()
    if mobile:
        context_dict['error'] = False
        context_dict['message'] = 'Ok'
        payload = {
            'user': 'clickeasy',
            'password': '9762050425',
            'mobile': mobile,
            'message': message,
            'sender': 'ClEasy',
            'type': '3'
        }
        r = requests.get('https://login.bulksmsgateway.in/sendmessage.php', params=payload)
        print(r.json())
    else:
        context_dict['error'] = True
        context_dict['message'] = 'Mobile number is required'
    return context_dict


def send_email(subject='', message='', recipient_list=list):
    if isinstance(recipient_list, str):
        recipient_list = [recipient_list, ]
    elif isinstance(recipient_list, list):
        recipient_list = recipient_list
    try:
        email_from = settings.EMAIL_HOST_USER
        send_mail(subject, message, email_from, recipient_list)
    except Exception as e:
        print(str(e))


def account_verification_email(context, recipient_list=list):
    try:
        subject = "Verify your email address for your Click Eazy account"
        from_email = settings.EMAIL_HOST_USER
        url = 'http://www.clickeazy.com/verify_email?code=' + \
              str(context.get('code')) + '&user_id=' + str(context.get('user_id'))
        ctx = {
            'name': context.get('name'),
            'action_url': url
        }
        message = get_template('email/account_verification.html').render(ctx)
        msg = EmailMessage(subject, message, to=recipient_list, from_email=from_email)
        msg.content_subtype = 'html'
        msg.send()
    except Exception as e:
        print(str(e))
