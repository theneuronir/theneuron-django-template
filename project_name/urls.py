from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from filebrowser.sites import site as filebrowser_site


urlpatterns = [
    path('admin/filebrowser/', filebrowser_site.urls),
    path('grappelli/', include('grappelli.urls')),
    path('tinymce/', include('tinymce.urls')),
    path('admin/', admin.site.urls),


    path('', TemplateView.as_view(template_name='pages/index.html')),
]

if settings.DEBUG:
    urlpatterns += static(
        prefix=settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )

    urlpatterns += static(
        prefix=settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
