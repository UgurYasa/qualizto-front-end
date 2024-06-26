import { jwtVerify } from "jose";

export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || "secret";
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }

  return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(access_token: string) {
  return access_token;
  try {
    console.log("token", access_token);
    const { payload } = await jwtVerify(access_token, getJwtSecretKey());
    console.log("payload", payload);

    return payload;
  } catch (error) {
    return null;
  }
}
