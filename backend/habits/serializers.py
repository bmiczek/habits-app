from rest_framework import serializers
from backend.habits.models import Habit, Entry


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ('id', 'date')


class HabitSerializer(serializers.ModelSerializer):
    entries = EntrySerializer(many=True, read_only=True)

    class Meta:
        model = Habit
        fields = ('id', 'title', 'occurrence', 'entries')
