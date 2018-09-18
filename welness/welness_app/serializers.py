from rest_framework import serializers
from account.models import Vendor, User
from .models import Category


class VendorSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    start_time = serializers.TimeField(format="%I:%M %p")
    end_time = serializers.TimeField(format="%I:%M %p")
    user = serializers.SerializerMethodField()

    class Meta:
        model = Vendor
        fields = (
            'id', 'name', 'email', 'contact_name', 'mobile_no', 'contact_title', 'address', 'city', 'state', 'country',
            'postal_code', 'notify_of_our_project', 'return_consent_receive', 'notes', 'start_time', 'end_time',
            'user'
        )

    def get_user(self, obj):
        return {"id": obj.user.id, "email": obj.user.email}

    def create(self, validated_data):
        email = validated_data.pop('email')
        user = User.objects.create_vendor(email=email, password='vendor1234')
        validated_data['user'] = user
        return Vendor.objects.create(**validated_data)

    def update(self, instance, validated_data):
        email = validated_data.pop('email')
        instance.user.email = email
        instance.name = validated_data.get('name', instance.name)
        instance.mobile_no = validated_data.get('mobile_no', instance.mobile_no)
        instance.contact_name = validated_data.get('contact_name', instance.contact_name)
        instance.contact_title = validated_data.get('contact_title', instance.contact_title)
        instance.address = validated_data.get('address', instance.address)
        instance.city = validated_data.get('city', instance.city)
        instance.state = validated_data.get('state', instance.state)
        instance.country = validated_data.get('country', instance.country)
        instance.postal_code = validated_data.get('postal_code', instance.postal_code)
        instance.notify_of_our_project = validated_data.get('notify_of_our_project', instance.notify_of_our_project)
        instance.return_consent_receive = validated_data.get('return_consent_receive', instance.return_consent_receive)
        instance.notes = validated_data.get('notes', instance.notes)
        instance.start_time = validated_data.get('start_time', instance.start_time)
        instance.end_time = validated_data.get('end_time', instance.end_time)
        instance.save()
        return instance


class CatergorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'image_url')

    def get_image_url(self, obj):
        return obj.image_name
