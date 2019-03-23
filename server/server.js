const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();

// mongoose middleware
mongoose
  .connect(
    'mongodb+srv://onload:onload@cluster0-90jfs.mongodb.net/test?retryWrites=true',
    {useNewUrlParser: true}
  )
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));

// body-parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// sesssion middleware
app.use(
  session({
    secret: 'hackonload0-secrete',
    resave: false,
    saveUninitialized: true
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server up at ${port}`);
});

// mongodb+srv://onload:<password>@cluster0-90jfs.mongodb.net/test?retryWrites=true
