import config from '@base/config/shop';

config.minVariants = 0;
config.hiddenVariantOptions = ['date'];

config.image = {
  ratio: '4:3',
  useItemRatio: true,
};

config.revalidation = {
  category: 60 * 60 * 24, // 24 hours
  product: 60 * 60 * 24, // 24 hours
};

export default config;
