from rest_framework import serializers
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = [
            "id",
            "name2",
            "email2",
            "phone2",
            "adventure",
            "date",
            "persons",
            "payment",
            "price",
            "message"
        ]