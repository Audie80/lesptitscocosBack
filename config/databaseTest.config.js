import dotenv from 'dotenv';
dotenv.config();

export default {
  url: process.env.MONGO_ADDON_URL_TEST,
};
