from django.urls import path
from . import views

urlpatterns = [
    path('send-email/', views.ContactEmailView.as_view(), name='send_contact_email'),
    path('confirmation/', views.PaymentConfirmationView.as_view(), name='send_payment_confirmation'),
    path('health/', views.HealthCheckView.as_view(), name='health_check'),
]
