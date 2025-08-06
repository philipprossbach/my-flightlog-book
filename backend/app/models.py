from sqlalchemy import Column, Integer, String, DateTime, Enum
from sqlalchemy.orm import declarative_base
import enum

Base = declarative_base()

class FlightTypeEnum(str, enum.Enum):
    privat = "privat"
    geschaeftlich = "geschäftlich"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

class Flight(Base):
    __tablename__ = "flights"
    id = Column(Integer, primary_key=True)
    departure_airport = Column(String, nullable=False)
    departure_datetime = Column(DateTime, nullable=False)
    arrival_airport = Column(String, nullable=False)
    arrival_datetime = Column(DateTime, nullable=False)
    flight_number = Column(String, nullable=False)
    flight_type = Column(Enum(FlightTypeEnum), nullable=False)
