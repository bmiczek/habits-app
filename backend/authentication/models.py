from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from rest_framework_simplejwt.tokens import AccessToken


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **extra_fields):
        if email is None:
            raise TypeError("User must have an email address")

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, **extra_fields):
        if password is None:
            raise TypeError("Superuser must have a password")

        user = self.create_user(email, password, **extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user


class User(AbstractUser):
    username = None
    email = models.EmailField(db_index=True, unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def token(self):
        return self._generate_jwt_token()

    def get_full_name(self):
        if self.first_name and self.last_name:
            return super().get_full_name()
        else:
            return self.email

    def get_short_name(self):
        if self.first_name:
            return super().get_short_name()
        else:
            return self.email

    def _generate_jwt_token(self):
        token = AccessToken.for_user(self)

        return str(token)
