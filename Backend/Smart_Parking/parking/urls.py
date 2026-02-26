from django.urls import path
from .views import (
    ParkingSlotListCreateAPIView,
    ParkVehicleAPIView,
    RemoveVehicleAPIView,
)

urlpatterns = [
    path('slots/', ParkingSlotListCreateAPIView.as_view()),
    path('park/', ParkVehicleAPIView.as_view()),
    path('remove/<int:slot_id>/', RemoveVehicleAPIView.as_view()),
]