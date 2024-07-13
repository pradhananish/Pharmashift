from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, DoctorViewSet, MedicalStoreViewSet, custom_jwt_token

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'doctors', DoctorViewSet)
router.register(r'medical-stores', MedicalStoreViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token/', custom_jwt_token),
]
