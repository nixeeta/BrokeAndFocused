const express = require('express');
const router = express.Router();
const generateFinanceSummary = require('../utils/financeSummary');
const auth = require('../middleware/auth');

router.get('/summary', auth, async (req, res) => {
  try {
    const summary = await generateFinanceSummary(req.user.id);
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
