from django.db import models
from django.contrib.auth.models import User

# Create your models here.

#Seller Models

class Proffesionals(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)
    profile_img = models.ImageField(upload_to='prof_profile/', null=True)
    address = models.TextField(null=True)

    def  __str__(self):
        return self.user.username

#Category
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)

    def __str__(self):
        return self.title
    
#Product
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='category_product')
    proffesional = models.ForeignKey(Proffesionals, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()
    tags = models.TextField(null=True)
    slug = models.SlugField(max_length=200, unique=True,null=True) 

    def __str__(self):
        return self.title
    
    def tag_list(self):
       if self.tags:
            tagList = self.tags.split(',')
            return tagList
       else:
            return ["no tags found"]

#Customer Model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)
    profile_img = models.ImageField(upload_to='customer_profile/', null=True)

    def __str__(self):
        return self.user.username

#Order Model
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return '%s' % (self.order_time)
       
#Order Items Model
class OrderItems(models.Model): 
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')   
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title

 # Customer Address Model   
class CustomerAddress(models.Model): 
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_addresses')   
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address
    
#Product Rating and Reviews
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='rating_customers')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_ratings')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'

#Product Images Model 
class ProductImages(models.Model): 
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_imgs')   
    image = models.ImageField(upload_to='product_imgs/', null=True)

    def __str__(self):
        return self.image.url 
 