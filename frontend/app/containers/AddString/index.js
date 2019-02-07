/**
 *
 * AddString
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import Input from './Input';
import { addString } from './actions';

import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class AddString extends React.Component {
  render() {
    // const string = {this.props.string};
    return (
      <div>
        <h1>BOOP</h1>
        <form action="">
          <input
            id="username"
            type="text"
            placeholder="mxstbr"
            value={this.props.string}
            onChange={this.props.addString}
          />
        </form>
      </div>
    );
  }
}

AddString.propTypes = {
  string: PropTypes.string,
  addString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // addString: makeSelectAddString(),
  addString: AddString(),
});

function mapDispatchToProps(dispatch) {
  return {
    addString: evt => dispatch(addString(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'addString', reducer });
const withSaga = injectSaga({ key: 'addString', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddString);
