import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import HomeWrapper from './page';
import { Tabs } from '../types.ts';

jest.mock('next/navigation');

describe('Home', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ push: () => {} });

    render(<HomeWrapper tab={Tabs.Blog} content={<div />} route="" />);
  });

  it('renders the main heading', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('beandip games');
  });

  it('renders the company logo', () => {
    expect(screen.queryByAltText('beandip games logo')).toBeInTheDocument();
  });
});
