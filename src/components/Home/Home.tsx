import Header from 'components/Header';
import CenterColumn from 'components/CenterColumn';
import Auth from 'components/Auth';
import CreateTweet from 'components/CreateTweet';
import Tweet from 'components/Tweet';

import { Provider, appState } from 'utils/AppState';

import * as styles from './Home.styles';

const Home = () => {
  return (
    <Provider value={appState}>
      <styles.Wrapper>
        <Header />
        <CenterColumn>
          <Auth />
          <CreateTweet />
          <Tweet />
        </CenterColumn>
      </styles.Wrapper>
    </Provider>
  );
};

export default Home;
