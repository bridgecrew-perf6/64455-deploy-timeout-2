import { authHandler } from '@atelierfabien/next-auth/server';

const handler = authHandler();

export default (req, res) => {
  res.send({ type: typeof handler });
};
