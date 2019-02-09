/**
 *
 * ShowStrings
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectShowStrings, {
  makeSelectAllStrings,
  makeSelectLoading,
} from './selectors';
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
    let loading = <h1>Loading</h1>;

    if (this.props.loading === false) {
      const listOfStrings = this.props.allStrings.strings;
      console.log('list of strings are here', listOfStrings);
      this.renderList = listOfStrings.map(item => (
        <li key={item.id}>{item.data}</li>
      ));
      loading = null;
      console.log('boop');
    }

    return (
      <div>
        <h1>Hello there! Here are some strings:</h1>
        {loading}
        <ul>{this.renderList}</ul>
      </div>
    );
  }
}

ShowStrings.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
