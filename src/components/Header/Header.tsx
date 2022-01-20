import * as styles from './Header.styles';

const Header = () => {
  return (
    <styles.Wrapper>
      <h1>Twitter Clone</h1>
      <div className="login-status">
        <div className="profile-img">UN</div>
        <div className="profile-name">User Name</div>
      </div>
    </styles.Wrapper>
  );
};

export default Header;
