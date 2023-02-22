// boilerplate
import express from 'express'
var hostname = process.env.YOUR_HOST || "127.0.0.1";
var PORT = process.env.PORT || 3000;
import http from "http";
var app = express()
const server = http.createServer(app);

// Routes intialize
var router = express.Router()
import nameDistance from './routes/nameDistance.js';

// Routes setup
app.use('/dist', nameDistance);

// Routing

app.get('/', (req, res) => {
  res.send('Hello Scott!')
})

app.get('/howdy', (req, res) => {
  res.send('Howdy! 🎈')
})


app.listen(PORT, hostname, (req, res) => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
})

export default app