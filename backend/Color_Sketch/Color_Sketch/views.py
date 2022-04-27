from django.views.generic import TemplateView

# 첫 페이지 관련 뷰 (단순 템플릿 뷰)
class HomeView(TemplateView) :
    template_name = 'home.html'