# Passport-CreateReactApp-Node-Express
This Application makes use of the tutorial found at "https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components". The code has been refactored to utilize create-react-app version: 1.4.3, React version: 16.2.0.

A demo link can be found here  [Passport-CreateReactApp-Node-Express](https://peaceful-dusk-13448.herokuapp.com/)

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
| [Create-react-app] - A package that creates React Apps and  automates React Deployment Using CLI that has built in service workers, webpack and babel |
|[Yarn] - An alternative to NPM for React|


## Installation

`Passport-CreateReactApp-Node-Express` can be downloaded by cloning this repository [`https://github.com/roverkim/Passport-CreateReactApp-Node-Express.git`](https://github.com/roverkim/Passport-CreateReactApp-Node-Express.git)

A Live Example can be Found Here
[`https://peaceful-dusk-13448.herokuapp.com/)`](https://peaceful-dusk-13448.herokuapp.com/))

After cloning, cd into the folder run `yarn install`. Then cd into client and run `yarn install`.

This repo is configured to run from my mlab url that is currently stored in an environmental variable. You will need to configure your own environmental env or replace dbUri found in `config/index.json` with your own mongodb / mlab link. Uncomment "require('./models').connect(config.dbUri)" and comment "require('./models').connect(process.env.MLAB_URL)" from server.js if you want to connect to your database without using an Environmental Variable.


To run `Passport-CreateReactApp-Node-Express` locally, Please Ensure that MongoDB is Running.

Execute command in the root folder `node server.js` to run the application.
