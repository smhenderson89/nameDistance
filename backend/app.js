// boilerplate
import express from 'express'
import cors from "cors" // Enable CORS

var hostname = process.env.YOUR_HOST || "127.0.0.1";
var PORT = process.env.PORT || 4000;
import http from "http";
var app = express()
const server = http.createServer(app);

// Routes intialize
var router = express.Router()
import nameDistance from './routes/nameDistance.js';

// Routes setup
app.use('/dist', nameDistance);

// CORS

app.use(cors())
app.options('*', cors(
  {origin: "http://127.0.0.1:5500"}
))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routing
app.get('/', (req, res) => {
  res.send('Hello Scott!')
})

app.get('/howdy', (req, res) => {
  res.send('Howdy! 🎈')
})

app.get('/test', (req, res) => {
  res.send('Yes this is the right repo')
})

app.listen(PORT, hostname, (req, res) => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
})

export default app