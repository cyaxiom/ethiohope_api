import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './config/database';

// Load environment variables based on NODE_ENV
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
});

const PORT = process.env.PORT || 2707;

// Connect to the database first
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ethiohope';

connectDB(mongoUri)
  .then(() => {
    console.log('✅ Database connected successfully');

    // Start the server only after DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
    process.exit(1); // Exit process if DB connection fails
  });
