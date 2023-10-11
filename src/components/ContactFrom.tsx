'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useForm, Controller, Control } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CopyToClipboardButton } from '@/components/CopyToClipboardButton';
import { Send } from '@mui/icons-material';
import styles from '../app/page.module.css';
import '../app/globals.css';

interface DataInterface {
  name: string;
  email: string;
  message: string;
}

const defaultValues = {
  name: '',
  email: '',
  message: '',
};

const schema = yup
  .object({
    name: yup.string().max(50).required(),
    email: yup.string().email().required(),
    message: yup.string().max(500).required(),
  })
  .required();

function FormTextField({
  control,
  error,
  helperText,
  name,
  label,
  multiline,
}: {
  control: Control<{
    name: string;
    email: string;
    message: string;
  }>;
  error: boolean;
  helperText: string;
  name: 'name' | 'email' | 'message';
  label: string;
  multiline?: boolean;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          autoComplete="on"
          minRows={2}
          size="small"
          multiline={multiline}
          fullWidth
          error={error}
          helperText={helperText}
          data-testid="name"
          label={label}
          {...field}
        />
      )}
    />
  );
}

export default function ContactFrom() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(true);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSubmit = React.useCallback(
    async (data: DataInterface) => {
      const NEXT_PUBLIC_REACT_APP_SERVICE_ID: string = process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID || '';
      const NEXT_PUBLIC_REACT_APP_TEMPLATE_ID: string = process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID || '';
      const NEXT_PUBLIC_REACT_APP_USER_ID: string = process.env.NEXT_PUBLIC_REACT_APP_USER_ID || '';
      const { name, email, message } = data;
      try {
        const templateParams = {
          name,
          email,
          message,
        };
        await emailjs.send(
          NEXT_PUBLIC_REACT_APP_SERVICE_ID,
          NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
          templateParams,
          NEXT_PUBLIC_REACT_APP_USER_ID,
        );
        setSubmitSuccess(true);
        reset();
      } catch (e) {
        setSubmitSuccess(false);
        console.log(e);
      } finally {
        setOpen(true);
      }
    },
    [reset],
  );

  return (
    <article className={styles.pageContainer}>
      <h1>Want to connect?</h1>
      <h2>Send me a message!</h2>
      <div className={styles.contactFormOuterContainer}>
        <form data-testid="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <Box className={styles.contactFormContainer}>
            <FormTextField
              error={!!errors.name}
              helperText={errors.name?.message || ''}
              control={control}
              name="name"
              label="Name"
            />
            <FormTextField
              error={!!errors.email}
              helperText={errors.email?.message || ''}
              control={control}
              name="email"
              label="Email"
            />
            <FormTextField
              error={!!errors.message}
              helperText={errors.message?.message || ''}
              control={control}
              name="message"
              label="Message"
              multiline
            />
            <Button startIcon={<Send />} fullWidth variant="outlined" type="submit">
              Send
            </Button>
            <Typography role="heading" variant="body1" gutterBottom>
              Or send me an email
            </Typography>
            <CopyToClipboardButton resourceName="Email address" resourceValue="samtmorgan01@gmail.com" />
          </Box>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          variant="filled"
          elevation={6}
          onClose={handleClose}
          severity={submitSuccess ? 'success' : 'warning'}
          sx={{ width: '100%' }}
        >
          {submitSuccess ? 'Message sent successfully!' : 'Message failed to send!'}
        </Alert>
      </Snackbar>
    </article>
  );
}
