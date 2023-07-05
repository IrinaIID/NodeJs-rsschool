"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
const node_url_1 = require("node:url");
const __filename = (0, node_url_1.fileURLToPath)(import.meta.url);
const __dirname = node_path_1.default.dirname(__filename);
dotenv_1.default.config({ path: __dirname + `./.env.${process.env.NODE_ENV}` }); // change according to your need
const config = {
    port: process.env.APPLICATION_PORT,
    dbUrl: process.env.DB_URL,
    dbPassword: process.env.DB_PASSWORD,
};
exports.default = config;
