from django.urls import path
from .views import RoomView
from .views import signup_form_view  # make sure to import the view

urlpatterns = [
    path('room', RoomView.as_view()),
    path('submit-your-signup-form', signup_form_view, name='submit_signup_form'),
]


