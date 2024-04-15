from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    #Tell Django that when we hit a url = select, or africa etc... we want to 
    # render the index.html template that react will then take over and show the right page
    path('select', index),
    path('africa', index),
    path('signin', index),
    path('signup', index),
    path('services', index),
    path('submit-your-signup-form', index)
]
