import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

// Route for Save a new User
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.login ||
      !request.body.email ||
      !request.body.password
    ) {
      return response.status(400).send({
        message: 'Send all required fields: login, email, password, books',
      });
    }
    const newUser = {
      login: request.body.login,
      email: request.body.email,
      password: request.body.password,
      books: request.body.books,
    };

    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Users from database
router.get('/', async (request, response) => {
  try {
    const users = await User.find({});

    return response.status(200).json({users});
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One User from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const user = await User.findById(id);

    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/login/:login', async (request, response) => {
  try {
    const { login } = request.params;
    
    const user = await User.findOne({ login });

    if (!user) {
      return response.status(404).send({ message: 'User not found' });
    }

    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.put('/login/:login', async (request, response) => {
  try {
    if (!request.body.books) {
      return response.status(400).send({
        message: 'Send required field: books',
      });
    }

    const { login } = request.params;

    const user = await User.findOne({ login });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    user.books = [...user.books,...request.body.books];

    await user.save();

    return response.status(200).send({ message: 'Books updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.login ||
      !request.body.email ||
      !request.body.password ||
      !request.body.books
    ) {
      return response.status(400).send({
        message: 'Send all required fields: login, email, password, books',
      });
    }

    const { id } = request.params;

    const result = await User.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a user
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;