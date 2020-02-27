from django.contrib import admin

# Register your models here.
from backend.habits.models import Habit, Entry

admin.site.register(Habit)
admin.site.register(Entry)