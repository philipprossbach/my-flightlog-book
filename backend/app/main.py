from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import AsyncSessionLocal
from app import models, schemas, crud

app = FastAPI()

# Dependency
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/flights/", response_model=schemas.FlightRead)
async def create_flight(flight: schemas.FlightCreate, db: AsyncSession = Depends(get_db)):
    return await crud.create_flight(db, flight)

@app.get("/flights/", response_model=list[schemas.FlightRead])
async def list_flights(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    return await crud.get_flights(db, skip=skip, limit=limit)
