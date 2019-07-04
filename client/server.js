const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');
// Import the cors library to Enable CORS:
// var cors = require('cors');


// Set up a whitelist and check against it:
// var whitelist = ['http://ec2-52-221-241-40.ap-southeast-1.compute.amazonaws.com:5000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));
app.use(proxy('/', {target: 'http://ec2-52-221-241-40.ap-southeast-1.compute.amazonaws.com'}))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);