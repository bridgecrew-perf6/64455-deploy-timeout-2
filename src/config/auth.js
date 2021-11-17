import { configure } from '@atelierfabien/next-auth';

export default configure({
  signUp: {
    disabled: false,
    managed: true,
  },
});
