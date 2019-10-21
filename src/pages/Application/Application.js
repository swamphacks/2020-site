import React, {useState} from 'react';
import styled from 'styled-components';
import {Formik, Form, Field} from 'formik';
import {Box, Grid, Button, Typography} from '@material-ui/core';
import FieldHelper from '../../components/FieldHelper';

// Sections
import {sections} from './Sections';

const Application = () => {
  const [currSection, setSection] = useState(2);
  const [formData, setFormData] = useState({});

  const FormContainer = styled(Form)`
    margin-top: 10vh;
    background-color: transparent;
    display: flex;
    justify-content: center;
    width: 80%;
    flex-direction: column;
  `;

  const Container = styled(Box)`
    display: flex;
    width: 100vw;
    min-height: 100vh;
    flex-grow: 1;
    align-items: flex-start;
    justify-content: center;
  `;

  const handleSubmit = (values, {setSubmitting}) => {
    const newData = {...formData, ...values};
    setFormData(newData);
    console.log(newData);
    if (currSection !== sections.length - 1) {
      setSection(currSection + 1);
    } else {
      console.log('form data', newData);
    }
  };

  const handleGoBack = () => {
    setSection(currSection - 1);
  };

  return (
    <Container>
      <Formik
        validationSchema={sections[currSection].schema}
        onSubmit={handleSubmit}
        // initialValues={sections[currSection].initialValues}
        render={props => (
          <FormContainer>
            <Grid container spacing={3}>
              <Grid item>
                <Typography variant='h3'>
                  {sections[currSection].title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle1'>
                  {sections[currSection].subtitle}
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                {sections[currSection].fields.map(
                  ({
                    name,
                    label,
                    isRequired,
                    placeholder,
                    componentProps,
                    ...props
                  }) => {
                    return (
                      <Grid item xs={12}>
                        <Field
                          component={FieldHelper}
                          name={name}
                          label={label}
                          required={isRequired}
                          placeholder={placeholder}
                          {...componentProps}
                          {...props}
                          key={name}
                          defaultValue={
                            formData[name] ? formData[name] : undefined
                          }
                        />
                      </Grid>
                    );
                  }
                )}
              </Grid>

              <Grid item container spacing={2}>
                {currSection !== 0 && (
                  <Grid item>
                    <Button onClick={handleGoBack}>Back</Button>
                  </Grid>
                )}
                <Grid item>
                  <Button color='primary' type='submit'>
                    {currSection === sections.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </FormContainer>
        )}
      ></Formik>
    </Container>
  );
};

export default Application;
