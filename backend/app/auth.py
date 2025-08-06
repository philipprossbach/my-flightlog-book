import os
import httpx
from fastapi import Depends, HTTPException, status, Request
from jose import jwt
from jose.exceptions import JWTError

OIDC_ISSUER = os.getenv("OIDC_ISSUER", "https://dein-authentik-server.de/application/o/")  # URL zu deinem Authentik-Server
OIDC_CLIENT_ID = os.getenv("OIDC_CLIENT_ID", "")
OIDC_AUDIENCE = os.getenv("OIDC_AUDIENCE", OIDC_CLIENT_ID)

# Optional: Zum Caching der JWKS
_jwks_cache = None

def get_jwks():
    global _jwks_cache
    if _jwks_cache is None:
        resp = httpx.get(f"{OIDC_ISSUER.rstrip('/')}/.well-known/openid-configuration")
        resp.raise_for_status()
        jwks_uri = resp.json()["jwks_uri"]
        resp_keys = httpx.get(jwks_uri)
        resp_keys.raise_for_status()
        _jwks_cache = resp_keys.json()
    return _jwks_cache

async def get_current_user(request: Request):
    auth = request.headers.get("Authorization")
    if not auth or not auth.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Kein Bearer-Token übergeben")
    token = auth.replace("Bearer ", "")
    jwks = get_jwks()
    try:
        payload = jwt.decode(
            token,
            jwks,
            algorithms=["RS256"],
            audience=OIDC_AUDIENCE,
            issuer=OIDC_ISSUER.rstrip("/") + "/"
        )
    except JWTError as exc:
        raise HTTPException(status_code=401, detail=f"Ungültiger Token: {exc}")
    return payload  # Enthält z.B. "sub", "email", "name", "groups" u.a.
