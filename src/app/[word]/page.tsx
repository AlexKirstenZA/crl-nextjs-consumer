import { queryDictionaryEntries, NodeDictionaryEntry } from "@/lib/api/drupal";

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
    results = await queryDictionaryEntries(word);
  } catch (error) {
    apiError = true;
  }

  let wordContent: NodeDictionaryEntry | undefined;
  if (results && results.length) {
    wordContent = results[0];
  }

  return (
    <div className="px-6 py-12">
      {apiError ?
        <h1 className="text-4xl md:text-5xl font-bold">
          Sorry, an error has occurred please try again later.
        </h1>
      :
        <h1 className="text-4xl md:text-5xl font-bold">
          Results for &quot;{word}&quot;
        </h1>
      }
      {wordContent ?
        <ul className="mt-4">
          {wordContent.field_definitions.map((definition, index) => (
            <li key={index} className="mt-5">{definition}</li>
          ))}
        </ul>
      :
        <p className="mt-4">Sorry, no results found.</p>
      }
    </div>
  );
}
