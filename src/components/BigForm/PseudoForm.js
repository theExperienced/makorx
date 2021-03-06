import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import DispatcherField from './DispatcherField';
import { formData } from '../../utils/formData';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import CountryAutoComplete from '../CountryAutoComplete';
import { useStyles } from '../../styles/UiForm';

const steps = [
  'Submit on-boarding documentation',
  'Attach documents',
  'Terms of Use',
];
const PseudoForm = memo(function (props) {
  const { steps } = props;
  const formState = useSelector((state) => state.formData);
  const classes = useStyles();

  React.useEffect(() => {
    console.log('formState', formState['cname']);
  }, []);

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container>
          {formData.form1.grid1.map(({ label, id }) => (
            <Grid className={classes.root} item xs={6}>
              <DispatcherField value={formState[id]} id={id} label={label} />
            </Grid>
          ))}
          <Grid item xs={6}>
            <CountryAutoComplete />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {formData.form1.grid2.map(({ label, id }) => (
          <DispatcherField value={formState[id]} id={id} label={label} />
        ))}
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          {formData.form1.grid3.map(({ label, id }) => (
            <Grid item xs={6}>
              <DispatcherField
                value={formState[id]}
                multiline
                maxRows={9}
                rows={9}
                id={id}
                label={label}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});

export default PseudoForm;

export const StyledTextField = withStyles((theme) => ({
  root: {
    // border: "solid #3F3073",
    color: '#6d6d6d',
    marginTop: '20px',
    textAlign: 'center',
  },
}))(TextField);
