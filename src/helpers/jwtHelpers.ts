import jwt, { Secret } from "jsonwebtoken";
const generateToken = (payload: any, secret: jwt.Secret, expiresIn: string) => {
  const token = jwt.sign(
    payload,
    secret,
    {
      expiresIn: expiresIn,
      algorithm: "HS256",
    } as jwt.SignOptions
  );
  return token;
}

export const verifyToken = async (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as jwt.JwtPayload;
}
export default generateToken;