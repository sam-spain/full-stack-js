import mongoose from 'mongoose';
import jsonWebToken from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import randomString from 'randomstring';
import config from '@config';
import uniqueValidator from 'mongoose-unique-validator';
import PasswordReset from '@models/PasswordReset.js';
import sendMail from 'server/config/mailconfig.js';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, index: true, unique: true, required: true },
  createdAt: Date,
  updatedAt: Date,
  password: {
    type: String,
    min: [4, 'The password field must be at least 4 characters']
  },
  emailConfirmedAt: Date,
  emailConfirmCode: String
});

UserSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password);
  this.emailConfirmCode = randomString.generate(72);
  this.createdAt = new Date();
});

UserSchema.post('save', async function () {
  await this.sendConfirmEmail()
});

UserSchema.methods.generateToken = function () {
  return jsonWebToken.sign({ id: this._id }, config.jsonWebTokenSecret);
};

UserSchema.methods.sendConfirmEmail = function() {
  sendMail('confirm-account', this.email, {
    name: this.name,
    url: `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
  });
}

UserSchema.methods.comparePasswords = function (plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password);
};

UserSchema.methods.forgotPassword = async function () {
  const token = randomString.generate(72);
  await PasswordReset.create({
    token,
    email: this.email,
    createdAt: new Date()
  });
  sendMail('forgot-password', this.email, {
    name: this.name,
    url: `${config.url}/auth/password/reset/${token}`
  });
};

UserSchema.plugin(uniqueValidator, { message: 'Email already exists' });

export default mongoose.model('User', UserSchema);
