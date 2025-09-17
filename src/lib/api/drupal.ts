import { NextDrupal, DrupalNode } from "next-drupal";

export interface NodeDictionaryEntry extends DrupalNode {
  field_word: string;
  field_definitions: string[];
}

export const queryDictionaryEntries = async (
  searchParam: string
): Promise<NodeDictionaryEntry[]> => {
  const drupal = new NextDrupal('http://crl-drupal-json-api.ddev.site');

  const entries = await drupal.getResourceCollection('node--dictionary_entry', {
    params: {
      'filter[field_word]': searchParam,
    },
  }) as NodeDictionaryEntry[]

  return entries;
};
