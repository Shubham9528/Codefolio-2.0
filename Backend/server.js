import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRoutes from './src/routes/email.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    // 'https://codefolio-server1.onrender.com',
    // 'https://codefolio-backend-dun.vercel.app/',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Server Running Successfully</h1>');
});

// Email API routes
app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});