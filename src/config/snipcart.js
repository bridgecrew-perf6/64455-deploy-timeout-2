import groq from 'groq';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

import { processItems } from '@shop/sanity/server/snipcart';

import { queries } from '@atelierfabien/next-auth/server';

const { getUserByEmailQuery } = queries;

const client = getClient(true); // private client

const itemsQuery = groq`*[_type == 'product' && ($id == master.id || $id in variants[].id)]`;

export const handleUpdate = async (eventName, payload, _handler) => {
  console.log('Handling Snipcart Update: %s', eventName);

  const { email, shippingAddress, items = [], paymentStatus } = payload.content;

  // console.log(payload.content);

  if (email && items.length > 0 && paymentStatus === 'Paid') {
    console.log({ email, shippingAddress, items, paymentStatus });

    const user = await client.fetch(getUserByEmailQuery, { email });

    console.log(user);

    await processItems(
      items,
      async (doc, item) => {
        console.log(item.id, doc);
      },
      {
        projection: `_id, _type, digitalGoods`,
      }
    );
  }

  return false;
};
