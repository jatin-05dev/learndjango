from django import forms
from .models import Emp
class StudentForm(forms.ModelForm):
    class Meta:
        model = Emp
        fields = ['name', 'age', 'email', 'phone', 'resume']
        # fields = '__all__'