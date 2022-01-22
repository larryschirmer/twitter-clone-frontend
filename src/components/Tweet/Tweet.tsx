import { formatDistanceToNow } from 'date-fns';

import ProfileImage from 'components/ProfileImage';
import CommentForm from './CommentForm';

import * as styles from './Tweet.styles';

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

type Props = {
  tweet: TweetT;
};

const Tweet = ({ tweet }: Props) => {
  return (
    <styles.Wrapper>
      <Header name={tweet.user.name} date={tweet.date} />
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
        <CommentForm tweetId={tweet._id} />
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
