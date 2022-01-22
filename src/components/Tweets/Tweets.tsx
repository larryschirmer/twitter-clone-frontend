import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import * as styles from './Tweets.styles';

import Tweet from 'components/Tweet';

import useAppState from 'utils/AppState';

const GETTWEETS = gql`
  query GetTweets {
    tweets {
      _id
      message
      retweet {
        _id
        message
        date
        user {
          _id
          name
        }
      }
      date
      user {
        _id
        name
      }
      comments {
        _id
        message
        date
        user {
          _id
          name
        }
      }
    }
  }
`;

type Data = {
  tweets: {
    _id: string;
    message: string | null;
    retweet: {
      _id: string;
      message: string;
      date: string;
      user: {
        _id: string;
        name: string;
      };
    } | null;
    date: string;
    user: {
      _id: string;
      name: string;
    };
    comments: {
      _id: string;
      message: string;
      date: string;
      user: {
        _id: string;
        name: string;
      };
    }[];
  }[];
};

const Tweets = () => {
  const { data, refetch } = useQuery<Data>(GETTWEETS);
  const { reloadTweets, setReloadTweets } = useAppState();

  // if a new tweet or comment is posted, refresh tweets
  useEffect(() => {
    if (reloadTweets) {
      setReloadTweets(false);
      refetch();
    }
  }, [refetch, reloadTweets, setReloadTweets]);

  return (
    <styles.Wrapper>
      {data?.tweets && data?.tweets.map((tweet) => <Tweet key={tweet._id} {...{ tweet }} />)}
    </styles.Wrapper>
  );
};

export default Tweets;
