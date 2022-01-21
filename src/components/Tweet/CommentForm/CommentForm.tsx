import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button';
import Input from 'components/Input';

import * as styles from './CommentForm.styles';

type Inputs = {
  comment: string;
};

const CommentForm = () => {
  const handleSubmit = (values: Inputs) => {};

  const initialValues = { comment: '' };
  const validationSchema = Yup.object({
    comment: Yup.string().required('Nothing on your mind?'),
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
        <div className="form-row grid-comment">
          <Input
            id="comment"
            name="comment"
            value={values.comment}
            placeholder="Comment"
            error={touched.comment ? errors.comment : ''}
            onChange={handleChange}
            onBlur={() => setFieldTouched('comment', true)}
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
