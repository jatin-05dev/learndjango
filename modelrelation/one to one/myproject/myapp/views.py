from django.shortcuts import render
from myapp.models import Stu,Adhaar
# Create your views here.
def landing(req):
    return render(req,'landing.html')

def reverse_access(req):
    stu_data=Adhaar.objects.all()
    return render(req,'reverse_access.html',{'stu_data':stu_data})

def forward_access(req):
    a_data=Stu.objects.all()
    print(a_data)
    return render(req,'forward_access.html',{'a_data':a_data})