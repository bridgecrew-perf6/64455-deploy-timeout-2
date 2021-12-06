import SiteHeader from '@shop/components/Site/Header';

const Page = () => (
  <div className="main-container">
    <SiteHeader title="Voedingstips" image="over-petra-multi.jpg" />

    <section
      className="
          uk-section
          uk-section-large
          uk-padding-remove-top
          uk-margin-large-top
          uk-padding-remove-vertical
          uk-margin-bottom
        "
    >
      <div className="uk-container">
        <div className="tw-element uk-text-center tw-heading">
          <h4>Inspiratie voor een gezonde start</h4>
          <p className="description">
            Als je gewicht wil verliezen start dan met het inlassen van
            maaltijdpauzes.
            <br />
            Wij zijn niet gemaakt om constant tussendoortjes te eten.
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
          <img src="/dev/assets/images/images-p/over-petra-meta.jpg" alt="" />
        </div>
      </div>
    </section>

    <section
      className="
          uk-section
          uk-section-large
          uk-padding-remove-vertical
          uk-margin-large-top
        "
    >
      <div className="uk-container uk-container-small">
        <div
          className="uk-child-width-1-1 uk-child-width-1-2@m"
          data-uk-grid
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-top-medium; delay: 400;"
        >
          <div>
            <div className="tw-element tw-box">
              <p>
                Onze voorouders waren veel meer getraind op het af en aan
                opslaan en weer gebruiken van vetreserves, simpelweg omdat er
                niet continu voedsel ter beschikking was.
              </p>
              <p>
                Wat een verschil met onze huidige ‘voedselomgeving’ waar we
                moeten omgaan met een constant aanbod van vet- en suikerrijke
                producten*. Denk aan de koekjes tijdens meetings, snoepjes in de
                auto, koffie met chocolade in de namiddag, aperitiefhapjes voor
                het avondeten alsook het drinken van frisdranken, fruitsappen of
                smoothies tussendoor.
              </p>
              <p>
                Allemaal extra energie (gemiddeld krijgen we door
                tussendoortjes/ drankjes zo’n extra 570 kcal per dag binnen) die
                we niet verbruiken. Tenzij je volop in de groei zit of veel
                lichaamsbeweging hebt (actieve job of sporter) wordt deze
                energie immers snel opgeslagen als vetreserve.
              </p>

              <br />
              <br />
            </div>
          </div>
          <div>
            <div className="tw-element tw-box">
              <p className="description">
                Om deze vetten weer af te breken, en dus af te vallen, helpt het
                om geen tussendoortjes te nemen. Door pauzes van minstens 4 uur
                te respecteren tussen de maaltijden zal je bloedsuikerspiegel en
                bijgevolg ook je insulinespiegel zakken. Hierdoor wordt je
                vetverbranding geactiveerd. Gek genoeg zal ook je behoefte om te
                snacken en je hongergevoel afnemen bij een lage, gecontroleerde
                insulinespiegel (zie grafiek).
              </p>

              <div
                className="
                    tw-element
                    uk-text-center uk-margin-remove-top uk-padding-remove-bottom
                  "
              >
                <img
                  src="/dev/assets/images/images-p/tips-grafiek.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="uk-section uk-section-large uk-light uk-background-cover"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage: 'url(/dev/assets/demo/startup-bg.jpg)',
      }}
    >
      <div className="uk-container">
        <div data-uk-scrollspy="target: > .tw-heading; cls:uk-animation-slide-bottom-small; delay: 300">
          <div className="tw-element tw-heading uk-text-center">
            <h5
              className="tw-sub-title"
              style={{ fontSize: '10px', opacity: 0.8 }}
            >
              Voeding in balans
            </h5>
            <h3>Petra's 10 tips voor een topvorm!</h3>
            <a
              href="#"
              className="uk-margin-top tw-video-icon"
              data-uk-toggle="target: #modal-close"
            >
              <i className="ion-play" />
            </a>
            <div
              className="tw-modal-container-video"
              id="modal-close"
              data-uk-modal="center: true"
              data-auto-play="1"
              data-loop="1"
            >
              <div className="uk-modal-dialog">
                <button
                  className="uk-modal-close"
                  type="button"
                  data-uk-close
                />
                <iframe
                  width="900"
                  height="506"
                  src="https://www.youtube.com/embed/aNPkYJOBC3Y"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="uk-section uk-background-cover uk-text-center"
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
      style={{
        backgroundImage: 'url(/dev/assets/images/images-p/background-wit.jpg)',
      }}
    >
      <div className="uk-container uk-container-small uk-text-center">
        <div
          className="tw-element tw-portfolio uk-text-center"
          data-isotope-item=".portfolio-item"
        >
          <div
            className="
                tw-element tw-heading
                uk-text-center uk-dark uk-text-center
              "
          >
            <h3>Ontbijt</h3>
            <p className="subtitle">
              Start je dag met een uitgebalanceerd ontbijt: geen boterham met
              choco of confituur, geen zoete ontbijtgranen of granola maar wel
              een ontbijt rijk aan volwaardige koolhydraten, eiwitten en vezels.
              Zo stijgt je suikerspiegel traag in de loop van de voormiddag, is
              je energie verzekerd en voorkom je een hongergevoel.
            </p>
          </div>
          <div
            className="
                isotope-container
                uk-grid-collapse
                with-bg
                tw-calc-width
                uk-child-width-1-1
                uk-child-width-1-2@s
                uk-child-width-1-3@m
                uk-child-width-1-4@l
              "
            data-uk-grid
            data-uk-scrollspy="target: > .portfolio-item; cls:uk-animation-slide-left-small; delay: 300;"
          >
            <div className="portfolio-item category-print">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/recept-avocadobrood.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Avocadobrood</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/recept-energiebar.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Energiereepje</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-photography category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/recept-haverbrood.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Haverbrood</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/recept-havermout-fruit2.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Havermout met rood fruit</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/recept-omelet.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Omelet met champignons</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/recept-griekse-yoghurt2.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Griekse yoghurt met noten</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid-sizer" />
          </div>
        </div>
      </div>
    </section>

    <section
      className="uk-section uk-position-relative uk-background-cover"
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage:
          'url(/dev/assets/images/images-p/background-stone-yellow.jpg)',
      }}
    >
      <div className="uk-container uk-container-small uk-text-center">
        <div
          className="tw-element tw-portfolio tw-isotope-container"
          data-isotope-item=".portfolio-item"
        >
          <div className="tw-element tw-heading uk-text-center uk-light">
            <h3>Lunch</h3>
            <p className="subtitle">
              Laat je niet verleiden tot een royaal belegd broodje of witte
              boterhammen met kaas maar kies voor een volwaardige lunch: neem
              groenten als basis en vul aan met een portie eiwitten en
              volwaardige koolhydraten. Neem tijd om rustig te eten, zet je werk
              even aan de kant en geniet van je maaltijd.
            </p>
          </div>
          <div
            className="
                isotope-container
                uk-grid-collapse
                with-bg
                tw-calc-width
                uk-child-width-1-1
                uk-child-width-1-2@s
                uk-child-width-1-3@m
                uk-child-width-1-4@l
              "
            data-uk-grid
            data-uk-scrollspy="target: > .portfolio-item; cls:uk-animation-slide-left-small; delay: 300;"
          >
            <div className="portfolio-item category-print">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-kijker-suikerstop.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Erwtensoep met munt</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Witloofsalade</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-photography category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-kijker-pasta.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Zoete aardappelsalade</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Quinoasalade</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Kleurrijke salade</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Rode bietensoep</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid-sizer" />
          </div>
        </div>
      </div>
    </section>

    <section
      className="uk-section uk-position-relative uk-background-cover"
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
      style={{
        backgroundImage: 'url(/dev/assets/images/images-p/background-wit.jpg)',
      }}
    >
      <div className="uk-container uk-container-small uk-text-center">
        <div
          className="tw-element tw-portfolio tw-isotope-container"
          data-isotope-item=".portfolio-item"
        >
          <div className="tw-element tw-heading uk-text-center uk-dark">
            <h3>Diner</h3>
            <p className="subtitle">
              Laat je niet verleiden tot een royaal belegd broodje of witte
              boterhammen met kaas maar kies voor een volwaardige lunch: neem
              groenten als basis en vul aan met een portie eiwitten en
              volwaardige koolhydraten. Neem tijd om rustig te eten, zet je werk
              even aan de kant en geniet van je maaltijd.
            </p>
          </div>
          <div
            className="
                isotope-container
                uk-grid-collapse
                with-bg
                tw-calc-width
                uk-child-width-1-1
                uk-child-width-1-2@s
                uk-child-width-1-3@m
                uk-child-width-1-4@l
              "
            data-uk-grid
            data-uk-scrollspy="target: > .portfolio-item; cls:uk-animation-slide-left-small; delay: 300;"
          >
            <div className="portfolio-item category-print">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-kijker-suikerstop.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Pastasalade</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Veggie couscous</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-photography category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-kijker-pasta.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Thais stoofpotje</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Gehaktbrood met prei</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Wok met kip</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item category-branding category-web-design">
              <div className="portfolio-media tw-image-hover">
                <img
                  src="/dev/assets/images/images-p/home-suikervrij-bakken.jpg"
                  alt=""
                />
                <a href="#" className="portfolio-content uk-light">
                  <h3 className="portfolio-title">
                    <span>Veggieburger met slaatje</span>
                  </h3>
                  <div className="tw-meta">
                    <span>Recept</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid-sizer" />
          </div>
        </div>
      </div>
    </section>

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
            <h2>Meer recepten?</h2>
            <p>
              Kijk in de shop voor een week- of maandplan suikervrije recepten,
              90 recepten voor ontbijt, lunch en diner.
            </p>
          </div>
          <div className="call-btn">
            <a
              href="shop.html"
              className="
                  uk-button uk-button-default uk-button-medium uk-button-radius
                  tw-hover
                "
            >
              <span className="tw-hover-inner">
                <span>Shop</span>
                <i className="ion-ios-arrow-thin-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
