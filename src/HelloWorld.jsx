import React from 'react';

// basic example for server rendering using the renderToString() React API

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ addressee: '' });
    }, 1000);
  }

  render() {
    return (
      <h1>Hello World {this.state.addressee}!</h1>
    );
  }
}

HelloWorld.propsTypes = {
  addressee: React.PropTypes.string,
};

HelloWorld.defaultProps = {
  addressee: ' ',
};
