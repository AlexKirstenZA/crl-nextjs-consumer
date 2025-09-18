'use client';

import { useState, ReactNode } from "react";
import { useRouter } from 'next/navigation'

import { getDictionaryEntries, NodeDictionaryEntry } from "@/lib/api/drupal";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const performApiSearch = async () => {
    setIsLoading(true);
    setError(null);

    let results: NodeDictionaryEntry[] | undefined;

    try {
      results = await getDictionaryEntries(inputValue.trim());
    } catch (error) {
      setError('An error occurred, please try again later');
    }

    setIsLoading(false);

    if (results && results.length === 0) {
      setError('No dictionary entries found. Please try another word.');
    } else {
      router.push(`/${inputValue.trim()}`)
    }
  };

  const handleButtonClick = async () => {
    await performApiSearch();
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      await performApiSearch();
    }
  };

  return (
    <div className="relative px-12 py-8 font-sans border rounded-xl border-solid border-tertiary">
      {heading &&
        <h1 className="text-4xl md:text-5xl font-bold">{heading}</h1>
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
          onKeyDown={(e) => handleKeyPress(e)}
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
      {error &&
        <span className="block mt-4 font-bold text-error">{error}</span>
      }
      {isLoading &&
        <span className="absolute right-2 bottom-2 block mt-4 font-bold">Searching...</span>
      }
    </div>
  );
};

export default SearchForm;
