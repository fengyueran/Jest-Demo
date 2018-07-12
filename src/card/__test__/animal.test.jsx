import React from 'react';
// import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Animal from '../animal';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);
  return wrapper;
};

describe('Animal Shallow', () => {
  const props = {
    number: 3,
  };
  const AnimalWrapper = setup(Animal, props);
  console.log(AnimalWrapper.debug());

  it('Cat should be render', () => {
    expect(AnimalWrapper.find('Cat').exists()).toBe(true); 
  });

  it('Cat number should be 3', () => {
    expect(AnimalWrapper.find('Cat').length).toBe(3); 
  });
});
