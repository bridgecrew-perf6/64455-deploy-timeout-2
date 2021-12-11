import groq from 'groq';

import { layoutResolvers } from '@base/config/layouts';

import { nodeCoreProjection } from '@base/sanity/queries';

layoutResolvers.set('activities', async (client, page, options) => {
  const { node, locale, defaultLocale } = options;

  page.nodes = await client.fetch(
    groq`*[_type == 'navigation.node' && _id == $id]{
    'nodes': nodes[]->{ 
      ${nodeCoreProjection},
      'item': item->{
        _id, _type, alias,
        'content': { ...i18n[$defaultLocale].content, ...i18n[$locale].content }{
          title, subtitle, intro
        },
        'image': images[0]
      }
    }
  }.nodes[]`,
    {
      id: node._id,
      locale,
      defaultLocale,
    }
  );
});

export { layoutResolvers };
