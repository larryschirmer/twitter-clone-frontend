import { useState } from 'react';
import * as styles from './Auth.styles';

import Button from 'components/Button';
import AuthForm from 'components/AuthForm';

const copy = {
  newUser: ' New here? Sign up',
  existingUser: 'Already have account? Log in',
};

const Auth = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const handleSubmit = () => {};
  return (
    <styles.Wrapper>
      <Button isSecondary onClick={() => setIsNewUser((state) => !state)}>
        {isNewUser ? copy.existingUser : copy.newUser}
      </Button>
      <AuthForm submitCopy={isNewUser ? 'Sign up' : 'Log in'} {...{ handleSubmit }} />
    </styles.Wrapper>
  );
};

export default Auth;
