import Auth from 'components/Auth';
import CreateTweet from 'components/CreateTweet';

import * as styles from './UserInteract.styles';

import useAppState from 'utils/AppState';

const UserInteract = () => {
  const { isLoggedIn } = useAppState();
  return <styles.Wrapper>{isLoggedIn ? <CreateTweet /> : <Auth />}</styles.Wrapper>;
};

export default UserInteract;
