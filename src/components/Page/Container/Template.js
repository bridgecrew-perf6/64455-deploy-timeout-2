// import { useMemo } from 'react';

// import types from '@shop/components/Page/Types';

const DefaultComponent = ({ children }) => (
  <div className="uk-padding">{children}</div>
);

// const Template = ({ type, children, ...props }) => {
//   const Component = useMemo(() => {
//     return types.get(type) ?? types.get('default') ?? DefaultComponent;
//   }, [type]);
//   return <Component {...props}>{children}</Component>;
// };

const Template = ({ children }) => {
  return (
    <DefaultComponent>
      <h1>Debugging</h1>
      {children}
    </DefaultComponent>
  );
};

export default Template;
