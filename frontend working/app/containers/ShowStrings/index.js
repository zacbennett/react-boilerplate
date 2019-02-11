/**
 *
 * ShowStrings
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectShowStrings, {
  makeSelectAllStrings,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import List from '../../components/List';
import { loadStrings } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class ShowStrings extends React.Component {
  constructor() {
    super();

    this.renderList = 'Loading';
  }

  componentDidMount() {
    // Dispatch that gets the state
    this.props.loadStrings();
  }

  render() {
    const listOfStrings = this.props.allStrings.strings;
    let display;
    if (this.props.loading) {
      display = <List listOfStrings={listOfStrings} />;
    } else if (this.props.error) {
      display = <h1>{this.props.error}</h1>;
    } else if (listOfStrings.length !== 0) {
      display = <List listOfStrings={listOfStrings} />;
    } else if (listOfStrings.length > 0) {
      display = <h1>No strings have been added!</h1>;
    }

    return (
      <div>
        <h1>Hello there! Here are some strings:</h1>
        {display}
      </div>
    );
  }
}

ShowStrings.propTypes = {
  loading: PropTypes.bool,
  strings: PropTypes.array,
  error: PropTypes.string,
  loadStrings: PropTypes.func,
  allStrings: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  showStrings: makeSelectShowStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  allStrings: makeSelectAllStrings(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadStrings: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'showStrings', reducer });
const withSaga = injectSaga({ key: 'showStrings', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ShowStrings);
