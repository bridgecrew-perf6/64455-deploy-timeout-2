import { useConfig } from '@foundation/next';

const NewsletterSection = () => {
  const config = useConfig('config');

  if (config('disableEmailSubscription')) return null;

  return (
    <section
      className="uk-section uk-section-normal uk-light"
      style={{ backgroundColor: '#151515' }}
    >
      <div className="uk-container uk-container-small">
        <div className="tw-element tw-call-action uk-padding-remove">
          <div className="call-content">
            <h2>Ontvang de nieuwsbrief</h2>
            <p>boordevol info, tips, nieuws en heerlijke recepten.</p>
          </div>
          <div className="call-btn">
            <div className="uk-inline">
              <a className="uk-form-icon uk-form-icon-flip" href="">
                <i className="ion-android-send" />
              </a>
              <input
                type="text"
                placeholder="je emailadres"
                className="uk-input"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
