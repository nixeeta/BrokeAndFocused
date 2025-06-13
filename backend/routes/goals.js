import { Router } from 'express';
const router = Router();
import Goal, { find, findOneAndUpdate, findOneAndDelete } from '../models/Goal';
import authMiddleware from '../middleware/auth';

// Create a new goal
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, targetAmount, deadline } = req.body;

    const goal = new Goal({
      user: req.user.id,
      title,
      targetAmount,
      deadline
    });

    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all goals for the logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const goals = await find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update goal (e.g., update savedAmount or title)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updates = req.body;

    const updatedGoal = await findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { $set: updates },
      { new: true }
    );

    if (!updatedGoal) return res.status(404).json({ msg: 'Goal not found' });

    res.json(updatedGoal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a goal
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedGoal = await findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!deletedGoal) return res.status(404).json({ msg: 'Goal not found' });

    res.json({ msg: 'Goal deleted', id: deletedGoal._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
