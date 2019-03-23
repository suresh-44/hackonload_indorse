const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// mongoose middleware
mongoose
  .connect('mongodb://localhost:27017/hospital', {useNewUrlParser: true})
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

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static public folder
app.use(express.static(path.join(__dirname, 'public')));

const hospital = require('./routers/hospital');

app.use('/admin', hospital);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server up at ${port}`);
});

// mongodb+srv://onload:<password>@cluster0-90jfs.mongodb.net/test?retryWrites=true
