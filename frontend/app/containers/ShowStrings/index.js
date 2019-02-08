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
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ShowStrings extends React.Component {
  componentDidMount() {
    // Dispatch that gets the state

    this.props.loadStrings();
  }

  render() {
    console.log(this.props.allStrings);
    return (
      <div>
        <Helmet>
          <title>ShowStrings</title>
          <meta name="description" content="Description of ShowStrings" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ShowStrings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  strings: PropTypes.array,
  loadStrings: PropTypes.func,
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
