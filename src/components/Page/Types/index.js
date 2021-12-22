import types from '@base/components/Page/Types';

import Default from '@shop/components/Page/Types/Default';

import About from '@shop/components/Page/Types/About';
import Account from '@shop/components/Page/Types/Account';
import Activities from '@shop/components/Page/Types/Activities';
import Contact from '@shop/components/Page/Types/Contact';
import FAQ from '@shop/components/Page/Types/FAQ';
import Home from '@shop/components/Page/Types/Home';
import Plain from '@shop/components/Page/Types/Plain';
import ShopOverview from '@shop/components/Page/Types/ShopOverview';
import Tips from '@shop/components/Page/Types/Tips';

types.set('default', Default);

types.set('home', Home);
types.set('about', About);
types.set('account', Account);
types.set('activities', Activities);
types.set('activity', Default);
types.set('presentation', Default);
types.set('plain', Plain);
types.set('tips', Tips);
types.set('faq', FAQ);
types.set('contact', Contact);

types.set('shopOverview', ShopOverview);

export default types;
