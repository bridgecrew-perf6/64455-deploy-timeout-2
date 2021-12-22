import { usePageOptions } from '@foundation/next';

import Template from '@shop/components/Page/Container/Template';

const Container = ({ children, pageType, ...props }) => {
  const options = usePageOptions();

  return (
    <Template type={pageType ?? options.pageType} {...props}>
      {children}
    </Template>
  );
};

export default Container;
