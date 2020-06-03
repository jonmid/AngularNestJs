import { Schema } from 'mongoose';

export const TareaSchema = new Schema({
  name: String,
  completed: { type: Boolean, default: false },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
