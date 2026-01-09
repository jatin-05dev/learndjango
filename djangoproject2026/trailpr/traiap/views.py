from django.shortcuts import render

# Create your views here.




def hero(req):
    return render(req,'hero.html')

def second(req):
    return render(req,'second.html')
def career(req):
    return render(req,'career.html')
