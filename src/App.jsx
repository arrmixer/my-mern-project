const contentNode = document.getElementById('contents');

class BorderWrap extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver"};
        return (
            <div style={borderedStyle}>
                {this.props.children}
            </div>
        );
    }
}
class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue Filter.</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 4};
        return (

            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.children}</td>
            </tr>

        );
    }
}


//  IssueRow.propTypes = {
//     issue_id: React.PropTypes.number.isRequired,
//     issue_title: React.PropTypes.String.isRequired
// };


class IssueTable extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 6};
        return (
            <table style={BorderWrap = borderedStyle}>
                    <thead>
                    <tr>
                        <th style={borderedStyle}>Id</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                    </thead>
                <tbody>
                <IssueRow issue_id={1}>Error in console when clicking Add</IssueRow>
                <IssueRow issue_id={2}>Missing bottom <b>border</b> on panel</IssueRow>
                </tbody>
            </table>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for any Issues Added.</div>
        );
    }
}


class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr/>
                <IssueTable/>
                <hr/>
                <IssueAdd/>
            </div>


        );
    }
}

ReactDOM.render(<IssueList/>, contentNode); //Render the content inside the Content Node