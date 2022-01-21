import * as styles from './Header.styles';

import ProfileImage from 'components/ProfileImage';

const Header = () => {
  return (
    <styles.Wrapper>
      <h1>Twitter Clone</h1>
      <div className="login-status">
        <ProfileImage initials='UN' />
        <div className="profile-name">User Name</div>
      </div>
    </styles.Wrapper>
  );
};

export default Header;
