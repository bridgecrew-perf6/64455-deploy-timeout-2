const Page = () => (
  <div className="main-container">
    <section className="tw-slider uk-light">
      <div className="owl-carousel owl-theme">
        <div
          className="slider-item"
          data-uk-parallax="bgy: -200"
          data-overlay="0.4"
          style={{
            backgroundColor: '#151515',
            backgroundImage: 'url(/dev/assets/images/images-p/home-slide2.jpg)',
          }}
        >
          <div className="slider-content">
            <div
              className="tw-element uk-text-center tw-heading full"
              data-uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-medium; delay: 400;"
            >
              <h4 className="tw-sub-title">Welkom bij</h4>
              <h1>Voeding in balans</h1>
              <a
                href="contact.html"
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
        <div
          className="slider-item"
          data-uk-parallax="bgy: -200"
          data-overlay="0.4"
          style={{
            backgroundColor: '#151515',
            backgroundImage: 'url(/dev/assets/images/images-p/home-slide1.jpg)',
          }}
        >
          <div className="slider-content">
            <div
              className="tw-element uk-text-center tw-heading full"
              data-uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-medium; delay: 400;"
            >
              <h4 className="tw-sub-title">Ben je klaar</h4>
              <h1>voor een nieuwe start?</h1>
              <a
                href="contact.html"
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
        <div
          className="slider-item"
          data-uk-parallax="bgy: -200"
          data-overlay="0.4"
          style={{
            backgroundColor: '#151515',
            backgroundImage: 'url(/dev/assets/images/images-p/home-slide3.jpg)',
          }}
        >
          <div className="slider-content">
            <div
              className="tw-element uk-text-center tw-heading full"
              data-uk-scrollspy="target: > *; cls:uk-animation-slide-bottom-medium; delay: 400;"
            >
              <h4 className="tw-sub-title">Samen investeren we</h4>
              <h1>in een gezond lichaam!</h1>
              <a
                href="contact.html"
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
    </section>

    <section className="uk-section uk-padding-remove-top uk-margin-top-minus">
      <div className="uk-container">
        <div
          className="uk-child-width-1-2@s uk-grid-match uk-grid-collapse"
          data-uk-grid
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
        >
          <div
            className="uk-padding-xlarge uk-light uk-background-cover"
            style={{
              backgroundImage:
                'url(/dev/assets/images/images-p/home-over-petra-meta.jpg)',
              minHeight: '400px',
            }}
          />

          <div
            className="uk-padding-xlarge"
            style={{ backgroundColor: '#f7f7f7' }}
          >
            <div className="tw-element tw-box">
              <h4 className="tw-sub-title">Over Petra</h4>
              <h2 className="uk-text-uppercase">
                Gezonder eten met raad en daad!
              </h2>
              <p>
                Voeding in balans is er voor iedereen die een optimaal gewicht
                wenst te bereiken en te behouden. Dankzij jouw voeding in balans
                blijf je energiek en fit en ben je gezondheidsklachten een
                stapje voor!
              </p>

              <a
                href="#"
                className="
                  uk-button
                  uk-button-default
                  uk-button-small
                  uk-button-silver
                  uk-button-radius
                  tw-hover
                "
              >
                <span className="tw-hover-inner">
                  <span>Lees verder</span>
                  <i className="ion-ios-arrow-thin-right" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            uk-child-width-1-2@s
            uk-margin-remove-top
            uk-grid-match
            uk-grid-collapse
          "
          data-uk-grid
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
        >
          <div
            className="uk-padding-xlarge tw-tablet-margin"
            style={{ backgroundColor: '#f7f7f7' }}
          >
            <div className="tw-element tw-box">
              <h4 className="tw-sub-title">Aanbod</h4>
              <h2 className="uk-text-uppercase">
                Waarvoor kan je bij Petra terecht?
              </h2>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra person inceptos himenaeos mauris in erat proin
                condimentum fermentum nunc etiam pharetra erat fermentu feugiat
                velit mauris.
              </p>
              <a
                href="aanbod.html"
                className="
                  uk-button
                  uk-button-default
                  uk-button-small
                  uk-button-silver
                  uk-button-radius
                  tw-hover
                "
              >
                <span className="tw-hover-inner">
                  <span>Meer info</span>
                  <i className="ion-ios-arrow-thin-right" />
                </span>
              </a>
            </div>
          </div>

          <div
            className="uk-padding-xlarge uk-light uk-background-cover"
            style={{
              backgroundImage:
                'url(/dev/assets/images/images-p/home-aanbod-meta2.jpg)',
              minHeight: '400px',
            }}
          />
        </div>
      </div>
    </section>

    <section className="uk-section uk-background-muted">
      <div className="uk-container">
        <div className="tw-element tw-heading uk-text-center">
          <h3>Shop</h3>
          <p>
            In de shop van 'Voeding in balans' kan je voortaan terecht voor
            lekkere receptenbundels voor een suikervrij ontbijt, een gezonde
            lunch en een heerlijk diner. Laat je verleiden door deze
            verrassende, kleurrijke recepten, boordevol vitamines en mineralen.
          </p>
        </div>

        <div className="tw-element tw-carousel-post tw-posts">
          <div
            className="owl-carousel owl-theme"
            data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium; delay: 350;"
          >
            <div className="post-item">
              <div className="entry-media" data-uk-lightbox>
                <a
                  href="/dev/assets/images/images-p/home-new-suikerstop.jpg"
                  className="tw-image-hover"
                  title="Closeup of the woman's hand wearing beautiful rings"
                >
                  <img
                    src="/dev/assets/images/images-p/home-new-suikerstop.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-content">
                <div className="tw-meta">Groepssessies</div>
                <h3 className="post-title">
                  <a href="#">Suikerstop!</a>
                </h3>
                <div className="tw-meta">
                  <a href="#">Startdag 10 december 2021</a>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="entry-media" data-uk-lightbox>
                <a
                  href="/dev/assets/images/images-p/home-new-suikerstop2.jpg"
                  className="tw-image-hover"
                  title="Closeup of the woman's hand wearing beautiful rings"
                >
                  <img
                    src="/dev/assets/images/images-p/home-new-suikerstop2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-content">
                <div className="tw-meta">Groepssessies</div>
                <h3 className="post-title">
                  <a href="#">Suikerstop 2.0!</a>
                </h3>
                <div className="tw-meta">
                  <a href="#">Startdag 5 januari 2022</a>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="entry-media" data-uk-lightbox>
                <a
                  href="/dev/assets/images/images-p/home-new-burgers.jpg"
                  className="tw-image-hover"
                  title="Young woman relaxing at home and reading a book"
                >
                  <img
                    src="/dev/assets/images/images-p/home-new-burgers.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-content">
                <div className="tw-meta">Kookworkshop</div>
                <h3 className="post-title">
                  <a href="#">Vegetarische burgers</a>
                </h3>
                <div className="tw-meta">
                  <a href="#">7 december 2021</a>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="entry-media" data-uk-lightbox>
                <a
                  href="/dev/assets/images/images-p/home-new-thermomix.jpg"
                  className="tw-image-hover"
                  title="Axiom Essential Watch auctor ornare odio sed non"
                >
                  <img
                    src="/dev/assets/images/images-p/home-new-thermomix.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-content">
                <div className="tw-meta">Demonstratie</div>
                <h3 className="post-title">
                  <a href="#">Thermomix-demo</a>
                </h3>
                <div className="tw-meta">
                  <a href="#">11 december 2021</a>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="entry-media" data-uk-lightbox>
                <a
                  href="/dev/assets/images/images-p/home-new-soepen2.jpg"
                  className="tw-image-hover"
                  title="Alud. Winter Magazine Cover amet nibh vulputate cursus"
                >
                  <img
                    src="/dev/assets/images/images-p/home-new-soepen2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Kookworkshop</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Winterse soepen</a>
                </h3>
                <div className="tw-meta">
                  <a href="#">29 december 2021</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-text-center">
          <div style={{ height: '100px' }} />
          <a
            className="
              uk-button
              uk-button-radius
              uk-button-silver
              uk-button-default
              uk-button-small
              tw-hover
            "
          >
            <span className="tw-hover-inner">
              <span>Bezoek de shop</span>
              <i className="ion-ios-arrow-thin-right" />
            </span>
          </a>
        </div>
      </div>
    </section>

    <section
      className="uk-section uk-section-large uk-light"
      data-uk-parallax="bgy: -200"
      data-overlay="0.6"
      style={{
        backgroundColor: '#151515',
        backgroundImage:
          'url(/dev/assets/images/images-p/background-stone-yellow.jpg)',
      }}
    >
      <div className="uk-container">
        <div className="tw-carousel-testimonial uk-text-center">
          <div
            className="owl-carousel owl-theme"
            data-uk-scrollspy="target:.testimonial-item; cls:uk-animation-slide-bottom-medium; delay: 350;"
          >
            <div className="testimonial-item">
              <h3 className="testimonial-title">Getuigenissen</h3>
              <div className="testimonial-content">
                <p>
                  Nog nooit zo'n leuk 'dieet' gedaan, die maand is
                  voorbijgevlogen! 
                </p>
              </div>
              <div className="testimonial-author">
                <span>Annette B. / Suikerstop!</span>
              </div>
            </div>

            <div className="testimonial-item">
              <h3 className="testimonial-title">Getuigenissen</h3>
              <div className="testimonial-content">
                <p>
                  Petra haar aanpak is heel aanmoedigend, ondersteunend en
                  uiterst respectvol! 
                </p>
              </div>
              <div className="testimonial-author">
                <span>Piet S. / Individuele begeleiding</span>
              </div>
            </div>

            <div className="testimonial-item">
              <h3 className="testimonial-title">Getuigenissen</h3>
              <div className="testimonial-content">
                <p>
                  G E W E L D I G! De documentatie, het traject, de tips en
                  community spirit zorgen ervoor dat het gemakkelijk is en je
                  een nieuwe levenswijze kan installeren.
                </p>
              </div>
              <div className="testimonial-author">
                <span>Bertha / Suikerstop!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
