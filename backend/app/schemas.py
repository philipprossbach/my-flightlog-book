from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class FlightBase(BaseModel):
    departure_airport: str
    departure_datetime: datetime
    arrival_airport: str
    arrival_datetime: datetime
    flight_number: str
    flight_type: str  # "privat" oder "geschäftlich"
    airline: Optional[str] = None
    seat_number: Optional[str] = None
    aircraft_registration: Optional[str] = None
    aircraft_type: Optional[str] = None
    comment: Optional[str] = None

class FlightCreate(FlightBase):
    pass

class FlightRead(FlightBase):
    id: int

    class Config:
        orm_mode = True
