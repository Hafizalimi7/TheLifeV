from rest_framework import serializers
from .models import ContactSubmission, PaymentConfirmation

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['name', 'email', 'phone', 'source', 'message']
        extra_kwargs = {
            'name': {'required': True},
            'email': {'required': True},
            'phone': {'required': True},
            'source': {'required': True},
            'message': {'required': True},
        }

class PaymentConfirmationSerializer(serializers.ModelSerializer):
    reference = serializers.CharField(read_only=True)
    class Meta:
        model = PaymentConfirmation
        fields = [
            'customer_name', 'customer_email', 'amount', 'country', 'currency',
            'payment_intent_id', 'service_name', 'status', 'reference'
        ]
        extra_kwargs = {
            'customer_name': {'required': True},
            'customer_email': {'required': True},
            'amount': {'required': True},
            'country': {'required': True},
            'currency': {'required': True},
            'payment_intent_id': {'required': True},
            'service_name': {'required': True},
            'status': {'required': True},
        }
