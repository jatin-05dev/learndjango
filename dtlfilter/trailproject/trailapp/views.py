from django.shortcuts import render

# Create your views here.


def landing(r):
    d={
        'name':'jatin',
        'class':'bca',
        'city':'bhopal',
        'p':'hello django',
        'p2':'this is cybrom',
        'l':['python',10,20,30]
    }
    # return render(r,'landing.html',d)
    return render(r,'landing.html',{'data':d})
