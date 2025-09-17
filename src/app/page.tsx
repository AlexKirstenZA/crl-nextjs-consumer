import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-md">
      <div className="px-6 sm:px-0 min-h-screen flex flex-col items-center justify-center">
        <SearchForm
          heading="Dictionary search"
          buttonLabel="Search"
        >
          <p>Please enter a word below.</p>
        </SearchForm>
      </div>
    </div>
  );
}
