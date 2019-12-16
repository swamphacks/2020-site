import React, {useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {Button, Form, Input} from 'formik-semantic-ui';
import {
  Grid,
  Header,
  Label,
  Container,
  Transition,
  Button as SUIButton,
  Modal
} from 'semantic-ui-react';
import styled from 'styled-components';
import * as yup from 'yup';
import {withFirebase} from '../../components/Firebase';

// Styled components
const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  padding: 20px 40px;
  width: 80%;
  max-width: 400px;
  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;
`;

const CustomLink = styled.p`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email.')
    .required('This field is required.'),
  password: yup.string().required('This field is required.')
});

const resetSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email.')
    .required('This field is required.')
});

const errorComponent = ({message}) => (
  <Label basic color='red' pointing>
    {message}
  </Label>
);

const LoginPage = ({firebase}) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const {from} = location.state || {from: {pathname: '/'}};

  const _handleSubmit = async (values, formikApi) => {
    const {email, password} = values;
    try {
      await firebase.signIn(email, password);
      formikApi.setSubmitting(false);
      history.replace(from);
    } catch (error) {
      console.log(error);
      formikApi.setSubmitting(false);
    }
  };

  const _handleResetPassword = async (values, formikApi) => {
    const {email} = values;
    try {
      await firebase.sendPasswordResetEmail(email);
      formikApi.setSubmitting(false);
      setForgotPassword(false);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        formikApi.setFieldError(
          'email',
          'There is no account associated with this email.'
        );
      } else {
        formikApi.setFieldError(
          'email',
          `Unexpected error. Code: [${error.code}].`
        );
      }
      formikApi.setSubmitting(false);
    }
  };

  return (
    <RootContainer>
      <Transition visible={forgotPassword} animation='scale' duration={500}>
        <Modal open={forgotPassword}>
          <Modal.Header>Forgot your password?</Modal.Header>
          <Modal.Content>
            <StyledForm
              onSubmit={_handleResetPassword}
              validationSchema={resetSchema}
              ignoreLoading
              initialValues={{email: ''}}
              style={{display: 'contents'}}
            >
              {formikProps => (
                <React.Fragment>
                  <Modal.Description>
                    <p>
                      It's okay, it happens. Just type in the email you used to
                      apply and we'll send you a password reset link. When the
                      window closes, check your email for the reset link.
                    </p>
                    <Input
                      name='email'
                      label='Email'
                      inputProps={{placeholder: 'Email', type: 'email'}}
                      fieldProps={{
                        required: true
                      }}
                      errorComponent={errorComponent}
                    />
                  </Modal.Description>
                  <div style={{width: '100%'}}>
                    <ButtonGroup>
                      <SUIButton onClick={() => setForgotPassword(false)}>
                        Close
                      </SUIButton>
                      <Button.Submit
                        loading={formikProps.isSubmitting}
                        disabled={formikProps.isSubmitting}
                      >
                        Submit
                      </Button.Submit>
                    </ButtonGroup>
                  </div>
                </React.Fragment>
              )}
            </StyledForm>
          </Modal.Content>
        </Modal>
      </Transition>
      <TitleContainer>
        <h1>Login</h1>
      </TitleContainer>
      <StyledForm
        onSubmit={_handleSubmit}
        validationSchema={schema}
        ignoreLoading
        initialValues={{email: '', password: ''}}
      >
        {formikProps => (
          <InputContainer>
            <Input
              name='email'
              label='Email'
              inputProps={{placeholder: 'Email', type: 'email'}}
              fieldProps={{
                required: true
              }}
              errorComponent={errorComponent}
            />
            <Input
              name='password'
              label='Password'
              inputProps={{type: 'password', placeholder: 'Password'}}
              fieldProps={{
                required: true
              }}
              errorComponent={errorComponent}
            />
            <div onClick={() => setForgotPassword(true)}>
              <CustomLink>Forgot your password?</CustomLink>
            </div>
            <ButtonGroup>
              <SUIButton as={Link} to='/' basic color='black'>
                Back
              </SUIButton>
              <Button.Submit
                loading={formikProps.isSubmitting}
                disabled={formikProps.isSubmitting}
              >
                Login
              </Button.Submit>
            </ButtonGroup>
          </InputContainer>
        )}
      </StyledForm>
    </RootContainer>
  );
};

export default withFirebase(LoginPage);
