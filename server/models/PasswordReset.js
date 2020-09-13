import Mongoose from 'mongoose';

const PasswordResetSchema = new Mongoose.Schema({
  email: String,
  token: String,
  createdAt: Date
});

export default Mongoose.model('PasswordReset', PasswordResetSchema);
