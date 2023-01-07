from django.db import models

# Create your models here.
class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'
        
    def __str__(self):
        return self.username
        
class MenuCategories(models.Model):
    descripcion = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'menu_categories'

    def __str__(self):
        return self.descripcion


class MenuProducts(models.Model):
    nombre_plato = models.CharField(max_length=100)
    ingredientes = models.CharField(max_length=400)
    preparacion = models.TextField()
    img = models.CharField(max_length=400)
    img_detail = models.CharField(max_length=400)
    categoria = models.ForeignKey(MenuCategories, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'menu_products'
        
    def __str__(self):
        return self.nombre_plato


class MenuReservas(models.Model):
    id_user = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='id_user')
    fecha = models.DateField()
    hora = models.TimeField()
    descripcion = models.CharField(max_length=400)
    class Meta:
        managed = False
        db_table = 'menu_reservas'

    def __str__(self):
        return self.descripcion