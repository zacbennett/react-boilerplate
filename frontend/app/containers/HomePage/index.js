/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import ReposList from 'components/ReposList';

import Form from './Form';
import Input from './Input';

import { changeString, uploadString } from './actions';
import {
  makeSelectString,
  makeSelectErrorMsg,
  makeSelectSuccessMsg,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

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
        <h1>{this.props.successMsg}</h1>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  string: PropTypes.string,
  errorMsg: PropTypes.string,
  successMsg: PropTypes.string,
  changeString: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    changeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(uploadString());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  string: makeSelectString(),
  loading: makeSelectLoading(),
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
)(HomePage);
