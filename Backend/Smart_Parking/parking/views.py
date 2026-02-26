from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import ParkingSlot
from .serializers import ParkingSlotSerializer


# 1️⃣ Add Slot + List All Slots
class ParkingSlotListCreateAPIView(APIView):

    # GET → View All Slots
    def get(self, request):
        slots = ParkingSlot.objects.all().order_by('slot_no')
        serializer = ParkingSlotSerializer(slots, many=True)
        return Response(serializer.data)

    # POST → Add New Slot
    def post(self, request):
        serializer = ParkingSlotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 2️⃣ Park Vehicle
class ParkVehicleAPIView(APIView):

    def post(self, request):
        needs_ev = request.data.get("needsEV", False)
        needs_cover = request.data.get("needsCover", False)

        slot = ParkingSlot.objects.filter(
            is_occupied=False,
            is_ev_charging=needs_ev,
            is_covered=needs_cover
        ).order_by('slot_no').first()

        if not slot:
            return Response(
                {"message": "No slot available"},
                status=status.HTTP_404_NOT_FOUND
            )

        slot.is_occupied = True
        slot.save()

        return Response({
            "message": f"Allocated Slot {slot.slot_no}"
        })


# 3️⃣ Remove Vehicle
class RemoveVehicleAPIView(APIView):

    def post(self, request, slot_id):
        slot = get_object_or_404(ParkingSlot, id=slot_id)

        if not slot.is_occupied:
            return Response(
                {"message": "Slot already empty"},
                status=status.HTTP_400_BAD_REQUEST
            )

        slot.is_occupied = False
        slot.save()

        return Response({
            "message": f"Slot {slot.slot_no} is now free"
        })