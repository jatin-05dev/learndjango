from django.shortcuts import render

# Create your views here.

import json

p_data={'active1':True,
        'active2':False,
        'active3':None}

j_data=json.dumps(p_data)
print(type(p_data))
print(j_data)
print(type(j_data))

j2_data='''{"active1":true,
"active2":false,"active3":null}'''

p2_data=json.loads(j2_data)
print(p2_data)
print(type(p2_data))
