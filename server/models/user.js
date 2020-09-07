import mongoose from 'mongoose';
import jsonWebToken from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import randomString from 'randomstring';
import config from '@config';
import Mail from '@fullstackjs/mail';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, index: true, unique: true, required: true },
  createdAt: Date,
  updatedAt: Date,
  password: String,
  emailConfirmedAt: Date,
  emailConfirmCode: String
});

UserSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password);
  this.emailConfirmCode = randomString.generate(72);
  this.createdAt = new Date();
});

UserSchema.post('save', async function () {
  await new Mail('confirm-account')
    .to(this.email, this.name)
    .subject('Please confirm your account')
    .data({
      name: this.name,
      url: `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
    })
    .send();
});

UserSchema.methods.generateToken = function () {
  return jsonWebToken.sign({ id: this._id }, config.jsonWebTokenSecret);
};

UserSchema.plugin(uniqueValidator, { message: 'Email already exists' });

export default mongoose.model('User', UserSchema);
