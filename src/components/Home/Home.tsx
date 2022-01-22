import Header from 'components/Header';
import CenterColumn from 'components/CenterColumn';
import UserInteract from 'components/UserInteract';
import Tweets from 'components/Tweets';

import { AppStateProvider } from 'utils/AppState';

import * as styles from './Home.styles';

const Home = () => {
  return (
    <AppStateProvider>
      <styles.Wrapper>
        <Header />
        <CenterColumn>
          <UserInteract />
          <Tweets />
        </CenterColumn>
      </styles.Wrapper>
    </AppStateProvider>
  );
};

export default Home;
