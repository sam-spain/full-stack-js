import jwt from 'jsonwebtoken';
import User from '@models/user.js';
import config from '@config';

export default async (request, response, next) => {
  try {
    const token = request.headers.access_token;
    const data = jwt.verify(token, config.jwt);
    const user = await User.findById(data.id);
    if (!user) {
      throw new Error();
    }
    request.user = user;
    return next();
  } catch (error) {
    return response.status(400).json({
      message: 'Not authenticated'
    });
  }
};
