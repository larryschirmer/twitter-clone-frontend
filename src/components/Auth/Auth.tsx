import { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';

import * as styles from './Auth.styles';

import Button from 'components/Button';
import AuthForm, { Inputs } from 'components/AuthForm';

type DataSignUp = {
  signUp: {
    user: {
      _id: string;
      name: string;
    };
    jwt: string;
  };
};

type DataSignIn = {
  signIn: {
    user: {
      _id: string;
      name: string;
    };
    jwt: string;
  };
};

type Vars = {
  name: string;
  password: string;
};

const SIGNUP = gql`
  mutation SignUp($name: String, $password: String) {
    signUp(name: $name, password: $password) {
      user {
        _id
        name
      }
      jwt
    }
  }
`;

const SIGNIN = gql`
  mutation SignIn($name: String, $password: String) {
    signIn(name: $name, password: $password) {
      user {
        _id
        name
      }
      jwt
    }
  }
`;

const dayInMilliseconds = 1000 * 60 * 60 * 24;
const newToken = (token: string) =>
  `token=${token}; expires=${new Date(Date.now() + dayInMilliseconds)}; path=/`;

const copy = {
  newUser: ' New here? Sign up',
  existingUser: 'Already have account? Log in',
};

const Auth = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [signup, { loading: loadingUp, data: dataUp, error: errorUp }] = useMutation<
    DataSignUp,
    Vars
  >(SIGNUP);
  const [signin, { loading: loadingIn, data: dataIn, error: errorIn }] = useMutation<
    DataSignIn,
    Vars
  >(SIGNIN);

  const isLoading = loadingUp || loadingIn;

  const handleSubmit = ({ name, password }: Inputs) => {
    if (isNewUser) signup({ variables: { name, password } });
    else signin({ variables: { name, password } });
  };

  // when user data comes back, store jwt as cookie
  useEffect(() => {
    if ((dataUp && !errorUp) || (dataIn && !errorIn)) {
      const token = dataUp?.signUp?.jwt ?? dataIn?.signIn?.jwt ?? '';
      document.cookie = newToken(token);
    }
  }, [dataIn, dataUp, errorIn, errorUp]);

  return (
    <styles.Wrapper>
      <Button isSecondary onClick={() => setIsNewUser((state) => !state)}>
        {isNewUser ? copy.existingUser : copy.newUser}
      </Button>
      <AuthForm
        submitCopy={isNewUser ? 'Sign up' : 'Log in'}
        loading={isLoading}
        {...{ handleSubmit }}
      />
    </styles.Wrapper>
  );
};

export default Auth;
