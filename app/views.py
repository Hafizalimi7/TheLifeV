from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import ContactSubmissionSerializer, PaymentConfirmationSerializer
from .models import ContactSubmission, PaymentConfirmation
from .email_service import EmailService
import logging

logger = logging.getLogger(__name__)

class ContactEmailView(generics.GenericAPIView):
    serializer_class = ContactSubmissionSerializer
    queryset = ContactSubmission.objects.all()
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Save to database
            contact_submission = serializer.save()
            
            # Send email
            success, message = EmailService.send_contact_form_email(serializer.validated_data)
            
            if success:
                return Response({
                    'message': 'Email sent successfully!',
                    'submission_id': contact_submission.id
                }, status=status.HTTP_201_CREATED)
            else:
                # Even if email fails, we still have the submission saved
                logger.error(f"Email sending failed for submission {contact_submission.id}: {message}")
                return Response({
                    'message': 'Contact form submitted but email delivery failed. We will follow up soon.',
                    'submission_id': contact_submission.id,
                    'email_error': message
                }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PaymentConfirmationView(generics.GenericAPIView):
    serializer_class = PaymentConfirmationSerializer
    queryset = PaymentConfirmation.objects.all()
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Save to database
            payment_confirmation = serializer.save()
            
            # Use the serializer to get all data including the generated reference
            full_data = PaymentConfirmationSerializer(payment_confirmation).data
            if full_data['service_name'] == 'Comprehensive Cancer Care (First Instalment)' and full_data['status'] == 'succeeded' and float(full_data['amount']) <= 800:
                full_data['remaining_balance'] = 800 - float(full_data['amount'])
            elif full_data['service_name'] == 'Comprehensive Cancer Care' and full_data['status'] == 'succeeded' and float(full_data['amount']) <= 800:
                full_data['remaining_balance'] = 800 - float(full_data['amount'])
            elif full_data['service_name'] == 'Returning Customers Package (First Instalment)' and full_data['status'] == 'succeeded' and float(full_data['amount']) <= 650:
                full_data['remaining_balance'] = 650 - float(full_data['amount'])
            elif full_data['service_name'] == 'Holistic Cancer Prevention Program 1-on-1 (First Instalment)' and full_data['status'] == 'succeeded' and float(full_data['amount']) <= 700:
                full_data['remaining_balance'] = 700 - float(full_data['amount'])
            elif full_data['service_name'] == 'Holistic Cancer Prevention Program Group (First Instalment)' and full_data['status'] == 'succeeded' and float(full_data['amount']) <= 480:
                full_data['remaining_balance'] = 480 - float(full_data['amount'])
            else:
                full_data['remaining_balance'] = 0
            # Send email
            success, message = EmailService.send_payment_confirmation_email(full_data)
            
            if success:
                return Response({
                    'message': 'Email sent successfully!',
                    'confirmation_id': payment_confirmation.id,
                    'reference': payment_confirmation.reference
                }, status=status.HTTP_201_CREATED)
            else:
                # Even if email fails, we still have the confirmation saved
                logger.error(f"Email sending failed for confirmation {payment_confirmation.id}: {message}")
                return Response({
                    'message': 'Payment confirmation recorded but email delivery failed. We will follow up soon.',
                    'confirmation_id': payment_confirmation.id,
                    'reference': payment_confirmation.reference,
                    'email_error': message
                }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HealthCheckView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response({
            'status': 'healthy',
            'message': 'The Life Voyage API is running'
        }, status=status.HTTP_200_OK)
