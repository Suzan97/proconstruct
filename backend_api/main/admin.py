from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Proffesionals)
admin.site.register(models.ProductCategory)

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['get_username', 'mobile']
    def get_username(self,obj):
        return obj.user.username

admin.site.register(models.Customer, CustomerAdmin)

admin.site.register(models.Order)
admin.site.register(models.OrderItems)

admin.site.register(models.CustomerAddress)
admin.site.register(models.ProductRating)

#Product Image
admin.site.register(models.ProductImages)

class ProductImagesInline(admin.StackedInline):
    model = models.ProductImages

class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields={'slug':('title',)}
    inlines = [
        ProductImagesInline,
    ]

admin.site.register(models.Product,ProductAdmin)