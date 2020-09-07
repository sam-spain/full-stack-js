const { request, response } = require('express');

import user from '@models/user.js';

const login = (request, response) => {};

const register = async (request, response) => {
  const { name, email, password } = request.body;
  await user.create(
    {
      name,
      email,
      password
    },
    function (error, newUser) {
      if (error) {
        return response.status(422).json(convertDbErrorToFormError(error));
      } else {
        const token = newUser.generateToken();
        return response.status(201).json({ newUser, token });
      }
    }
  );
};

export default {
  login,
  register
};

function convertDbErrorToFormError(error) {
  return Object.keys(error.errors).reduce((acc, k) => {
    return {
      [k]: [error.errors[k].message],
      ...acc
    };
  }, {});
}
