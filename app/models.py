from django.db import models
from django.utils import timezone
import random
import string

# Create your models here.

class ContactSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    source = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.name} - {self.email} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
    
    class Meta:
        ordering = ['-created_at']

class PaymentConfirmation(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    country = models.CharField(max_length=10)
    currency = models.CharField(max_length=10)
    payment_intent_id = models.CharField(max_length=100)
    service_name = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    payment_date = models.DateTimeField(default=timezone.now)
    reference = models.CharField(max_length=50, blank=True, unique=True)

    def save(self, *args, **kwargs):
        if not self.reference:
            # Generate 4 random lowercase letters
            random_letters = random.choices(string.ascii_lowercase, k=4)
            
            # Get first and fourth letter of customer_name (uppercase if available)
            name = self.customer_name.upper() if self.customer_name else ''
            first_letter = name[0] if len(name) > 0 else random.choice(string.ascii_uppercase)
            fourth_letter = name[3] if len(name) > 3 else random.choice(string.ascii_uppercase)

            # Construct the 6-letter reference
            # Uppercase: first_letter (pos 0), fourth_letter (pos 3)
            ref = [
                first_letter,              # pos 0 - uppercase
                random_letters[0],        # pos 1 - lowercase
                random_letters[1],        # pos 2 - lowercase
                fourth_letter,            # pos 3 - uppercase
                random_letters[2],        # pos 4 - lowercase
                random_letters[3],        # pos 5 - lowercase
            ]

            self.reference = ''.join(ref)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.customer_name} - £{self.amount} - {self.payment_date.strftime('%Y-%m-%d %H:%M')}"
    
    class Meta:
        ordering = ['-payment_date']
