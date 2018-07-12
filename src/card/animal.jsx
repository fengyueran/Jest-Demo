import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cat from './cat';

class Animal extends Component {
  static propTypes = {
    number: PropTypes.number,
  }
  render() {
    const { number } = this.props;
    const catArr = [...Array(number).keys()];
    return (
      <div>
        { catArr.map((v) => <Cat key={v} />) }
      </div>
    );
  }
}

export default Animal;