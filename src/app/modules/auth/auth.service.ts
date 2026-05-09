import generateToken, { verifyToken } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";
import { TLogInUser } from "./auth.interface";
import bcrypt from "bcrypt";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import emailSender from "./emailSender";
import { UserStatus } from "../../../../prisma/generated/prisma";
import ApiError from "../../errors/apiError";
import status from "http-status";

const loginUser = async (payload: TLogInUser) => {
  const { email, password } = payload;

  // Find the user by email
  const userData = await prisma.user.findUnique({
    where: {
      email: email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new ApiError(status.NOT_FOUND, "User does not exist or is inactive");
  }

  // Validate password
  const isCorrectPassword = await bcrypt.compare(password, userData.password);
  if (!isCorrectPassword) {
    throw new ApiError(status.UNAUTHORIZED, "Invalid password");
  }

  // Create JWT token
  const accessToken = generateToken(
    {
      email: userData.email,
      role: userData.role,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string,
  );
  const refreshToken = generateToken(
    {
      email: userData.email,
      role: userData.role,
    },
    config.jwt.refresh_token_secret as Secret,
    config.jwt.refresh_token_expires_in as string,
  );

  // Fixed logging

  return {
    accessToken,
    refreshToken,
    needPasswordChange: userData.needPasswordChange,
  };
};

const refreshToken = async (token: string) => {
  let decodedData;
  try {
    decodedData = await verifyToken(
      token,
      config.jwt.refresh_token_secret as Secret,
    );
  } catch (error) {
    console.error("JWT verification failed:", error);
    throw new ApiError(status.UNAUTHORIZED, "You are not authorized");
  }
  if (
    typeof decodedData !== "object" ||
    !decodedData ||
    !("email" in decodedData)
  ) {
    throw new ApiError(status.BAD_REQUEST, "Invalid token payload");
  }
  const userData = await prisma.user.findUnique({
    where: {
      email: decodedData?.email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new ApiError(status.NOT_FOUND, "User not found or is inactive");
  }
  const accessToken = generateToken(
    {
      email: userData?.email,
      role: userData?.role,
    },
    process.env.jwt_secret as Secret,
    process.env.expires_in as string,
  );
  return {
    accessToken,
    needPasswordChange: userData?.needPasswordChange,
  };
};
const changePassword = async (user: any, payload: any) => {
  const { oldPassword, newPassword } = payload;

  const userData = await prisma.user.findFirst({
    where: {
      email: user.email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new ApiError(status.NOT_FOUND, "User not found or is inactive");
  }
  const isCorrectPassword = await bcrypt.compare(
    oldPassword,
    userData.password,
  );
  if (!isCorrectPassword) {
    throw new ApiError(status.UNAUTHORIZED, "Invalid password");
  }

  await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      password: await bcrypt.hash(newPassword, 12),
      needPasswordChange: false,
    },
  });

  return {
    message: "Password changed successfully",
  };
};

const forgotPassword = async (payload: { email: string }) => {
  const { email } = payload;

  const userData = await prisma.user.findUnique({
    where: {
      email: email,
      status: UserStatus.ACTIVE,
    },
  });

  if (!userData) {
    throw new ApiError(status.NOT_FOUND, "User not found with this email");
  }
  const resetPassToken = generateToken(
    { email: userData.email, role: userData.role },
    process.env.reset_pass_token as Secret,
    process.env.expires_in as string,
  );
  const resetPassLink =
    process.env.RESET_PASS_LINK +
    `?userId=${userData.id}&token=${resetPassToken}`;
  await emailSender(
    userData?.email,
    `<div>
    <p>Click the link below to reset your password:</p><a href="${resetPassLink}">
    <button>Reset Password</button>
    </a></div>`,
  );

  //http://localhost:3000/reset-pass?email=ancsddf@gmail.com&token=dhfsdfidshf
};

const resetPassword = async (
  token: string,
  payload: { id: string; password: string },
) => {
  const isValidToken = await verifyToken(
    token,
    process.env.reset_pass_token as Secret,
  );
  if(!isValidToken){
    throw new ApiError(status.BAD_REQUEST, "Invalid or expired token");
  }
  const hashPassword=bcrypt.hashSync(payload.password,12);

  const updatePassword=await prisma.user.update({
    where: {
      email: isValidToken.email
    },
    data: {
      password: hashPassword
    }
  });
  return {
    message: "Password reset successfully"
  };
};
export const authServices = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPassword,
  resetPassword,
};
