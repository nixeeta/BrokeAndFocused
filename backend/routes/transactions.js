import { Router } from 'express';
const router = Router();
import Transaction, { find, findOneAndDelete } from '../models/Transaction';
import authMiddleware from '../middleware/auth';

// POST /api/transactions - Add income/expense
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { type, category, amount, note } = req.body;

    const transaction = new Transaction({
      user: req.user.id,
      type,
      category,
      amount,
      note
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/transactions - Get all user's transactions
router.get('/', authMiddleware, async (req, res) => {
  try {
    const transactions = await find({ user: req.user.id }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/transactions/:id - Delete a transaction
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const tx = await findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!tx) return res.status(404).json({ msg: 'Transaction not found' });

    res.json({ msg: 'Transaction deleted', id: tx._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get total expenses per category
router.get('/category-summary', auth, async (req, res) => {
  try {
    const summary = await Transaction.aggregate([
      { $match: { user: req.user._id, type: 'expense' } },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' }
        }
      }
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ msg: 'Error generating summary' });
  }
});

// Get spend trend by date
router.get('/spend-trend', auth, async (req, res) => {
  try {
    const trend = await Transaction.aggregate([
      { $match: { user: req.user._id, type: 'expense' } },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$date" }
          },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(trend);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching trend data' });
  }
});


export default router;
