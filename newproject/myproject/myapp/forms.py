from django import forms
from .models import emp

class EmpForm(forms.ModelForm):

    class Meta:
        model = emp
        fields = "__all__"

        widgets = {
            'fname': forms.TextInput(attrs={'class': 'input'}),
            'lname': forms.TextInput(attrs={'class': 'input'}),
            'email': forms.EmailInput(attrs={'class': 'input'}),
            'mobile': forms.TextInput(attrs={'class': 'input'}),
            'DOB': forms.DateInput(attrs={'type': 'date', 'class': 'input'}),
            'gender': forms.RadioSelect(),
        }
