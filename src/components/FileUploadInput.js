import React from 'react';
import {Button, Typography, Grid} from '@material-ui/core';

const FileUploadInput = ({field, setFieldTouched, setFieldValue, ...props}) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography>{props.label}</Typography>
      </Grid>

      <input
        accept='.pdf,.doc,.docx'
        type='file'
        onChange={e => {
          console.log(e.target.value);
          setFieldTouched(field.name, true);
          console.log(e.currentTarget.files[0]);
          setFieldValue(field.name, e.currentTarget.files[0]);
        }}
        id={field.name}
        style={{display: 'none'}}
      />
      <Grid item container alignItems='center' spacing={4}>
        <Grid item>
          <label htmlFor={field.name}>
            <Button
              variant='outlined'
              component='span'
              size='medium'
              color='primary'
            >
              Upload File
            </Button>
          </label>
        </Grid>

        <Grid item>
          <Typography>
            {field.value ? field.value.name : 'No file selected.'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FileUploadInput;
