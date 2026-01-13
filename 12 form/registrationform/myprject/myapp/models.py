from django.db import models

# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField()
    contact=models.IntegerField()
    tel=models.IntegerField()
    quali=models.CharField(max_length=50)
    state=models.CharField(max_length=50)
    gender=models.CharField(max_length=50)
    img=models.ImageField()
    document=models.FileField()
    # audio=models.FileField()
    # video=models.FileField()


# same as all