import React, {Fragment} from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Base from './Base';

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
// import SignUpForm from '../components/SignUpForm.js';

const HomePage = () => (
  <Fragment>
    <Base/>
    <Card className="container">
     <CardTitle title="React Application" subtitle="This is the home page." />
   </Card>
  </Fragment>
);

export default HomePage;
