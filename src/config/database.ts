import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables based on NODE_ENV
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
});

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri, {
      autoIndex: false, // Disable autoIndex in production for performance
      maxPoolSize: 50, // Connection pool
      wtimeoutMS: 2500,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4, // IPv4
      tls: process.env.NODE_ENV === 'production', // Enable TLS/SSL for production
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Stop the server if DB connection fails
  }
};
