import { StatusCodes } from 'http-status-codes';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import config from '../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

type TUserRole = 'admin' | 'user';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const getTokenWithBearer = req.headers?.authorization;
    if (!getTokenWithBearer) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        `You are not authorized to access this route `,
      );
    }
    const token = getTokenWithBearer.split(' ')[1];
    let decoded;
    try {
      // check validation for token and decode the token
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'expired access token');
    }

    // Extract email and role from the decoded token
    const { email, role } = decoded;

    // Check if the user's role is allowed
    if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
      throw new AppError(
        StatusCodes.FORBIDDEN,
        'You are not allowed to access this route',
      );
    }

    req.user = decoded;
    next();
  });
};

export default auth;