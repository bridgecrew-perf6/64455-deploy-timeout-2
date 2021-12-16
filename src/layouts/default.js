const DefaultLayout = ({ children }) => {
  return (
    <div className="uk-flex uk-flex-column" uk-height-viewport="expand: true">
      {children}
    </div>
  );
};

export default DefaultLayout;
