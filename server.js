const express = require('express');
const mongoose = require('mongoose');

const users= require('./routes/api/users');
const profile = require('./routes/api/profile');
const ads = require('./routes/api/ads');

//DB config 
const db = require('./config/key').mongoURI;

//connect to mongoDB
mongoose.connect(db,  {useNewUrlParser: true})
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();

app.get('/', (req, res)=> {
    res.send('Hello server')
});

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/ads', ads);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});

