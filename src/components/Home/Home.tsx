import Header from 'components/Header';
import CenterColumn from 'components/CenterColumn';
import Auth from 'components/Auth';

import * as styles from './Home.styles';

const Home = () => {
  return (
    <styles.Wrapper>
      <Header />
      <CenterColumn>
        <Auth />
      </CenterColumn>
    </styles.Wrapper>
  );
};

export default Home;
