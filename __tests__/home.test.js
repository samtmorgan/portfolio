import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom';

describe('Home', () => {
  const nameHeading = 'Sam T Morgan';

  it(`renders a heading ${nameHeading}`, () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: nameHeading,
    });

    expect(heading).toBeInTheDocument();
  });
  //   it(`renders a heading ${titleHeading}`, () => {
  //     render(<Home />);
  //     const heading = screen.getByRole('heading', {
  //       name: titleHeading,
  //     });

  // expect(heading).toBeInTheDocument();
  //   });
});
