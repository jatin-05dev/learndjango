from django.shortcuts import render

# Create your views here.




def hero(req):
    return render(req,'Hero.html')

def second(req):
    return render(req,'second.html')
