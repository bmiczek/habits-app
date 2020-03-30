from rest_framework.permissions import IsAuthenticated

from backend.habits.models import Habit, Entry
from backend.habits.serializers import HabitSerializer, EntrySerializer
from rest_framework import generics


class HabitList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = HabitSerializer

    def get_queryset(self):
        return Habit.objects.all()


class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class EntryList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = EntrySerializer

    def get_queryset(self):
        habit = self.kwargs["habit_pk"]
        return Entry.objects.filter(habit=habit)


class EntryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = EntrySerializer

    def get_queryset(self):
        habit = self.kwargs["habit_pk"]
        return Entry.objects.filter(habit=habit)
