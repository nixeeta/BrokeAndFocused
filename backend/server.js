import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
require('dotenv').config();

import authRoutes from './routes/auth';
import transactionRoutes from './routes/transactions';
import goalRoutes from './routes/goals';
import aiRoutes from './routes/ai';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ DB Error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/goals', goalRoutes);

app.get('/', (req, res) => {
  res.send('🚀 BrokeAF Backend Running');
});

app.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});

require('./jobs/weeklySummary'); // Import weekly summary job
