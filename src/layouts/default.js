import { useMemo } from 'react';
import { usePageOptions } from '@foundation/next';
import { get } from '@foundation/lib/util';

import CommonHeading from '@shop/components/Common/Heading';

const Noop = () => null;

const DefaultLayout = ({ children, heading }) => {
  const options = usePageOptions();

  const Heading = useMemo(() => {
    const Component = get(options, ['heading', 'component'], heading);
    return typeof Component === 'function'
      ? Component
      : Component === false
      ? Noop
      : CommonHeading;
  }, [heading, options]);

  return (
    <div uk-height-viewport="expand: true">
      <Heading />
      {children}
    </div>
  );
};

export default DefaultLayout;
