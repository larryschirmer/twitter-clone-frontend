import { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button';
import TextArea from 'components/TextArea';

import * as styles from './CreateTweet.styles';

import useAppState from 'utils/AppState';

const COMPOSETWEET = gql`
  mutation ComposeTweet($message: String) {
    composeTweet(message: $message) {
      _id
    }
  }
`;

type Vars = {
  message: string;
};

type Data = {
  _id: string;
};

type Inputs = {
  message: string;
};

const CreateTweet = () => {
  const [composeTweet, { loading, data, error, reset }] = useMutation<Data, Vars>(COMPOSETWEET);
  const { setReloadTweets } = useAppState();

  const handleSubmit = (values: Inputs) => {
    composeTweet({ variables: values });
  };

  // handle Errors
  useEffect(() => {
    if (error) {
      // handle error
    }
  }, [error]);

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
        <div className="form-row grid-tweet">
          <TextArea
            id="message"
            name="message"
            value={values.message}
            placeholder="What's on your mind?"
            error={touched.message ? errors.message : ''}
            onChange={handleChange}
            onBlur={() => setFieldTouched('message', true)}
          />
        </div>
        <div className="form-row grid-cta">
          <Button type="submit" disabled={!isValid || loading}>
            Tweet
          </Button>
        </div>
      </form>
    </styles.Wrapper>
  );
};

export default CreateTweet;
