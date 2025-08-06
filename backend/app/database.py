import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://flightuser:flightpass@db/flighttracker")

engine = create_async_engine(DATABASE_URL, echo=True, future=True)
AsyncSessionLocal = sessionmaker(engine, autocommit=False, autoflush=False, class_=AsyncSession)
