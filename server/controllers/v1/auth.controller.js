import User from '@models/user.js';
import PasswordReset from '@models/PasswordReset.js';
import BCrypt from 'bcryptjs';

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
  if (user) {
    const existingPasswordReset = await PasswordReset.findOne({ email });
    if (existingPasswordReset) {
      return response.status(422).json({
        email: 'Already requested password reset'
      });
    } else {
      await user.forgotPassword();
      return response.json({
        message: 'Password reset'
      });
    }
  } else {
    return response.status(422).json({
      email: 'Could not find matching email'
    });
  }
};

const resetPassword = async (request, response) => {
  const token = request.body.token;
  const existingPasswordReset = await PasswordReset.findOne({ token });
  if (existingPasswordReset) {
    await User.findOneAndUpdate(
      {
        email: existingPasswordReset.email
      },
      {
        password: BCrypt.hashSync(request.body.password)
      }
    );
    await PasswordReset.findOneAndDelete({
      email: existingPasswordReset.email
    });
    return response.json({
      message: 'Password reset'
    });
  } else {
    return response.status(400).json({
      password: 'No matching token'
    });
  }
};

export default {
  login,
  register,
  forgotPassword,
  resetPassword
};

function convertDbErrorToFormError(error) {
  return Object.keys(error.errors).reduce((acc, k) => {
    return {
      [k]: [error.errors[k].message],
      ...acc
    };
  }, {});
}
