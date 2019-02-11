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

    // if (this.props.loading === false) {
    //   loading = null;
    // }

    return (
      <div>
        <h1>Hello there! Here are some strings:</h1>
        {this.props.loading ? (
          <h1>Loading</h1>
        ) : (
          <List listOfStrings={listOfStrings} />
        )}
      </div>
    );
  }
}

ShowStrings.propTypes = {
  loading: PropTypes.bool,
  strings: PropTypes.array,
  loadStrings: PropTypes.func,
  allStrings: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  showStrings: makeSelectShowStrings(),
  loading: makeSelectLoading(),
  allStrings: makeSelectAllStrings(),
});

function mapDispatchToProps(dispatch) {
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
