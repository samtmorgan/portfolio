import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '../src/app/contact/page';
import '@testing-library/jest-dom';

describe('Home', () => {
	// const nameHeading = 'Sam T Morgan';
	// const titleHeading = 'Full Stack Developer';
	const inputSelector = { selector: 'input' };
	it(`renders the labels and inputs`, () => {
		render(<ContactPage />);
		expect(
			screen.getByLabelText('Name', inputSelector)
		).toBeInTheDocument();
		expect(
			screen.getByLabelText('Email', inputSelector)
		).toBeInTheDocument();
		expect(
			screen.getByLabelText('Subject', inputSelector)
		).toBeInTheDocument();
		expect(
			screen.getByLabelText('Message', inputSelector)
		).toBeInTheDocument();
	});
	it(`renders a heading`, () => {
		render(<ContactPage />);
		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
	it(`renders a form`, () => {
		render(<ContactPage />);
		expect(screen.getByRole('form')).toBeInTheDocument();
	});
	it(`renders a submit button`, () => {
		render(<ContactPage />);
		expect(
			screen.getByText('Send', { selector: 'button' })
		).toBeInTheDocument();
	});
});
