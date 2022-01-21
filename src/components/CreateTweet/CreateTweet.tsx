import { useFormik } from 'formik';
import * as Yup from 'yup';

import * as styles from './CreateTweet.styles';

import Button from 'components/Button';
import TextArea from 'components/TextArea';

type Inputs = {
  tweet: string;
};

const CreateTweet = () => {
  const handleSubmit = (values: Inputs) => {};

  const initialValues = { tweet: '' };
  const validationSchema = Yup.object({
    tweet: Yup.string().required('Username is required'),
  });

  const loading = false;

  const { handleChange, values, submitForm, errors, touched, setFieldTouched, isValid } =
    useFormik<Inputs>({
      initialValues,
      validationSchema,
      onSubmit: (values: Inputs) => handleSubmit(values),
      validateOnMount: true,
    });

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
            id="tweet"
            name="tweet"
            value={values.tweet}
            placeholder="What's on your mind?"
            error={touched.tweet ? errors.tweet : ''}
            onChange={handleChange}
            onBlur={() => setFieldTouched('name', true)}
          />
        </div>
        <div className="form-row grid-cta">
          <Button disabled={!isValid || loading}>Tweet</Button>
        </div>
      </form>
    </styles.Wrapper>
  );
};

export default CreateTweet;
