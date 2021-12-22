import types from '@shop/components/Page/Types';

const DefaultComponent = ({ children }) => <>{children}</>;

const Template = ({ type, children, ...props }) => {
  const Component = types.get(type) ?? types.get('default') ?? DefaultComponent;
  return <Component {...props}>{children}</Component>;
};

export default Template;
