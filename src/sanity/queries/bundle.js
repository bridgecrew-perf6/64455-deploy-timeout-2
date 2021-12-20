import groq from 'groq';

import { coreProjection } from '@shop/sanity/queries';

import { documentsProjection } from '@atelierfabien/next-auth/account';

export const bundlePredicate = groq`
  _type == 'recipe.bundle' && _id in (*[_type == 'user' && _id == $userId][].references[]._ref)
`;

export const bundleProjection = groq`
  ${coreProjection}, name, type, description,
  'images': coalesce(images, []),
  type == 'recipes' => {
    recipes[]->{ ${documentsProjection} }
  },
  type == 'groups' => {
    'groups': groups[]{
      ...,
      items[]->{ ${documentsProjection} }
    }
  },
  type == 'days' => {
    'items': days[]{
      ...,
      breakfast->{ ${documentsProjection} },
      lunch->{ ${documentsProjection} },
      dinner->{ ${documentsProjection} }, 
      starter->{ ${documentsProjection} },
      desert->{ ${documentsProjection} },
      side->{ ${documentsProjection} },
      snack->{ ${documentsProjection} }
    }
  }`;
