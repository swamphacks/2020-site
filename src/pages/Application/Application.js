import React, {useState} from 'react';
import styled from 'styled-components';
import {Formik, Form, Field} from 'formik';
import {Box, Button, Heading, Paragraph} from 'grommet';
import FieldHelper from '../../components/FieldHelper';

// Necessary inputs:
// Checkbox
// Text field
// Text box
// Select

// Sections
import {sections} from './Sections';

const Application = () => {
  const [currSection, setSection] = useState(2);
  const [formData, setFormData] = useState({});

  const FormContainer = styled(Form)`
    background-color: transparent;
    display: flex;
    justify-content: center;
    width: 80%;
    flex-direction: column;
  `;

  const Container = styled.div`
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
            <Heading level='3'>{sections[currSection].title}</Heading>
            <Paragraph fill>{sections[currSection].subtitle}</Paragraph>
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
                  <Field
                    component={FieldHelper}
                    name={name}
                    label={label}
                    required={isRequired}
                    placeholder={placeholder}
                    {...componentProps}
                    {...props}
                    key={name}
                    defaultValue={formData[name] ? formData[name] : undefined}
                  />
                );
              }
            )}
            <Box direction='row' gap='xsmall' margin={{vertical: 'medium'}}>
              {currSection !== 0 && (
                <Button label='Back' onClick={handleGoBack} />
              )}
              <Button
                label={currSection === sections.length - 1 ? 'Submit' : 'Next'}
                type='submit'
                primary
              />
            </Box>
          </FormContainer>
        )}
      ></Formik>
    </Container>
  );
};

export default Application;
