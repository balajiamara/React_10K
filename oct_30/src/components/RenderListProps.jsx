import React, { Component } from 'react';

class FruitList extends Component {
  render() {
    const { fruits } = this.props;
    return (
      <div>
        <h3>Fruits List:</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FruitList;
