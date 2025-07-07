from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

schema_view = get_schema_view(
    openapi.Info(
        title="The Life Voyage Backend APIs",
        default_version='v1',
        description="All The Life Voyage  Backend APIs",
        #terms_of_service="https://www.ourapp.com/policies/terms/",
        contact=openapi.Contact(email="info@thelifevoyage.com"),
        license=openapi.License(name="License"),
    ),
    public=False,
    permission_classes=(permissions.AllowAny,),
)
admin.site.site_title = f"The Life Voyage Backend"
admin.site.site_header = f"Welcome To The Life Voyage Backend Admin Panel"
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("app/", include("app.urls")),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/api.json/', schema_view.without_ui(cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += staticfiles_urlpatterns()