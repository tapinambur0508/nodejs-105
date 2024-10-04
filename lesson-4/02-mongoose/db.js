import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;

async function initDBConnection() {
  try {
    await mongoose.connect(DB_URI);

    console.log('Database connection successfully');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { initDBConnection };
