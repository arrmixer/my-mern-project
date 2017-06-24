'use strict';

var contentNode = document.getElementById('contents');
var contentNode2 = document.getElementById('contents2');

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var message = continents.map(function (c) {
  return 'Hello ' + c + '!';
}).join(' ');

var component2 = React.createElement(
  'h2',
  null,
  'Hello World!'
);
var component = React.createElement(
  'p',
  null,
  message
); //A simple JSX components
ReactDOM.render(component, contentNode); // Render the component inside the content Node
ReactDOM.render(component2, contentNode2);