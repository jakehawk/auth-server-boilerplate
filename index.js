const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const router = require('./router');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup - express stuff
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));	
router(app);

// Server Setup - talk to other apps
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening to ${port}`)
