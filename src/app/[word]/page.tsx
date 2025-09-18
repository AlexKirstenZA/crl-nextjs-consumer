import { getDictionaryEntries, NodeDictionaryEntry } from "@/lib/api/drupal";

interface WordInfoProps {
  params: {
    word?: string;
  }
};

export default async function WordInfo({
  params
}: WordInfoProps) {
  const { word } = await params;

  if (!word) {
    console.error('No word route parameter set')
    throw new Error('No word route parameter set.')
  }

  let results: NodeDictionaryEntry[] | undefined;
  let apiError = false;

  try {
    results = await getDictionaryEntries(word);
  } catch (error) {
    apiError = true;
  }

  let wordContent: NodeDictionaryEntry | undefined;
  if (results && results.length) {
    wordContent = results[0];
  }

  return (
    <div className="px-6 py-12 font-sans">
      {apiError ?
        <h1 className="text-4xl md:text-5xl font-bold">
          Sorry, an error has occurred please try again later.
        </h1>
      :
        <h1 className="text-4xl md:text-5xl font-bold">Results</h1>
      }
      {wordContent ?
        <>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            Definitions for the word <em>{wordContent.field_word}:</em>
          </h2>
          <ul className="mt-4">
            {wordContent.field_definitions.map((definition, index) => (
              <li key={index} className="mt-5">{definition}</li>
            ))}
          </ul>
        </>
      :
        <p className="mt-4">Sorry, no results found.</p>
      }
    </div>
  );
}
