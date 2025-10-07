import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './config/database';
import { seedRoles } from './utils/seedRoles';

// Load environment variables from .env file
const envFile = process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile  });

const PORT = process.env.PORT || 2707;

// Async IIFE to handle startup
(async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ethiohope';

    // Connect to the database
    await connectDB(mongoUri);
    console.log('✅ Database connected successfully');

    // Seed default roles
    await seedRoles();

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Server failed to start:', err);
    process.exit(1); // Exit process if anything fails
  }
})();
