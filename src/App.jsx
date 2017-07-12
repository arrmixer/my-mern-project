import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';

import IssueList from './IssueList.jsx';

const contentNode = document.getElementById('contents');

// Render the content inside the Content Node
ReactDOM.render(<IssueList />, contentNode);
if (module.hot) {
  module.hot.accept();
}

