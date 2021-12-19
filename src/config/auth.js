import { configure } from '@atelierfabien/next-auth/server';

export default configure({
  referencedTypes: ['product', 'recipe', 'recipe.bundle'],
  signUp: {
    disabled: true,
    managed: true,
  },
});
