from django.shortcuts import render
from .models import Stu
# Create your views here.

import json

# p_data={'active1':True,
#         'active2':False,
#         'active3':None}

# j_data=json.dumps(p_data)
# print(type(p_data))
# print(j_data)
# print(type(j_data))

# j2_data='''{"active1":true,
# "active2":false,"active3":null}'''

# p2_data=json.loads(j2_data)
# print(p2_data)
# print(type(p2_data))
from django.http import JsonResponse
import json


# def listt(req):
#     emp_data = Stu.objects.all()
#     print(emp_data)
#     p_data = list(emp_data.values())
#     print(p_data)
#     j_data = json.dumps(p_data)
#     print(j_data)
#     print(type(j_data))
#     return JsonResponse(j_data,safe=False)


def listt(req):
    emp_data = Stu.objects.all()
    p_data = list(emp_data.values())
    return JsonResponse(p_data,safe=False)

    
def detail(req, pk):
    emp = Stu.objects.get(pk=pk)
    data = {
            "id": emp.id,
            "name": emp.name,
            "age": emp.age,
        }
    return JsonResponse(data)


def home(req):
    return render(req,'home.html')

