const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const PORT = 10000;

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./client/build/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// connect to the database and load models
require('./models').connect(config.dbUri);


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

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
