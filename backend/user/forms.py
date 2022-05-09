from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.forms import EmailField
from user.validators import RegisteredEmailValidator

class UserRegisterationForm(UserCreationForm) :
    class Meta :
        # AUTH_USER_MODEL로 설정한 모델을 찾아줌
        model = get_user_model()
        fields = ('email', 'nickname', 'age')

# 로그인 시 id를 email로 설정
class LoginForm(AuthenticationForm) :
    username = EmailField(widget = forms.EmailInput(attrs = {'autofocus' : True}))

# 이메일 인증
class VerificationEmailForm(forms.Form) :
    email = EmailField(widget = forms.EmailInput(attrs = {'autofocus' : True}), validators = (EmailField.default_validators + [RegisteredEmailValidator()]))