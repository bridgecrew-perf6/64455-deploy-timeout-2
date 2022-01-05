import configure from '@atelierfabien/next-auth/configure';

import { joinUrl } from '@atelierfabien/next-foundation/lib/util';

export default configure({
  referencedTypes: ['product', 'recipe', 'recipe.bundle'],
  signUp: {
    disabled: true,
    managed: true,
  },
  callbacks: {
    async redirect(url, baseUrl) {
      return joinUrl(baseUrl, '/account');
    },
  },
});
