from django.shortcuts import render

# Create your views here.


def landing(r):
    return render(r,'landing.html')