const cron = require('node-cron');
const User = require('../models/User');
const generateFinanceSummary = require('../utils/financeSummary');

// Run every Monday at 9 AM IST
cron.schedule('0 9 * * 1', async () => {
  console.log('🧠 Generating weekly finance summaries...');

  const users = await User.find();

  for (let user of users) {
    try {
      const summary = await generateFinanceSummary(user._id);
      console.log(`📝 Summary for ${user.email}:\n${summary}\n`);
      // Optional: Email or store this summary if needed
    } catch (err) {
      console.error(`⚠️ Error generating summary for ${user.email}`, err.message);
    }
  }
}, {
  timezone: "Asia/Kolkata"
});
