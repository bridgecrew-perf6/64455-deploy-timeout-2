const SitePageSectionSlideshow = () => (
  <section className="tw-slider uk-light">
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      uk-slideshow="animation: slide; ratio: 7:3"
    >
      <ul className="uk-slideshow-items">
        <li>
          <div
            className="uk-height-1-1 uk-background-cover uk-light"
            data-uk-img="/dev/assets/images/images-p/home-slide2.jpg"
            data-uk-parallax="bgy: -200"
            data-overlay="0.4"
          >
            <div className="uk-position-center uk-position-small uk-text-center">
              <div className="slider-content">
                <div
                  className="tw-element uk-text-center tw-heading full"
                  data-uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-medium; delay: 400;"
                >
                  <h4 className="tw-sub-title">Welkom bij</h4>
                  <h1>Voeding in balans</h1>
                  <a
                    href="TODO.html"
                    className="
            uk-button uk-button-default uk-button-small uk-button-radius
            tw-hover
          "
                  >
                    <span className="tw-hover-inner">
                      <span>Contacteer mij</span>
                      <i className="ion-ios-arrow-thin-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div
            className="uk-height-1-1 uk-background-cover uk-light"
            data-uk-img="/dev/assets/images/images-p/home-slide1.jpg"
            data-uk-parallax="bgy: -200"
            data-overlay="0.4"
          >
            <div className="uk-position-center uk-position-small uk-text-center">
              <div className="slider-content">
                <div
                  className="tw-element uk-text-center tw-heading full"
                  data-uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-medium; delay: 400;"
                >
                  <h4 className="tw-sub-title">Ben je klaar</h4>
                  <h1>voor een nieuwe start?</h1>
                  <a
                    href="TODO.html"
                    className="
            uk-button uk-button-default uk-button-small uk-button-radius
            tw-hover
          "
                  >
                    <span className="tw-hover-inner">
                      <span>Contacteer mij</span>
                      <i className="ion-ios-arrow-thin-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div
            className="uk-height-1-1 uk-background-cover uk-light"
            data-uk-img="/dev/assets/images/images-p/home-slide3.jpg"
            data-uk-parallax="bgy: -200"
            data-overlay="0.4"
          >
            <div className="uk-position-center uk-position-small uk-text-center">
              <div className="slider-content">
                <div
                  className="tw-element uk-text-center tw-heading full"
                  data-uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-medium; delay: 400;"
                >
                  <h4 className="tw-sub-title">Samen investeren we</h4>
                  <h1>in een gezond lichaam!</h1>
                  <a
                    href="TODO.html"
                    className="
            uk-button uk-button-default uk-button-small uk-button-radius
            tw-hover
          "
                  >
                    <span className="tw-hover-inner">
                      <span>Contacteer mij</span>
                      <i className="ion-ios-arrow-thin-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous="true"
        uk-slideshow-item="previous"
      />
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next="true"
        uk-slideshow-item="next"
      />
    </div>
  </section>
);

export default SitePageSectionSlideshow;
