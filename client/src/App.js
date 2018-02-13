import React, { Component, Fragment} from 'react';
import { Route, NavLink, Redirect, withRouter, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createBrowserHistory from 'history/createBrowserHistory'
/////////////////////////////////////////////// /* Presentational Components */ //////////////////////////////////////////////////////////
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import Base from './components/Base';
import Dashboard from './containers/DashboardPage';
import Auth from './modules/Auth';
import Logout from './containers/Logout';


const history = createBrowserHistory()



// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Switch>
            <Route exact path="/" component={(location, callback)=> {
              if (Auth.isUserAuthenticated()) {
                // callback(null, DashboardPage);
                return (<Dashboard/>);
              } else {
                // callback(null, HomePage);
                return (<HomePage/>);

              }
            }}

            />
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={Logout}/> {/*Change the current URL to */}
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
