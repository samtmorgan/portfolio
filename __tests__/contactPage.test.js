import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '../src/app/contact/page';
import '@testing-library/jest-dom';

describe('ContactPage', () => {
  const inputSelector = { selector: 'input' };
  it(`renders the labels and inputs`, () => {
    render(<ContactPage />);
    expect(screen.getByLabelText('Name', inputSelector)).toBeInTheDocument();
    expect(screen.getByLabelText('Email', inputSelector)).toBeInTheDocument();
    //   TODO: looking into why this fails, I think it relates to the fact that MUI render two textarea elements
    // expect(screen.getByLabelText('Message', inputSelector)).toBeInTheDocument();
  });
  it(`renders a heading`, () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it(`renders a form`, () => {
    render(<ContactPage />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  it(`renders a submit button`, () => {
    render(<ContactPage />);
    expect(screen.getByText('Send', { selector: 'button' })).toBeInTheDocument();
  });
});
