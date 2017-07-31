import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Redirect, browserHistory, withRouter } from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';


const contentNode = document.getElementById('contents');
const noMatch = () => <p>Page not found</p>;

const App = props => (
  <div>
    <div className="header">
      <h1>Issue Tracker</h1>
    </div>
    <div className="contents">
      {props.children}
    </div>
    <div className="footer">
          Full source code available at this
        <a href="https://github.com/arrmixer/my-mern-project" > Github Repository
      </a>.
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};


const RoutedApp = () => (
  <Router history={browserHistory} >
    <Redirect from="/" to="/issues" />
    <Route path="/" component={App} >
      <Route path="/issues" component={withRouter(IssueList)} />
      <Route path="/issues/:id" component={IssueEdit} />
      <Route path="*" component={noMatch} />
    </Route>
  </Router>
    );

// Render the app using react-router now
ReactDOM.render(<RoutedApp />, contentNode);


if (module.hot) {
  module.hot.accept();
}

