from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny  # <-- se importan los permisos
from rest_framework import generics


#serializer
from .serializers import RegisterSerializer,ReservasSerializer,ProductsSerializer,CategoriesSerializer

#modelos
from .models import MenuReservas,MenuCategories,MenuProducts

class HelloView(APIView):
    permission_classes = (IsAuthenticated,)             # <-- Se indica que tiene que estar autenticado para ingresar a esta vista

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
    
#Class based view to register user
class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class UserFilterDate(APIView):
    def get(self,request,id_user):
        data = MenuReservas.objects.filter(id_user=id_user)
        serData = ReservasSerializer(data,many=True)
        return Response(serData.data)
    
#CLASS DATE
class ListDate(APIView):
    def get(self,request):
        data = MenuReservas.objects.all()
        serData = ReservasSerializer(data,many=True)
        return Response(serData.data)
    
    def post(self,request):
        serData = ReservasSerializer(data=request.data)
        serData.is_valid(raise_exception=True)
        serData.save()
        
        return Response(serData.data) 

class ListDateDetail(APIView):
    
    def get(self,request,id):
        dataTarea = MenuReservas.objects.get(pk=id)
        serTarea = ReservasSerializer(dataTarea)
        
        return Response(serTarea.data)
    
    def put(self,request,id):
        dataTarea = MenuReservas.objects.get(pk=id)
        serTarea = ReservasSerializer(dataTarea,data=request.data)
        serTarea.is_valid(raise_exception=True)
        serTarea.save()
        
        return Response(serTarea.data)
    
    def delete(self,request,id):
        dataTarea = MenuReservas.objects.get(pk=id)
        serTarea = ReservasSerializer(dataTarea)
        
        dataTarea.delete()
        
        return Response(serTarea.data)

#CLASS CATEGORIES
class ListCategories(APIView):
    def get(self,request):
        data = MenuCategories.objects.all()
        serData = CategoriesSerializer(data,many=True)
        return Response(serData.data)
    
class CategorieFilter(APIView):
        def get(self,request,categoria_id):
            data = MenuProducts.objects.filter(categoria_id=categoria_id)
            serData = ProductsSerializer(data,many=True)
            return Response(serData.data)
#CLASS PRODUCTS
class ListProducts(APIView):
    def get(self,request):
        data = MenuProducts.objects.all()
        serData = ProductsSerializer(data,many=True)
        return Response(serData.data)
    
    def post(self,request):
        serData = ProductsSerializer(data=request.data)
        serData.is_valid(raise_exception=True)
        serData.save()
        
        return Response(serData.data) 
    
class ListProductsDetail(APIView):
    def get(self,request,id):
        dataTarea = MenuProducts.objects.get(pk=id)
        serTarea = ProductsSerializer(dataTarea)
        
        return Response(serTarea.data)