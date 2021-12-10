const config = require('@atelierfabien/next-foundation/config/i18n');

module.exports = config({
  locales: ['nl'],
  defaultLocale: 'nl',
  pages: {
    '*': ['common', 'app', 'lexicons', 'shop', 'auth'],
  },
});
