from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token  # <-- Librería del token
from . import views

urlpatterns = [
    path('hello/', views.HelloView.as_view(), name='hello'), # <-- Ruta de prueba que se accede solo si se envía el token
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # <-- Link para obtener el token
    path('userfilter/<int:id_user>',views.UserFilterDate.as_view()),
    path('register/',views.RegisterUserAPIView.as_view()),
    path('listdate/',views.ListDate.as_view()),
    path('listdate/<int:id>',views.ListDateDetail.as_view()),
    path('listcategories/',views.ListCategories.as_view()),
    path('listproducts/<int:id>',views.ListProductsDetail.as_view()),
    path('listproducts/',views.ListProducts.as_view()),
    path('categoriefilter/<int:categoria_id>', views.CategorieFilter.as_view()),
]