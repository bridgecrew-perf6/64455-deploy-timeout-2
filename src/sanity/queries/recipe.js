import groq from 'groq';

import { propertyValueProjection } from '@shop/sanity/queries';

export const recipePredicate = groq`_type == 'recipe'`;

export const publicRecipePredicate = groq`${recipePredicate} &&
  (_id in *[_type == 'page' && references($id)].i18n[$defaultLocale].regions[].item.references[]._ref)`;

export const recipeProjection = groq`
  ..., 
  'designations': coalesce(designations[]->{ ${propertyValueProjection} }, []),
  'tags': coalesce(tags[]->{ ${propertyValueProjection} }, [])
`;
