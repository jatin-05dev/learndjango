from django.db import models

# Create your models here.

class Stu(models.Model):
    img=models.ImageField(null=True,upload_to='img/')
    audio=models.FileField(null=True,upload_to='aud/')
    video=models.FileField(null=True,upload_to='vid/')
