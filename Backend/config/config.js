import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  version: process.env.VERSION || '1.0.0',
  secret: process.env.SECRET,
  appUrl: process.env.APP_URL,
  emailApiKey: process.env.EMAIL_API_KEY,
};
