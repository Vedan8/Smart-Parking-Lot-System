from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class ParkingSlot(models.Model):
    
    slot_no = models.PositiveIntegerField(
        unique=True,
        validators=[MinValueValidator(1), MaxValueValidator(100)]
    )
    is_covered = models.BooleanField(default=False)
    is_ev_charging = models.BooleanField(default=False)
    is_occupied = models.BooleanField(default=False)

    class Meta:
        ordering = ['slot_no']

    def __str__(self):
        return f"Slot {self.slot_no}"
