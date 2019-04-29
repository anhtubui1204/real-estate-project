const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport'); //used to authorize the JWT token

const users= require('./routes/api/users');
const profile = require('./routes/api/profile');
const ads = require('./routes/api/ads');
const project = require('./routes/api/project');


//DB config 
const db = require('./config/key').mongoURI;

//connect to mongoDB
mongoose.connect(db,  {useNewUrlParser: true})
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();


//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);


app.get('/', (req, res)=> {
    res.send('Hello server')
});

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/ads', ads);
app.use('/api/project', project);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});

