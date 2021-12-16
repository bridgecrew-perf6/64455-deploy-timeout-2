import { configure } from '@atelierfabien/next-auth/server';

export default configure({
  signUp: {
    disabled: true,
    managed: true,
  },
});
