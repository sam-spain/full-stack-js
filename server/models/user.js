import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import randomString from 'randomstring';
import config from '@config';
import Mail from '@fullstackjs/mail';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
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

export default mongoose.model('User', UserSchema);
