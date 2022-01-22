import { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { formatDistanceToNow } from 'date-fns';

import ProfileImage from 'components/ProfileImage';
import Button from 'components/Button';
import CommentForm from './CommentForm';

import * as styles from './Tweet.styles';

import useAppState from 'utils/AppState';

type User = {
  _id: string;
  name: string;
};

type Comment = {
  _id: string;
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
  comments: Comment[];
};

type HeaderProps = {
  name: string;
  date: string;
};

const Header = ({ name, date }: HeaderProps) => {
  const initials = name[0].toUpperCase();
  return (
    <div className="header">
      <div className="profile">
        <ProfileImage {...{ initials }} />
        <div className="profile-name">{name}</div>
      </div>
      {' • '}
      <div className="tweet-time">{formatDistanceToNow(new Date(date), { addSuffix: true })}</div>
    </div>
  );
};

const RETWEET = gql`
  mutation ReTweet($tweetId: String) {
    reTweet(tweetId: $tweetId) {
      _id
    }
  }
`;

type Vars = {
  tweetId: string;
};

type Data = {
  _id: string;
};

type Props = {
  tweet: TweetT;
};

const Tweet = ({ tweet }: Props) => {
  const [reTweet, { loading, data, error, reset }] = useMutation<Data, Vars>(RETWEET);
  const { isLoggedIn, setReloadTweets } = useAppState();

  const handleReTweet = () => {
    reTweet({ variables: { tweetId: tweet._id } });
  };

  // handle Errors
  useEffect(() => {
    if (error) {
      // handle error
    }
  }, [error]);

  // on success notify app to reload tweets
  useEffect(() => {
    if (data) {
      setReloadTweets(true);
      reset();
    }
  }, [data, reset, setReloadTweets]);

  return (
    <styles.Wrapper>
      <div className="header-with-cta">
        <Header name={tweet.user.name} date={tweet.date} />
        {isLoggedIn && !tweet.retweet && (
          <Button disabled={loading} onClick={handleReTweet}>
            Retweet
          </Button>
        )}
      </div>
      <div className="body">
        {tweet.message && <div className="message">{tweet.message}</div>}
        {tweet.retweet && (
          <div className="retweet">
            <Header name={tweet.retweet.user.name} date={tweet.retweet.date} />
            <div className="body">
              <div className="message">{tweet.retweet.message}</div>
            </div>
          </div>
        )}
        {isLoggedIn && <CommentForm tweetId={tweet._id} />}
        {!!tweet.comments.length && (
          <div className="comments">
            {tweet.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <Header name={comment.user.name} date={comment.date} />
                <div className="body">
                  <div className="message">{comment.message}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </styles.Wrapper>
  );
};

export default Tweet;
