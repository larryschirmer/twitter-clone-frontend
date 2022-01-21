import Header from 'components/Header';
import CenterColumn from 'components/CenterColumn';
import UserInteract from 'components/UserInteract';
import Tweet from 'components/Tweet';

import { Provider, appState } from 'utils/AppState';

import * as styles from './Home.styles';

const Home = () => {
  return (
    <Provider value={appState}>
      <styles.Wrapper>
        <Header />
        <CenterColumn>
          <UserInteract />
          <Tweet />
        </CenterColumn>
      </styles.Wrapper>
    </Provider>
  );
};

export default Home;
