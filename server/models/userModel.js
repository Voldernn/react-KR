import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    books: {
      type: Array,
      "default" : [],
      required: true,
    },
  }
);

export const User = mongoose.model('User', userSchema);