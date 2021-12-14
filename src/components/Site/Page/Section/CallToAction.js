import { Link } from '@foundation/next';

import { PortableText } from '@shop/components/Sanity';

import { useLink } from '@app/hooks';

const CallToActionSection = ({ title, body, button }) => {
  const link = useLink(button ?? {});

  return (
    <section className="uk-section uk-padding-remove uk-background-muted">
      <div
        className="uk-container"
        data-uk-scrollspy="target: > div div; cls:uk-animation-slide-bottom-small; delay: 300;"
      >
        <div
          className="tw-element tw-call-action uk-padding-remove-horizontal"
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
        >
          <div className="call-content">
            <h2>{title}</h2>
            <PortableText blocks={body} />
          </div>
          {link.valid && (
            <div className="call-btn">
              <Link
                href={link.href}
                className="uk-button uk-button-default uk-button-medium uk-button-radius tw-hover"
              >
                <span className="tw-hover-inner">
                  <span>{link.label}</span>
                  <i className="ion-ios-arrow-thin-right" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
