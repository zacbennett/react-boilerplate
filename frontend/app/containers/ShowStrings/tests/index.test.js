import React from 'react';
import { shallow } from 'enzyme';

import List from 'components/List';
import { ShowStrings, mapDispatchToProps } from '../index';
import { loadStrings } from '../actions';
// import { loadRepos } from '../../App/actions';

describe('<ShowStrings />', () => {
  it('should render the list of strings', () => {
    const renderedComponent = shallow(
      <ShowStrings
        loadStrings={loadStrings}
        loading
        error=""
        allStrings={{ strings: [{ id: 1, data: 'hi' }] }}
      />,
    );
    expect(
      renderedComponent.contains(
        <List listOfStrings={[{ id: 1, data: 'hi' }]} />,
      ),
    ).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('loadStrings', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadStrings).toBeDefined();
      });
    });
  });
});
