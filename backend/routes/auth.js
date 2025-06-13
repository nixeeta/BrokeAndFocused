import { Router } from 'express';
const router = Router();
import { sign } from 'jsonwebtoken';
import User, { findOne } from '../models/User';

// POST /register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const newUser = await new User({ name, email, password }).save();
    res.status(201).json({ msg: 'User created', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ msg: 'Invalid credentials' });

    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
