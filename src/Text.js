import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
    };

    setInterval(() => {
      this.setState({
        showText: !this.state.showText,
      });
    }, 200);
  }

  render() {
    const text = this.state.showText? this.props.text : '';
    return (
      <div>
        {text}
      </div>
    )
  }
}

export default Text;