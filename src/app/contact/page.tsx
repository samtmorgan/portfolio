'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../page.module.css';
import { Button, Input } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import emailjs from 'emailjs-com';

interface data {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactPage() {
	const { control, handleSubmit, reset } = useForm();
	// const onSubmit = (data: object) => console.log(data);

	// const REACT_APP_SERVICE_ID: string = process.env.REACT_APP_SERVICE_ID;
	// const REACT_APP_TEMPLATE_ID: string = process.env.REACT_APP_TEMPLATE_ID;
	// const REACT_APP_USER_ID: string = process.env.REACT_APP_USER_ID;

	const NEXT_PUBLIC_REACT_APP_SERVICE_ID: string =
		process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID || '';
	const NEXT_PUBLIC_REACT_APP_TEMPLATE_ID: string =
		process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID || '';
	const NEXT_PUBLIC_REACT_APP_USER_ID: string =
		process.env.NEXT_PUBLIC_REACT_APP_USER_ID || '';

	// console.log({
	// 	REACT_APP_SERVICE_ID,
	// 	REACT_APP_TEMPLATE_ID,
	// 	REACT_APP_USER_ID,
	// });

	console.log({
		NEXT_PUBLIC_REACT_APP_SERVICE_ID,
		NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
		NEXT_PUBLIC_REACT_APP_USER_ID,
	});

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
				// process.env.REACT_APP_SERVICE_ID,
				// process.env.REACT_APP_TEMPLATE_ID,
				// templateParams,
				// process.env.REACT_APP_USER_ID
				// REACT_APP_SERVICE_ID,
				// REACT_APP_TEMPLATE_ID,
				// templateParams,
				// REACT_APP_USER_ID,
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
		<Container className={styles.container}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="body1" gutterBottom>
					ContactPage
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Controller
							name="name"
							control={control}
							render={({ field }) => <Input {...field} />}
						/>
						<Controller
							name="email"
							control={control}
							render={({ field }) => <Input {...field} />}
						/>
						<Controller
							name="subject"
							control={control}
							render={({ field }) => <Input {...field} />}
						/>
						<Controller
							name="message"
							control={control}
							render={({ field }) => <Input {...field} />}
						/>
						{/* <input type="submit" /> */}
						{/* <Button onClick={(e: React.MouseEvent<HTMLElement>)=> handleSubmit(e)}>Submit</Button> */}
						<Button type="submit">Submit</Button>
					</Box>
				</form>
			</Box>
		</Container>
	);
}
