import express from 'express';
import mongoose from 'mongoose';
import booksRoute from '../routes/booksRoute.js';
import usersRoute from '../routes/usersRoute.js';
import cors from 'cors';

const app = express();
import dotenv from 'dotenv';
dotenv.config();
app.use(express.json());
app.use(cors());
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('');
});

app.use('/books', booksRoute);
app.use('/users', usersRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
  })
  .catch((error) => {
    console.log(error);
  });