import SiteHeader from '@shop/components/Site/Header';

const Page = () => (
  <div className="main-container">
    <SiteHeader title="Contact" image="contact2-multi.jpg" />

    <section className="uk-section uk-background-cover">
      <div className="uk-container">
        <div
          className="uk-child-width-expand@s uk-text-center"
          data-uk-grid
          data-uk-scrollspy="target: > div > .tw-box; cls:uk-animation-slide-bottom-medium; delay: 300;"
        >
          <div>
            <div className="tw-element tw-box custom-typography uk-margin-bottom">
              <i className="et-map-pin uk-border-circle layout-2" />
              <h4>Contact</h4>
              <p className="description">
                Petra Vaes
                <br />
                Lic. Voeding- en dieetleer
              </p>
            </div>
          </div>
          <div>
            <div className="tw-element tw-box custom-typography uk-margin-bottom">
              <i className="et-map-pin uk-border-circle layout-2" />
              <h4>Adres</h4>
              <p className="description">
                Huttelaan 13
                <br />
                3001 Heverlee
              </p>
            </div>
          </div>
          <div>
            <div
              className="
            tw-element tw-box
            custom-typography
            uk-margin-remove-top uk-margin-bottom
          "
            >
              <i className="et-phone uk-border-circle layout-2" />
              <h4>Telefoon</h4>
              <p className="description">
                016 22 85 46
                <br />
                0484 07 03 49
              </p>
            </div>
          </div>
          <div>
            <div className="tw-element tw-box custom-typography uk-margin-remove-top">
              <i className="et-envelope uk-border-circle layout-2" />
              <h4>Email</h4>
              <p className="description">
                info@voedinginbalans.be
                <br />
                petra.vaes@voedinginbalans.be
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="uk-section uk-background-cover uk-text-center"
      data-uk-parallax="bgy: -200"
      style={{
        backgroundColor: '#f7f7f7',
        backgroundImage: 'url(/dev/assets/images/images-p/background-tea.jpg)',
      }}
    >
      <div className="uk-container">
        <div className="tw-element tw-heading uk-text-center uk-dark">
          <h4>Samen investeren we in een gezond en fit lichaam</h4>
        </div>

        <div
          className="
        tw-element tw-carousel-post
        uk-text-center
        style-2
        tw-posts
        uk-text-center
      "
        >
          <div
            className="owl-carousel owl-theme"
            data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium"
          >
            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Praktijk</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Consultaties</a>
                </h3>
                <p>
                  dinsdag: 9u – 13u
                  <br />
                  woensdag: 8.30u – 13u en 14u – 16u <br />
                  donderdag: 16.30u – 20u <br />
                  vrijdag: 9u – 12.30u en 13.30u – 16u
                </p>
              </div>
            </div>

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Online</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Afspraak maken</a>
                </h3>
                <p>
                  Een afspraak maken <br />
                  kan eenvoudig en snel via:
                </p>
                <a
                  href="https://ambrosiapro.be/patient/agenda/voeding-in-balans"
                  className="
                uk-button
                uk-button-default
                uk-button-small
                uk-button-radius
                tw-hover
              "
                >
                  <span className="tw-hover-inner">
                    <span>Online agenda</span>
                    <i className="ion-ios-arrow-thin-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="
    uk-section
    uk-section-xlarge
    uk-padding-remove-top
    uk-margin-large-top
    uk-padding-remove-vertical
    uk-margin-bottom
  "
    >
      <div className="uk-container">
        <div className="tw-element uk-text-center tw-heading">
          <h4>Moeilijke bereikbaarheid door wegenwerken</h4>
          <p>
            De wegenwerken in de Huttelaan lopen nog tot eind november, omrijden
            via de Leopold III-laan en vervolgens de Prosperdreef nemen is aan
            te raden. Maar te voet of met de fiets blijf ik de volgende maanden
            het gemakkelijkst bereikbaar.
            <br />
            <br />
          </p>
        </div>

        <div
          className="
        tw-element
        uk-text-center
        uk-margin-remove-top
        uk-padding-remove-vertical
        uk-margin-bottom
      "
        >
          <img src="/dev/assets/images/images-p/map-grey.jpg" alt="" />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  </div>
);

export default Page;
