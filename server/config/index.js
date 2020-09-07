import dotenv from 'dotenv';

dotenv.config();

export default {
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/mevnmongo',
  url: process.env.APP_URL || 'http://localhost:8080',
  jsonWebTokenSecret: process.env.JSON_WEB_TOKEN_SECRET || '1234'
};
