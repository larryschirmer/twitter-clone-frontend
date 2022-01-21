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

const tweet: TweetT = {
  _id: '61e97dfc4e389aa9bf440b7e',
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
  date: '2022-01-20T15:21:32.535Z',
  user: {
    _id: '61e893e1fdaf065257809ec2',
    name: 'moss',
  },
  comments: [
    {
      message: 'I needed to say something',
      date: '2022-01-20T15:23:14.192Z',
      user: {
        _id: '61e893e1fdaf065257809ec2',
        name: 'moss',
      },
      _id: '61e97e624e389aa9bf440b82',
    },
    {
      message: 'I needed to say something',
      date: '2022-01-20T15:33:20.031Z',
      user: {
        _id: '61e893e1fdaf065257809ec2',
        name: 'moss',
      },
      _id: '61e980c0265a92c5506bbee4',
    },
  ],
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

const Tweet = () => {
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
        <CommentForm />
        {tweet.comments.length && (
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
