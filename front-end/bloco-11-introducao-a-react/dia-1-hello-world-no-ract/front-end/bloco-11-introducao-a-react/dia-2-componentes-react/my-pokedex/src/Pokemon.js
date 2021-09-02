import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokenons } = this.props;
    return (
      <div>
        <p>{pokenons.name}</p>
        <p>{pokenons.type}</p>
        <p>Average Weight: {pokenons.averageWeight.value} {pokenons.averageWeight.measurementUnit}</p>
      </div>
      <img />
      
    )
  }
}

export default Pokemon;