import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import apiRoute from './routes/api';

// Load environment variables
require('dotenv').config();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const app = express();

// eslint-disable-next-line new-cap
const server = require('http').Server(app);

app
  .use(cors({
    origin: '*',
    methods: ['GET, POST, OPTIONS'],
    allowHeaders: 'content-type, accept',
    credentials: true,
    maxAge: 10,
  }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cookieParser())
  // .use(express.static(resolve(__dirname, '../')))
  // .use(express.static(resolve(__dirname, '../../src/client/assets')))
  .use(session({
    secret: 'wonky',
    resave: false,
    saveUninitialized: false,
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(apiRoute);

server.listen(port, host);
