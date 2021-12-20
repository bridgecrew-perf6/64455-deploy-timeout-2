/* eslint-disable no-console */

import { processItems } from '@shop/sanity/server/snipcart';

import {
  ensureUser,
  ensureUserReferences,
} from '@atelierfabien/next-auth/user';

const isDevelopment = process.env.NODE_ENV === 'development';

export const handleUpdate = async (_eventName, payload) => {
  const { email, shippingAddress, items = [], paymentStatus } = payload.content;

  if (email && items.length > 0 && paymentStatus === 'Paid') {
    const referenceIds = [];

    const user = await ensureUser(email, {
      name: shippingAddress.fullName,
      profile: {
        firstName: shippingAddress.firstName,
        lastName: shippingAddress.name,
      },
    });

    await processItems(
      items,
      doc => {
        referenceIds.push(doc._id); // add product itself
        if (Array.isArray(doc.digitalGoods)) {
          referenceIds.push(...doc.digitalGoods);
        }
      },
      {
        projection: `_id, 'digitalGoods': digitalGoods[]._ref`,
      }
    );

    const references = await ensureUserReferences(user, referenceIds);

    if (isDevelopment) {
      console.log(JSON.stringify(user, null, 4));
      console.log(JSON.stringify(references, null, 4));
    }
  }

  return true;
};
