import { useMemo } from 'react';

// import types from '@shop/components/Page/Types';

const DefaultComponent = ({ children }) => <>{children}</>;

const Template = ({ type, children, ...props }) => {
  const Component = useMemo(() => {
    return DefaultComponent;
    // return types.get(type) ?? types.get('default');
  }, [type]);

  return <Component {...props}>{children}</Component>;
};

export default Template;
