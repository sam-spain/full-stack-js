import Mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const PasswordResetSchema = new Mongoose.Schema({
  email: String,
  token: { type: String, index: true, unique: true, required: true },
  createdAt: Date
});
PasswordResetSchema.plugin(uniqueValidator, { message: 'Email already exists' });
export default Mongoose.model('PasswordReset', PasswordResetSchema);
