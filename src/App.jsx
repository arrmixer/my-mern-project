var contentNode = document.getElementById('contents');
var contentNode2 = document.getElementById('contents2');

const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const message = continents.map(c => `Hello ${c}!`).join(' ');


var component2 = <h2>Hello World!</h2>;
const component = <p>{message}</p>;           //A simple JSX components
ReactDOM.render(component, contentNode);      // Render the component inside the content Node
ReactDOM.render(component2, contentNode2);

class IssueList extends React.Component {
    render(){
       return(
               <div>This is just a placeholder for the issue list.</div>
           );
    }
}