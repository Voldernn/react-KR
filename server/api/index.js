import express from 'express';
import mongoose from 'mongoose';
import booksRoute from '../routes/booksRoute.js';
import usersRoute from '../routes/usersRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

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
    app.listen(5555, () => {
      console.log(`App is listening to port: ${5555}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });