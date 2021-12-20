import { isBlank } from '@foundation/lib/util';

const BundleSection = ({ section, children }) => {
  const { type, title, description } = section;
  return (
    <div
      className="tm-account-section uk-margin-large-bottom"
      data-bundle-type={type}
    >
      <div>
        <h3 className="uk-heading-divider uk-margin-bottom">{title}</h3>
        {!isBlank(description) && (
          <p className="uk-margin-bottom">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default BundleSection;
