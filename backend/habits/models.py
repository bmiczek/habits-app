from django.db import models


# Create your models here.
class Habit(models.Model):
    DAILY = 1
    WEEKLY = 2
    WEEKDAY = 3

    OCCURRENCES = (
        (DAILY, 'Daily'),
        (WEEKLY, 'Weekly'),
        (WEEKDAY, 'Weekday')
    )

    title = models.CharField(max_length=100)
    occurrence = models.IntegerField(choices=OCCURRENCES, default=DAILY)
    objects = models.Manager()

    def __str__(self):
        return self.title


class Entry(models.Model):
    date = models.DateField('date')
    habit = models.ForeignKey(Habit, related_name='entries', on_delete=models.CASCADE)
    objects = models.Manager()

    def __str__(self):
        return self.date.strftime("%m/%d/%Y")
