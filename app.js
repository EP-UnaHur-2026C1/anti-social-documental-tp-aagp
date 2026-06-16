console.log("UnaHur - Anti-Social net");
const express = require("express");
const dotenv = require("dotenv");
const conectarDB = require('./config/db');

conectarDB();

dotenv.config();

const app = express();

app.use(express.json());
