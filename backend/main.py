from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello_world() -> dict:
    return {"message": "Hello, World!"}


@app.get("/health")
def health_check() -> dict:
    return {"status": "ok", "hero": "merlin"}
