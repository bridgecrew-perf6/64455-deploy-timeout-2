import { useConfig } from '@foundation/next';
import { useContact, useAddress } from '@app/hooks';

import Social from '@shop/components/Common/Social';

const CommonFooter = () => {
  const [address, location] = useAddress();
  const contact = useContact();
  const config = useConfig('base');

  const phone = contact('phone');
  const email = contact('email');

  return (
    <footer className="tm-page-footer uk-section uk-section-secondary uk-padding-remove-vertical uk-light">
      <div className="uk-container">
        <div className="bottom-area">
          <div className="uk-container">
            <div
              className="uk-child-width-expand@m uk-child-width-1-1@s"
              uk-grid="true"
              uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 200;"
            >
              <div>
                <div className="tw-element tw-box layout-2 custom-typography">
                  <i className="et-map-pin uk-border-circle layout-2" />
                  <h4>{address('name')}</h4>
                  <p className="description">{location.join(' - ')}</p>
                </div>
              </div>
              <div>
                <div className="tw-element tw-box layout-2 custom-typography">
                  <i className="et-phone uk-border-circle layout-2" />
                  <h4>Telefoon</h4>
                  <p className="description">
                    <a href={`tel:${phone}`}>{phone}</a>
                  </p>
                </div>
              </div>
              <div>
                <div className="tw-element tw-box layout-2 custom-typography">
                  <i className="et-envelope uk-border-circle layout-2" />
                  <h4>E-Mail</h4>
                  <p className="description">
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-area">
          <div className="uk-container">
            <div
              className="uk-flex-middle uk-child-width-1-1 uk-child-width-expand@m"
              uk-grid="true"
            >
              <div className="copyright">© {config('name')}</div>
              <div className="uk-text-center">
                <Social className="uk-flex-center" />
              </div>
              <div className="uk-text-right">
                <a uk-scroll="true">
                  Naar top &nbsp;&nbsp;
                  <i className="ion-ios-arrow-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CommonFooter;
