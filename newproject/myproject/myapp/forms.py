from django import forms
from .models import emp

class EmpForm(forms.ModelForm):

    class Meta:
        model = emp
        fields = "__all__"

        
