import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {
  Button,
  Dropdown,
  Form,
  Input,
  Checkbox,
  Radio
} from 'formik-semantic-ui';
import {Button as SUIButton} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Grid, Header, Container, Icon} from 'semantic-ui-react';

// Sections
import {sections} from './Sections';

// Styled components
const SectionTitleContainer = styled.div`
  padding-top: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;

const ApplicationPage = () => {
  const [currSection, setCurrSection] = useState(0);
  const [formData, setFormData] = useState([]);

  const _handleSubmit = (values, formikApi) => {
    // Make API Call
    console.log(values, formikApi);

    formikApi.setSubmitting(false);
  };

  const _handleReset = (values, formikApi) => {
    setCurrSection(currSection - 1);
  };

  useEffect(() => {
    // This is called when the page initially mounts. It handles going back and forth between form pages.
    let d = formData;
    for (let j = 0; j < 2; j++) {
      const items = sections[j].fields;
      let iVals = {};
      for (let i = 0; i < items.length; i++) {
        const name = items[i].name;
        const iVal = items[i].initialValue;
        iVals[name] = iVal;
      }
      d.push(iVals);
    }
    console.log(d);
    setFormData(d);
  }, []);

  return (
    <Grid container stretched>
      <Grid.Row centered>
        <Grid.Column>
          <SectionTitleContainer>
            <Header size='huge' subheader={sections[currSection].subtitle}>
              {sections[currSection].title}
            </Header>
          </SectionTitleContainer>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column>
          <Form
            onSubmit={_handleSubmit}
            onReset={_handleReset}
            initialValues={formData[currSection]}
          >
            <Input label='Email' name='emailAddress' />

            <Form.Group widths='2'>
              <Input label='First Name' name='firstName' />
              <Input label='Last Name' name='lastName' />
            </Form.Group>

            <Checkbox name='checkbox' label='Check Box' />

            <Radio name='radio' label='Option 1' value={1} />
            <Radio name='radio' label='Option 2' value={2} />
            <Dropdown
              name='dropdown'
              label='Dropdown'
              options={[
                {text: 'Option 1', value: 1},
                {text: 'Option 2', value: 2}
              ]}
            />
            <ButtonGroup>
              <SUIButton as={Link} to='/' basic>
                Cancel
              </SUIButton>
              {currSection > 0 && <Button.Reset>Back</Button.Reset>}
              <Button.Submit>Next</Button.Submit>
            </ButtonGroup>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ApplicationPage;
