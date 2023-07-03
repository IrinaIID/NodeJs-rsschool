import dotenv from "dotenv";
import path from 'node:path';

console.log(__dirname)
dotenv.config({ path: path.resolve(__dirname, `.env.${__dirname + `./.env.${process.env.NODE_ENV}` }` )}); // change according to your need

const config = {
  port: process.env.APPLICATION_PORT,
  dbUrl: process.env.DB_URL,
  dbPassword: process.env.DB_PASSWORD,
};

export default config;

// https://blog.devgenius.io/how-to-handle-multiple-environments-in-nodejs-7391d2db2abe