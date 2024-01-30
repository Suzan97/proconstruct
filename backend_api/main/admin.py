from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Vendor)
admin.site.register(models.ProductCategory)


admin.site.register(models.Customer)

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