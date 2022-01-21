import Header from 'components/Header';
import CenterColumn from 'components/CenterColumn';
import Auth from 'components/Auth';
import CreateTweet from 'components/CreateTweet';
import Tweet from 'components/Tweet';

import * as styles from './Home.styles';

const Home = () => {
  return (
    <styles.Wrapper>
      <Header />
      <CenterColumn>
        <Auth />
        <CreateTweet />
        <Tweet />
      </CenterColumn>
    </styles.Wrapper>
  );
};

export default Home;
