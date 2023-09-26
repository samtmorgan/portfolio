'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../page.module.css';
import { Button, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface data {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const defaultValues = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

const schema = yup
	.object({
		name: yup.string().max(50).required(),
		email: yup.string().email().required(),
		subject: yup.string().max(100),
		message: yup.string().max(500).required(),
	})
	.required();

const TextInput = ({
	label,
	error,
	errorMessage,
	...field
}: {
	label: string;
	error: boolean;
	errorMessage: string | undefined;
	field: object;
}) => (
	<TextField
		fullWidth
		error={error}
		helperText={errorMessage}
		data-testid="name"
		label={label}
		{...field}
	/>
);

const FormTextField = ({
	control,
	errors,
	name,
	label,
}: {
	control: object;
	errors: object;
	name: string;
	label: string;
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					fullWidth
					error={!!errors.name}
					helperText={errors.name?.message}
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

	const NEXT_PUBLIC_REACT_APP_SERVICE_ID: string =
		process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID || '';
	const NEXT_PUBLIC_REACT_APP_TEMPLATE_ID: string =
		process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID || '';
	const NEXT_PUBLIC_REACT_APP_USER_ID: string =
		process.env.NEXT_PUBLIC_REACT_APP_USER_ID || '';

	const onSubmit = async (data: data) => {
		const { name, email, subject, message } = data;
		try {
			const templateParams = {
				name,
				email,
				subject,
				message,
			};
			await emailjs.send(
				NEXT_PUBLIC_REACT_APP_SERVICE_ID,
				NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
				templateParams,
				NEXT_PUBLIC_REACT_APP_USER_ID
			);
			reset();
		} catch (e) {
			console.log(e);
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
							control={control}
							errors={errors}
							name="name"
							label="Name"
						/>
						<FormTextField
							control={control}
							errors={errors}
							name="email"
							label="Email"
						/>
						<FormTextField
							control={control}
							errors={errors}
							name="subject"
							label="Subject"
						/>
						<FormTextField
							control={control}
							errors={errors}
							name="message"
							label="Message"
						/>
						<Button type="submit">Submit</Button>
					</Box>
				</form>
			</Box>
		</Box>
		// </Container>
	);
}
