from fastapi import FastAPI

app = FastAPI(title="Flight Tracker Backend")

@app.get("/health")
async def health():
    return {"status": "ok"}
