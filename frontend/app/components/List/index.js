import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  console.log('in the list!', props);
  const { listOfStrings } = props;
  let content;
  // If we have items, render them
  if (listOfStrings.length !== 0) {
    content = listOfStrings.map(item => <li key={item.id}>{item.data}</li>);
  }

  return (
    <Wrapper>
      {/* If there are no strings in the database, tell the user so. Otherwise, show all strings */}
      {listOfStrings.length !== 0 ? <Ul>{content}</Ul> : <h3>No strings!</h3>}
    </Wrapper>
  );
}

List.propTypes = {
  listOfStrings: PropTypes.array,
};

export default List;
