import { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button';
import Input from 'components/Input';

import * as styles from './CommentForm.styles';

import useAppState from 'utils/AppState';

const COMMENTTWEET = gql`
  mutation CommentTweet($tweetId: String, $message: String) {
    commentTweet(tweetId: $tweetId, message: $message) {
      _id
    }
  }
`;

type Vars = {
  tweetId: string;
  message: string;
};

type Data = {
  _id: string;
};

type Inputs = {
  message: string;
};

type Props = {
  tweetId: string;
};

const CommentForm = ({ tweetId }: Props) => {
  const [composeTweet, { loading, data, error, reset }] = useMutation<Data, Vars>(COMMENTTWEET);
  const { setReloadTweets } = useAppState();

  const handleSubmit = (values: Inputs) => {
    composeTweet({ variables: { tweetId, ...values } });
  };

  const initialValues = { message: '' };
  const validationSchema = Yup.object({
    message: Yup.string().required('Nothing on your mind?'),
  });

  const { handleChange, values, submitForm, errors, touched, setFieldTouched, isValid, resetForm } =
    useFormik<Inputs>({
      initialValues,
      validationSchema,
      onSubmit: (values: Inputs) => handleSubmit(values),
      validateOnMount: true,
    });

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
      resetForm();
    }
  }, [data, reset, resetForm, setReloadTweets]);

  return (
    <styles.Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <div className="form-row grid-comment">
          <Input
            id={`comment-${tweetId}`}
            name="message"
            value={values.message}
            placeholder="Comment"
            error={touched.message ? errors.message : ''}
            onChange={handleChange}
            onBlur={() => setFieldTouched('message', true)}
          />
        </div>
        <div className="form-row grid-cta">
          <Button disabled={!isValid || loading} type="submit" aria-label="sending request">
            Comment
          </Button>
        </div>
      </form>
    </styles.Wrapper>
  );
};

export default CommentForm;
