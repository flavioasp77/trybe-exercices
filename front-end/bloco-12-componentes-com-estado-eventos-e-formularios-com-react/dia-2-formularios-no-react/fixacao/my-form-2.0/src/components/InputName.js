import React from 'react';

class InputName extends React.Component {
  render() {
    const { value, handle } = this.props;
    return (      
      <label htmlFor="name">
        <input
          type="text"
          maxLength="40"
          name="name"
          id="name"
          value={ value }
          handle={ handle }
          required
        />
      </label>      
    );
  }
}

export default InputName;