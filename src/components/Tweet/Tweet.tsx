import { formatDistanceToNow } from 'date-fns';
import ProfileImage from 'components/ProfileImage';

import * as styles from './Tweet.styles';

type User = {
  _id: string;
  name: string;
};

type Comment = {
  message: string;
  date: string;
  user: User;
};

type Retweet = {
  _id: string;
  message: string;
  date: string;
  user: User;
};

type TweetT = {
  _id: string;
  message: string | null;
  retweet: Retweet | null;
  date: string;
  user: User;
  comments: [Comment];
};

const tweet = {
  _id: '61e978b124e790246e2fa78b',
  message: null,
  retweet: {
    _id: '61e9788024e790246e2fa786',
    message: 'inspiring',
    date: '2022-01-20T14:58:08.090Z',
    user: {
      _id: '61e87fe38d460cb48bfb4354',
      name: 'flower',
    },
  },
  date: '2022-01-20T14:58:57.690Z',
  user: {
    _id: '61e893e1fdaf065257809ec2',
    name: 'moss',
  },
  comments: [],
};

const Tweet = () => {
  return (
    <styles.Wrapper>
      <div className="header">
        <div className="profile">
          <ProfileImage initials={tweet.user.name[0].toUpperCase()} />
          <div className="profile-name">{tweet.user.name}</div>
        </div>
        {' • '}
        <div className="tweet-time">
          {formatDistanceToNow(new Date(tweet.date), { addSuffix: true })}
        </div>
      </div>
      {tweet.message && <div className="message">{tweet.message}</div>}
      {tweet.retweet && (
        <div className="retweet">
          <div className="header">
            <div className="profile">
              <ProfileImage initials={tweet.retweet.user.name[0].toUpperCase()} />
              <div className="profile-name">{tweet.retweet.user.name}</div>
            </div>
            {' • '}
            <div className="tweet-time">
              {formatDistanceToNow(new Date(tweet.retweet.date), { addSuffix: true })}
            </div>
          </div>
          <div className="message">{tweet.retweet.message}</div>
        </div>
      )}
    </styles.Wrapper>
  );
};

export default Tweet;
