from rest_framework import serializers
from .models import User, Doctor, MedicalStore
from rest_framework_jwt.settings import api_settings

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'role']  # Fixed the syntax error here
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class DoctorSerializer(serializers.ModelSerializer):
    user = UserSerializer()  # Nested serializer

    class Meta:
        model = Doctor
        fields = ['id', 'user', 'specialization']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        doctor = Doctor.objects.create(user=user, **validated_data)
        return doctor

class MedicalStoreSerializer(serializers.ModelSerializer):
    user = UserSerializer()  # Nested serializer

    class Meta:
        model = MedicalStore
        fields = ['id', 'user', 'store_name']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        medical_store = MedicalStore.objects.create(user=user, **validated_data)
        return medical_store

class JWTSerializer(serializers.Serializer):
    token = serializers.CharField()
    user = UserSerializer()
