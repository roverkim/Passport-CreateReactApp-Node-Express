# Passport-CreateReactApp-Node-Express
This Application makes use of the tutorial found at "https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components". The code has been refactored to utilize create-react-app version: 1.4.3, React version: 16.2.0.

Replace dbUri found in `config/index.json` with your own mongodb / mlab link. Uncomment "require('./models').connect(config.dbUri)" and comment "require('./models').connect(process.env.MLAB_URL)" if you want to connect to your database without using an Environmental Variable.


A demo link can be found here  [CreateReactApp-Passort](https://peaceful-dusk-13448.herokuapp.com/)

## Technologies

| Built With   |
| ------------- |
| [Passport] - Authentication library   |
| [Passport-local] -  Passport strategy for authenticating with an email and a password |
| [Bcrypt] -  bcrypt algorithm implementation for hashing passwords |
| [JSONwebtoken] -  JSON Web Token standard |
| [Mongoose] - MongoDB ORM library  |
| [Express / Heroku] - Server, Web application framework  |
| [React] - Library for building user interfaces|
| [React-dom] - React  package for DOM rendering |
| [React-router-dom] - Routing library for React-based applications|
| [React-tap-event-plugin] - Plugin for fixing tap delay for touch devices  |
| [Validator] - Library for user input validation |
| [Material-ui] - Set of React components that follows Google's Material Design guidelines |
| [create-react-app] - A package that creates React Apps and  automates React Deployment Using CLI that has built in service workers, webpack and babel | 
