from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from .views import (RegisterAPIView, UserRetrieveUpdateAPIView)


app_name = "authentication"
urlpatterns = [
    path("login/", TokenObtainPairView.as_view()),
    path("register/", RegisterAPIView.as_view()),

    path("refresh/", TokenRefreshView.as_view()),
    path("verify/", TokenVerifyView.as_view()),

    path("user/", UserRetrieveUpdateAPIView.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)