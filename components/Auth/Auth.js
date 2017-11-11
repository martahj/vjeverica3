// @flow
import React, { PureComponent } from 'react';
import selectn from 'selectn';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { login, signup } from '../../lib/api';

const TOKEN = 'vjev_token'; // TODO should probably encyrpt or something

type User = {
  admin: boolean,
  email: string,
};

type AuthProps = {
  loggedIn: boolean,
  logIn: (userData: { token: string, user: User }) => void,
  logOut: () => void,
};

type AuthState = {
  open: boolean,
  signupView: boolean,
  error: ?string,
  formState: {
    email: string,
    password: string,
  },
};

class Auth extends PureComponent<AuthProps, AuthState> {
  state = {
    open: false,
    signupView: false,
    error: null,
    formState: {
      email: '',
      password: '',
    },
  }

  closeModal = (): void => {
    this.setState({ open: false });
  }

  openLogin = (): void => {
    this.setState({
      open: true,
      signupView: false,
    });
  }

  openSignup = (): void => {
    this.setState({
      open: true,
      signupView: true,
    });
  }

  handleEmailChange = (event): void => {
    const email = selectn('target.value', event);
    this.setState({
      formState: {
        ...this.state.formState,
        email,
      },
    });
  }

  handlePasswordChange = (event): void => {
    const password = selectn('target.value', event);
    this.setState({
      formState: {
        ...this.state.formState,
        password,
      },
    });
  }

  loginOrSignUp = async (): void => {
    const { signupView, formState } = this.state;
    const apiRequest = signupView ? signup : login;
    try {
      const { message, user, token } = await apiRequest(formState);
      if (message) {
        this.setState({ error: message });
      } else if (user && token) {
        this.props.logIn({ user, token });
      }
    } catch (err) {
      this.setState({
        error: 'An error ocurred. Please try again.',
      });
    }
  }

  render() {
    const { loggedIn } = this.props;
    const { signupView, open, formState, error } = this.state;
    return (
      <div>
        {loggedIn ? (
          <FlatButton
            label="Log Out"
            onClick={this.props.logOut}
          />
      ) : (
        <div>
          <FlatButton
            label="Log In"
            onClick={this.openLogin}
          />
          <FlatButton
            label="Create Account"
            onClick={this.openSignup}
          />
          <Dialog
            title={signupView ? 'Create An Account' : 'Log In'}
            open={open}
            actions={[
              <FlatButton
                label="Cancel"
                onClick={this.closeModal}
              />,
              <FlatButton
                label={signupView ? 'Sign Up' : 'Log In'}
                onClick={this.loginOrSignUp}
              />,
            ]}
          >
            <TextField
              id="AUTH_EMAIL"
              onChange={this.handleEmailChange}
              value={formState.email}
              floatingLabelText="Email"
            />
            <TextField
              id="AUTH_PASSWORD"
              onChange={this.handlePasswordChange}
              value={formState.password}
              floatingLabelText="Password"
            />
          </Dialog>
        </div>
      )}
        {error && error}
      </div>
    );
  }
}

export default Auth;
