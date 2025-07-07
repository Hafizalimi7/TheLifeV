import os
from django.core.mail import send_mail, EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class EmailService:
    @staticmethod
    def send_contact_form_email(contact_data):
        """
        Send contact form submission email
        """
        subject = "New Contact Form Submission"
        from_email = os.getenv('EMAIL', 'noreply@thelifevoyage.com')
        recipient_list = [
            'info@thelifevoyage.com',
            os.getenv('EMAIL', 'noreply@thelifevoyage.com')
        ]
        context = contact_data.copy()
        html_content = render_to_string('email/contact_submission.html', context)
        text_content = strip_tags(html_content)
        try:
            msg = EmailMultiAlternatives(subject, text_content, from_email, recipient_list)
            msg.attach_alternative(html_content, "text/html")
            msg.send()
            return True, "Email sent successfully!"
        except Exception as e:
            return False, f"Failed to send email: {str(e)}"

    @staticmethod
    def send_payment_confirmation_email(payment_data):
        """
        Send payment confirmation email
        """
        subject = "Payment Confirmation and Next Steps"
        from_email = os.getenv('EMAIL', 'noreply@thelifevoyage.com')
        recipient_list = [
            'info@thelifevoyage.com',
            os.getenv('EMAIL', 'noreply@thelifevoyage.com'),
            payment_data['customer_email']
        ]
        context = payment_data.copy()
        # For display, convert amount to pounds if currency is GBP
        try:
            if context.get('currency', '').lower() == 'gbp':
                context['amount_display'] = f"£{float(context['amount']):.2f}"
                if 'remaining_balance' in context:
                    context['remaining_balance_display'] = f"£{float(context['remaining_balance']):.2f}"
                else:
                    context['remaining_balance_display'] = None
            else:
                context['amount_display'] = f"{context['amount']} {context.get('currency', '').upper()}"
                if 'remaining_balance' in context:
                    context['remaining_balance_display'] = f"{context['remaining_balance']} {context.get('currency', '').upper()}"
                else:
                    context['remaining_balance_display'] = None
        except Exception:
            context['amount_display'] = str(context.get('amount', ''))
            context['remaining_balance_display'] = str(context.get('remaining_balance', '')) if 'remaining_balance' in context else None
        html_content = render_to_string('email/payment_confirmation.html', context)
        text_content = strip_tags(html_content)
        try:
            msg = EmailMultiAlternatives(subject, text_content, from_email, recipient_list)
            msg.attach_alternative(html_content, "text/html")
            msg.send()
            return True, "Email sent successfully!"
        except Exception as e:
            return False, f"Failed to send email: {str(e)}" 