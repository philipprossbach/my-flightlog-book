from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app import models, schemas

async def create_flight(db: AsyncSession, flight: schemas.FlightCreate):
    db_flight = models.Flight(**flight.dict())
    db.add(db_flight)
    await db.commit()
    await db.refresh(db_flight)
    return db_flight

async def get_flights(db: AsyncSession, skip: int = 0, limit: int = 100):
    result = await db.execute(select(models.Flight).offset(skip).limit(limit))
    return result.scalars().all()
