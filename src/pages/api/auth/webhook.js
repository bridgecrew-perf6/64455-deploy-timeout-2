import { webhookHandler } from '@atelierfabien/next-auth/server';

import { getClient } from '@atelierfabien/next-sanity/lib/server';

const handler = webhookHandler(getClient(true));

export default handler;
