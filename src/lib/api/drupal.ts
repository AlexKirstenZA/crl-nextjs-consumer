import { JsonApiResource, NextDrupal } from "next-drupal";

export const queryDictionaryEntries = async (
  searchParam: string
): Promise<JsonApiResource[]> => {
  const drupal = new NextDrupal('http://crl-drupal-json-api.ddev.site');

  const entries = await drupal.getResourceCollection('node--dictionary_entry', {
    params: {
      'fields[node--dictionary_entry]': 'field_word,field_definitions',
      'filter[field_word]': searchParam,
    },
  })

  return entries;
};
