const { request, response } = require('express');

import User from '@models/user.js';

const login = async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });
  if (user) {
    if (user.comparePasswords(password)) {
      const token = user.generateToken();
      return response.json({
        user,
        token
      });
    }
  }
  return response.status(400).json({
    email: 'Could not get matching credentials to log in'
  });
};

const register = async (request, response) => {
  const { name, email, password } = request.body;
  await User.create(
    {
      name,
      email,
      password
    },
    function (error, user) {
      if (error) {
        return response.status(422).json(convertDbErrorToFormError(error));
      } else {
        const token = user.generateToken();
        return response.status(201).json({ user, token });
      }
    }
  );
};

const forgotPassword = async (request, response) => {
  const { email } = request.body;
  const user = await User.findOne({ email });
  await user.forgotPassword();
  return response.json({
    message: 'Password reset'
  });
};

export default {
  login,
  register,
  forgotPassword
};

function convertDbErrorToFormError(error) {
  return Object.keys(error.errors).reduce((acc, k) => {
    return {
      [k]: [error.errors[k].message],
      ...acc
    };
  }, {});
}
