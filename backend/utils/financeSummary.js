const { Configuration, OpenAIApi } = require('openai');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const generateFinanceSummary = async (userId) => {
  const user = await User.findById(userId);
  const transactions = await Transaction.find({ user: userId });

  if (!user || transactions.length === 0) return;

  const totalSpent = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const categories = {};
  transactions.forEach(tx => {
    if (tx.type === 'expense') {
      categories[tx.category] = (categories[tx.category] || 0) + tx.amount;
    }
  });

  const prompt = `
You are a friendly college finance coach named "BrokeAF". A student spent ₹${totalSpent} and earned ₹${totalIncome} this week.
Their top spending categories are: ${JSON.stringify(categories)}.
Give them a chill 3-paragraph summary including:
1. Praise or concerns
2. Spending tips
3. Any alerts on over-budget or risky behavior

Keep it casual, empathetic, and brief.
`;

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return response.data.choices[0].message.content;
};

module.exports = generateFinanceSummary;
