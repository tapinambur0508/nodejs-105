import mongoose from 'mongoose';

export async function initDBConnection() {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log('Database connection successfully');
  } catch (error) {
    console.error('Database connection error');
    throw error;
  }
}
