import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import SearchForm from './SearchForm'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  }),
}))

describe('SearchForm', () => {
  it('renders a heading', () => {
    render(
      <SearchForm heading="Test heading" buttonLabel="Search">
        <p>Test children content</p>
      </SearchForm>
    );

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test heading');
  });

  it('renders an input form element', () => {
    render(
      <SearchForm heading="Test heading" buttonLabel="Search">
        <p>Test children content</p>
      </SearchForm>
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-label', 'Enter your search term');
    expect(input).toHaveAttribute('id', 'search-term');
    expect(input).toHaveAttribute('name', 'search-term');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders a button', () => {
    render(
      <SearchForm heading="Test heading" buttonLabel="Search">
        <p>Test children content</p>
      </SearchForm>
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Perform search');
    expect(button).toHaveAttribute('disabled');
  })
})
