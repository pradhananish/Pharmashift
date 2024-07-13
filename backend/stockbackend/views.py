from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_jwt.views import obtain_jwt_token
from .models import User, Doctor, MedicalStore
from .serializers import UserSerializer, DoctorSerializer, MedicalStoreSerializer, JWTSerializer
from rest_framework.decorators import api_view
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import authenticate, login


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class MedicalStoreViewSet(viewsets.ModelViewSet):
    queryset = MedicalStore.objects.all()
    serializer_class = MedicalStoreSerializer

@api_view(['POST'])
def custom_jwt_token(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)
    if user:
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        return Response({
            'token': token,
            'user': UserSerializer(user).data
        })
    return Response(status=status.HTTP_401_UNAUTHORIZED)


