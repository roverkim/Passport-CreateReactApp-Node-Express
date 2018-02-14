const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const PORT = process.env.PORT || 10000;
const path = require('path');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./client/build/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// connect to the database and load models
// require('./models').connect(config.dbUri); // Use this if running locally. Replace dbUri with your mongodb link.
require('./models').connect(process.env.MLAB_URL)// Use this if obtaining dbURI from Environmental Variable


// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware //
const authCheckMiddleware = require('./middleware/auth-check');
// Routes //
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/api', authCheckMiddleware);

app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
