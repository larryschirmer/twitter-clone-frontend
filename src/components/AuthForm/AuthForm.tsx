import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button';
import Input from 'components/Input';

import * as styles from './AuthForm.styles';

export type Inputs = {
  name: string;
  password: string;
};

type Props = {
  submitCopy: string;
  handleSubmit: (values: Inputs) => void;
};

const AuthForm = ({ submitCopy = 'Submit', handleSubmit }: Props) => {
  const initialValues = { name: '', password: '' };
  const validationSchema = Yup.object({
    name: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
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
        <div className="form-row grid-name">
          <Input
            id="name"
            label="Name"
            name="name"
            value={values.name}
            placeholder="Name"
            error={touched.name ? errors.name : ''}
            onChange={handleChange}
            onBlur={() => setFieldTouched('name', true)}
          />
        </div>
        <div className="form-row grid-password">
          <Input
            id="password"
            label="Password"
            type="password"
            name="password"
            value={values.password}
            placeholder="Password"
            error={touched.password ? errors.password : ''}
            onChange={handleChange}
            onBlur={() => setFieldTouched('password', true)}
          />
        </div>
        <div className="form-row grid-ctas">
          <div className="ctas">
            <Button disabled={!isValid || loading} type="submit" aria-label="sending request">
              {submitCopy}
            </Button>
          </div>
        </div>
      </form>
    </styles.Wrapper>
  );
};

export default AuthForm;
