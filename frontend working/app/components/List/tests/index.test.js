import React from 'react';
import { shallow } from 'enzyme';

import ListItem from 'components/ListItem';
import List from '../index';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = shallow(<List listOfStrings={[]} />);
    expect(renderedComponent.find(ListItem)).toBeDefined();
  });
});
