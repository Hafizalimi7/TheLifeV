from django.contrib import admin
from .models import ContactSubmission, PaymentConfirmation

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'source', 'created_at']
    list_filter = ['source', 'created_at']
    search_fields = ['name', 'email', 'phone', 'message']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone', 'source')
        }),
        ('Message', {
            'fields': ('message',)
        }),
        ('Metadata', {
            'fields': ('created_at',),
            'classes': ('collapse',)
        }),
    )

@admin.register(PaymentConfirmation)
class PaymentConfirmationAdmin(admin.ModelAdmin):
    list_display = [
        'customer_name', 'customer_email', 'amount', 'currency', 'country',
        'service_name', 'status', 'payment_intent_id', 'reference', 'payment_date'
    ]
    list_filter = ['status', 'currency', 'country', 'service_name', 'payment_date']
    search_fields = [
        'customer_name', 'customer_email', 'reference', 'payment_intent_id', 'service_name'
    ]
    readonly_fields = ['reference', 'payment_date']
    ordering = ['-payment_date']
    
    fieldsets = (
        ('Customer Information', {
            'fields': ('customer_name', 'customer_email', 'country')
        }),
        ('Payment Details', {
            'fields': ('amount', 'currency', 'service_name', 'status', 'payment_intent_id', 'reference')
        }),
        ('Metadata', {
            'fields': ('payment_date',),
            'classes': ('collapse',)
        }),
    )
