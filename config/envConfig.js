import { config } from 'dotenv';

// Load environment-specific .env file
const envFile = `.env.${process.env.NODE_ENV || 'development'}.local`;
config({ path: envFile });

export const { PORT, NODE_ENV ,  MONGODB_URI, JWT_SECRET, JWT_EXPIRES_IN} = process.env;
