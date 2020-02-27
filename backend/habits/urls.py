from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from backend.habits import views

urlpatterns = [
    path('', views.HabitList.as_view()),
    path('<int:pk>/', views.HabitDetail.as_view()),
    path('<int:habit_pk>/entries/', views.EntryList.as_view()),
    path('<int:habit_pk>/entries/<int:pk>', views.EntryDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
