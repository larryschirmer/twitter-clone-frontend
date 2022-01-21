import { useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import * as styles from './Header.styles';

import ProfileImage from 'components/ProfileImage';

import getCookie from 'utils/getCookie';
import deleteCookie from 'utils/deleteCookie';
import useAppState from 'utils/AppState';

const GETUSER = gql`
  query Query {
    user {
      user {
        _id
        name
      }
      jwt
    }
  }
`;

type Data = {
  user: {
    user: {
      _id: string;
      name: string;
    };
    jwt: string;
  };
};

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppState();
  const [getUser, { data, error }] = useLazyQuery<Data>(GETUSER);

  // if user has cookie, fetch user data
  useEffect(() => {
    const token = getCookie(document.cookie, 'token');
    if (token) getUser();
  }, [getUser]);

  // is user is logged in but user data is not available
  useEffect(() => {
    if (isLoggedIn && !data) {
      const token = getCookie(document.cookie, 'token');
      if (token) getUser();
    }
  }, [data, getUser, isLoggedIn]);

  // once user data is loaded, notify app user is logged in
  useEffect(() => {
    if (data) {
      setIsLoggedIn(true);
    }
  }, [data, setIsLoggedIn]);

  // if the cookie is expired, clear cookie
  useEffect(() => {
    if (error) deleteCookie('token');
  }, [error]);

  return (
    <styles.Wrapper>
      <h1>Twitter Clone</h1>
      <div className="login-status">
        {data && (
          <>
            <ProfileImage initials={data?.user.user.name[0] || ''} />
            <div className="profile-name">{data?.user.user.name}</div>
          </>
        )}
      </div>
    </styles.Wrapper>
  );
};

export default Header;
