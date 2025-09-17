'use client';

import { useState, ReactNode } from "react";

export interface SearchFormProps {
  heading?: string;
  buttonLabel: string;
  children: ReactNode;
};

const SearchForm = ({
  heading,
  buttonLabel,
  children
}: SearchFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
  };

  return (
    <div className="px-12 py-8 border rounded-xl border-solid border-tertiary">
      {heading &&
        <h1 className="font-sans text-4xl md:text-5xl font-bold">Word search</h1>
      }
      <div className="mt-2">
        {children}
      </div>
      <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4">
        <input
          aria-label="Enter your search term"
          className="p-2 rounded-md border border-solid border-tertiary"
          id="search-term"
          placeholder="Enter your search term"
          name="search-term"
          type="text"
          onChange={handleInputChange}
        />
        <button
          aria-label="Perform search"
          className="font-bold px-4 py-2 rounded-xl bg-tertiary/[0.7] cursor-pointer disabled:cursor-not-allowed"
          disabled={!inputValue.trim()}
          onClick={handleButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
