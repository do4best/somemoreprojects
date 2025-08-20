/* eslint-env node */
/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import {Authrouter} from "./routes/authRoutes.js";
import {ToDorouter} from "./routes/ToDoRoutes.js";


// Resolve current file/dir
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables: try project root first (default), then fallback to backEnd/.env
dotenv.config();
if (!process.env.DB_URL || !process.env.JWT_SECRET || !process.env.PORT_NO) {
  dotenv.config({ path: path.join(__dirname, '.env') });
}

const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);

const app = express();

const PORT = (typeof process !== 'undefined' && process.env && process.env.PORT_NO) ? process.env.PORT_NO : 5000;
const DB_URL = (typeof process !== 'undefined' && process.env) ? process.env.DB_URL : undefined;

// Global middleware must come before routes
app.use(cors());
app.use(express.json());

// Mount routes after middleware so req.body is populated
app.use('/api', Authrouter);
app.use('/api/todo', ToDorouter);

if (!DB_URL) {
  console.error('Environment variable DB_URL is missing. Ensure a .env exists at project root or at:', path.join(__dirname, '.env'));
  if (isNode) {
    process.exit(1);
  }
}

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err?.message || err);
    if (isNode) {
      process.exit(1);
    }
  });

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
