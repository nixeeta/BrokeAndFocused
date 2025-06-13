import { Schema, model } from 'mongoose';

const goalRoutes = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  savedAmount: { type: Number, default: 0 },
  deadline: { type: Date }
}, { timestamps: true });

export default model('Goal', goalRoutes);
