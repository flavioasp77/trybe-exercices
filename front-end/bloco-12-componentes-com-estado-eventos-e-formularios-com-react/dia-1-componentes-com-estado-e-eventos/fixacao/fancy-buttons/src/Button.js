import React from 'react';

class Button extends React.Component {
  handleClick(info) {
    console.log(info);
  }
  render() {
    const { texto } =this.props;
    const { retorno } =this.props;
    return ( 
      <button onClick={ this.handleClick(retorno) }>
        { texto }
      </button>
    );

  }
}

export default Button;