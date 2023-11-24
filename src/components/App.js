import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Feed from './components/Feed';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/feed" component={Feed} />
        {/* Add routes for other components */}
      </Switch>
    </Router>
  );
};

export default App;
