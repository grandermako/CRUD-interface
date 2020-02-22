import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Authors from '../../views/Authors/Authors';

const useStyles = makeStyles({
  dashboard: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes}>
      <Router>
        <Switch>
          <Route path="/authors">
            <Authors />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
