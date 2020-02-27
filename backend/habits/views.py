from backend.habits.models import Habit, Entry
from backend.habits.serializers import HabitSerializer, EntrySerializer
from rest_framework import generics


class HabitList(generics.ListCreateAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer


class EntryList(generics.ListCreateAPIView):
    serializer_class = EntrySerializer

    def get_queryset(self):
        habit = self.kwargs['habit_pk']
        return Entry.objects.filter(habit=habit)


class EntryDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EntrySerializer

    def get_queryset(self):
        habit = self.kwargs['habit_pk']
        return Entry.objects.filter(habit=habit)

