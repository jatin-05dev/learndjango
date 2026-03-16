from django.db import models

class Booking(models.Model):
    name2 = models.CharField(max_length=100)
    email2 = models.EmailField()
    phone2 = models.CharField(max_length=15)
    adventure = models.CharField(max_length=100)
    date = models.DateField()
    persons = models.IntegerField()
    payment = models.CharField(max_length=20)
    price = models.IntegerField()
    message = models.TextField()

    def __str__(self):
        return self.name2