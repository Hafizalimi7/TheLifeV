# The Life Voyage - Django Email API

This Django project replicates the Express.js email functionality for The Life Voyage application. It provides REST API endpoints for sending contact form submissions and payment confirmation emails.

## Features

- **Contact Form Email API** - Send contact form submissions via email
- **Payment Confirmation API** - Send payment confirmation emails with bank details
- **Database Storage** - All submissions and confirmations are stored in the database
- **Admin Panel** - Easy management of all email submissions
- **Swagger Documentation** - API documentation available at `/`
- **CORS Support** - Cross-origin requests enabled for frontend integration

## API Endpoints

### 1. Contact Form Email
- **URL**: `POST /app/send-email/`
- **Description**: Sends contact form submission email
- **Request Body**:
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "source": "Website Contact Form",
    "message": "I'm interested in your services"
}
```

### 2. Payment Confirmation
- **URL**: `POST /app/confirmation/`
- **Description**: Sends payment confirmation email
- **Request Body**:
```json
{
    "customer_name": "John Doe",
    "customer_email": "john@example.com",
    "amount": 5000,
    "reference": "AbcTda"
}
```

### 3. Health Check
- **URL**: `GET /app/health/`
- **Description**: API health check endpoint

## Setup Instructions

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Environment Variables
Create a `.env` file in the project root with the following variables:

```env
# Email Configuration
SMTP_HOST=your-smtp-server.com
SMTP_PORT=465
EMAIL_USE_SSL=True
EMAIL_USE_TLS=False

# Email Credentials
EMAIL=your-email@thelifevoyage.com
PASS=your-email-password
```

### 3. Database Setup
```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Create Superuser (Optional)
```bash
python manage.py createsuperuser
```

### 5. Run the Server
```bash
python manage.py runserver
```

## Email Configuration

### cPanel SMTP (Recommended)
```env
SMTP_HOST=your-cpanel-smtp-server.com
SMTP_PORT=465
EMAIL_USE_SSL=True
EMAIL_USE_TLS=False
EMAIL=your-cpanel-email@domain.com
PASS=your-cpanel-email-password
```

### Gmail SMTP (Alternative)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USE_SSL=False
EMAIL_USE_TLS=True
EMAIL=your-gmail@gmail.com
PASS=your-gmail-app-password
```

## Usage Examples

### Contact Form Submission
```bash
curl -X POST http://localhost:8000/app/send-email/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "source": "Website Contact Form",
    "message": "I would like to know more about your services"
  }'
```

### Payment Confirmation
```bash
curl -X POST http://localhost:8000/app/confirmation/ \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "John Doe",
    "customer_email": "john@example.com",
    "amount": 5000,
    "reference": "AbcTda"
  }'
```

## Admin Panel

Access the Django admin panel at `http://localhost:8000/admin/` to:
- View all contact form submissions
- View all payment confirmations
- Manage email data

## API Documentation

- **Swagger UI**: `http://localhost:8000/`
- **ReDoc**: `http://localhost:8000/redoc/`

## Project Structure

```
thelifevoyage/
├── app/
│   ├── models.py              # Database models
│   ├── views.py               # API views
│   ├── serializers.py         # Data serializers
│   ├── email_service.py       # Email service utility
│   ├── admin.py               # Admin panel configuration
│   └── urls.py                # URL routing
├── thelifevoyage/
│   ├── settings.py            # Django settings
│   └── urls.py                # Main URL configuration
├── requirements.txt           # Python dependencies
├── manage.py                  # Django management script
└── db.sqlite3                # SQLite database
```

## Differences from Express.js Version

### Improvements
1. **Database Storage** - All submissions are stored in the database
2. **Admin Panel** - Easy management through Django admin
3. **Better Error Handling** - Comprehensive error handling and logging
4. **Data Validation** - Built-in data validation with serializers
5. **HTML Email Support** - Rich HTML email templates
6. **Logging** - Detailed logging for debugging

### API Response Format
The Django version returns more detailed responses:
```json
{
    "message": "Email sent successfully!",
    "submission_id": 1
}
```

## Troubleshooting

### Email Not Sending
1. Check your SMTP settings in `.env`
2. Verify email credentials
3. Check firewall/port settings
4. Review logs in `logs/django.log`

### CORS Issues
1. Ensure CORS settings are configured correctly
2. Add your frontend domain to `CORS_ALLOWED_ORIGINS`

### Database Issues
1. Run `python manage.py makemigrations`
2. Run `python manage.py migrate`
3. Check database permissions

## License

This project is part of The Life Voyage application. 