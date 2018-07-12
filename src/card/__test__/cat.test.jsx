import React from 'react';
import { shallow } from 'enzyme';

import Cat from '../cat';

const setup = (Component, props) => {
  const wrapper = shallow(<Component {...props} />);
  return wrapper;
};

describe('Animal Shallow', () => {
  const props = {
    number: 3,
  };
  const CatWrapper = setup(Cat, props);
  console.log(CatWrapper.debug());

  it('Cat should be render', () => {
    expect(CatWrapper.find('img').exists()).toBe(true); 
  });
});
