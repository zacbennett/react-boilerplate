import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Form from './Form';
import Input from './Input';

import { changeString, uploadString, clearSuccessError } from './actions';
import {
  makeSelectString,
  makeSelectErrorMsg,
  makeSelectSuccessMsg,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class AddString extends React.PureComponent {
  componentDidMount() {
    // Clears the success/error messages when mounting the page
    this.props.clearSuccessError();
  }

  render() {
    // Displays an error message or success message
    const displayMsg = this.props.errorMsg
      ? this.props.errorMsg
      : this.props.successMsg;
    return (
      <div>
        <h1>Hello there! Add a string below:</h1>
        <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="username">
            <Input
              id="username"
              type="text"
              value={this.props.string}
              onChange={this.props.changeString}
            />
          </label>
          <button type="submit">Submit!</button>
        </Form>
        <h1>{displayMsg}</h1>
      </div>
    );
  }
}

AddString.propTypes = {
  onSubmitForm: PropTypes.func,
  string: PropTypes.string,
  errorMsg: PropTypes.string,
  successMsg: PropTypes.string,
  changeString: PropTypes.func,
  clearSuccessError: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    changeString: evt => dispatch(changeString(evt.target.value)),
    clearSuccessError: () => dispatch(clearSuccessError()),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(uploadString());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
  errorMsg: makeSelectErrorMsg(),
  successMsg: makeSelectSuccessMsg(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddString);
