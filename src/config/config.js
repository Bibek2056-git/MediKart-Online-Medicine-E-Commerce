import dotenv from "dotenv";

dotenv.config();

const config = {
  appUrl: process.env.APP_URL || "",
  mongoDBUrl: process.env.MONGODB_URI || "", // changed from MONGODB_URL to MONGODB_URI
  name: process.env.NAME || "",
  port: process.env.PORT || 3000,
  version: process.env.VERSION || "0.0.1",
 };

export default config;
