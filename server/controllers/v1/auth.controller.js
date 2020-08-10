const { request, response } = require('express');

import user from '@models/user.js';

const login = (request, response) => {};

const register = async (request, response) => {
  const { name, email, password } = request.body;
  const newUser = await user.create({
    name,
    email,
    password
  });

  return response.status(201).json({ newUser });
};

export default {
  login,
  register
};
