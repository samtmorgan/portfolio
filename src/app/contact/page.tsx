'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../page.module.css';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useForm, Controller, Control } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CopyToClipboardButton } from '@/components/CopyToClipboardButton';
import { Send } from '@mui/icons-material';

const NEXT_PUBLIC_REACT_APP_SERVICE_ID = 'service_clznlur';
const NEXT_PUBLIC_REACT_APP_TEMPLATE_ID = 'contact_form';
const NEXT_PUBLIC_REACT_APP_USER_ID = 'KUcNfjVsQi3cwWtqZ';

interface data {
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

const FormTextField = ({
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
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
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
};

export default function ContactPage() {
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
	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	// const NEXT_PUBLIC_REACT_APP_SERVICE_ID: string =
	// 	process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID || '';
	// const NEXT_PUBLIC_REACT_APP_TEMPLATE_ID: string =
	// 	process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID || '';
	// const NEXT_PUBLIC_REACT_APP_USER_ID: string =
	// 	process.env.NEXT_PUBLIC_REACT_APP_USER_ID || '';

	const onSubmit = async (data: data) => {
		const { name, email, message } = data;
		// console.log({ name, email, subject, message });
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
				NEXT_PUBLIC_REACT_APP_USER_ID
			);
			setSubmitSuccess(true);
			reset();
		} catch (e) {
			setSubmitSuccess(false);
			console.log(e);
		} finally {
			setOpen(true);
		}
	};

	return (
		<Box className={styles.pageContainer}>
			<Box className={styles.contactFormPageContainer}>
				<Typography role="heading" variant="body1" gutterBottom>
					Want to connect? Send me a message!
				</Typography>
				<form
					role="form"
					data-testid="contactForm"
					onSubmit={handleSubmit(onSubmit)}
					style={{ width: '100%' }}
				>
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
						{/* <Controller
							name="message"
							control={control}
							render={({ field }) => (
								<TextField
									rows={4}
									size="small"
									multiline
									fullWidth
									error={!!errors.message}
									helperText={errors.message?.message}
									data-testid="name"
									label="Message"
									{...field}
								/>
							)}
						/> */}
						{/* <input type="text" name="contact_number" />
						<label>Message</label>
						<textarea
							id="w3review"
							name="w3review"
							rows={4}
							// cols={50}
						/> */}
						<Button
							startIcon={<Send />}
							fullWidth
							variant="outlined"
							type="submit"
						>
							Send
						</Button>
					</Box>
				</form>
				<Box sx={{ width: '100%' }}>
					<Typography role="heading" variant="body1" gutterBottom>
						Or send me an email
					</Typography>
					<CopyToClipboardButton
						resourceName="Email"
						resourceValue="samtmorgan01@gmail.com"
					/>
				</Box>
			</Box>
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
					{submitSuccess
						? 'Message sent successfully!'
						: 'Message failed to send!'}
				</Alert>
			</Snackbar>
		</Box>
	);
}
