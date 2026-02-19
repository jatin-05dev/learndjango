from django.shortcuts import render
from .forms import StudentForm
from django.shortcuts import render, redirect
from .models import  Emp
def login(req):
    return render(req,'Login.html')

# Create your views here.
 
 

def Sign(request):
    if request.method == "POST":
        form = StudentForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("login")  # ✅ Only redirect if form is valid
        # If form is invalid, it will fall through and render the template with errors
    else:
        form = StudentForm()
    return render(request, "Sign.html", {"form": form})





   
