# Passport-CreateReactApp-Node-Express
This Application makes use of the tutorial found at "https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components". The code has been refactored to utilize create-react-app version: 1.4.3, React version: 16.2.0.

Replace dbUri found in `config/index.json` with your own mongodb / mlab link. Uncomment "require('./models').connect(config.dbUri)" and comment "require('./models').connect(process.env.MLAB_URL)" if you want to connect to your database without using an Environmental Variable.


A demo link can be found here  [CreateReactApp-Passort](https://peaceful-dusk-13448.herokuapp.com/)
