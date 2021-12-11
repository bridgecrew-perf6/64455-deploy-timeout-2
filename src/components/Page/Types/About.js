import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';

const AboutPage = () => (
  <div className="main-container">
    <SiteHeader title="Over Petra" image="over-petra-multi3.jpg" />

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
          <h4>Petra begeleidt je naar een gezonder leven</h4>
          <p>
            Voeding in balans is er voor iedereen die een optimaal gewicht wenst
            te bereiken en te behouden. Dankzij jouw voeding in balans blijf je
            energiek en fit en ben je gezondheidsklachten een stapje voor!
          </p>
        </div>

        <div
          className="
              tw-element
              uk-text-center uk-margin-remove-top uk-padding-remove-bottom
            "
        >
          <img src="/dev/assets/images/images-p/over-petra-meta.jpg" alt="" />
        </div>
      </div>
    </section>

    <section className="uk-section uk-padding-remove-bottom uk-padding-remove-top">
      <div
        className="uk-child-width-1-2@m uk-grid-match uk-grid-collapse"
        data-uk-grid
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
      >
        <div
          className="uk-padding-xlarge"
          style={{ backgroundColor: '#f7f7f7' }}
        >
          <div className="uk-padding tw-element tw-box">
            <h4 className="uk-text-uppercase">
              Gezonder eten met raad en daad!
            </h4>
            <p className="description">
              Wil je gezondheidsklachten een stapje voor blijven, je gelukkiger
              en energieker voelen en je vlotter kunnen kleden? Ben je bereid om
              hieraan te werken en daadwerkelijk stappen te zetten?
            </p>
            <p>
              Samen zoeken we uit welke aanpak het beste bij jou past, eventueel
              met de steun en expertise van partners als EQ3 en BiometrIQ.
            </p>
            <p>
              Je kan kiezen voor individuele begeleiding en coaching of je kan
              deelnemen aan de Suikerstop!-groepssessies. Hierbij daag ik je uit
              om gedurende 1 maand alle (toegevoegde) suikers te vermijden.
              Dankzij de steun van de groep en receptjes voor de hele maand is
              succes gegarandeerd!
            </p>
          </div>
        </div>

        <div
          className="uk-padding-xlarge"
          style={{ backgroundColor: '#f7f7f7' }}
        >
          <div className="uk-padding tw-element tw-box">
            <h4 className="uk-text-uppercase">Mijn visie</h4>
            <p className="description">
              Dankzij de positieve reacties van mensen als ‘Jij maakte van mijn
              eerste vermageringsdag een feest’, geniet ik nog steeds van elke
              werkdag!.
            </p>
            <p>
              In de ‘voeding in balans’ kookstudio ontdek je gezonde en lekkere
              gerechten met veel aandacht voor plantaardige ingrediënten. Niet
              alleen nuttig tijdens het vermageringsproces, maar heel belangrijk
              om ook nadien je gewicht te behouden. Een verandering van eet- en
              leefstijl en ervan genieten is immers voor de rest van je leven!
            </p>
            <p>
              In mijn kookstudio kan je ook kennismaken met dé keukenhulp bij
              uitstek, de Thermomix TM6. Ben je nieuwsgierig en enthousiast om
              in dit avontuur te stappen, contacteer me dan voor meer info of
              maak hier een eerste afspraak.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      className="uk-section uk-background-cover"
      data-uk-parallax="bgy: -200"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage:
          'url(/dev/assets/images/images-p/over-petra2-multi.jpg)',
      }}
    >
      <div className="uk-container">
        <div className="tw-element tw-heading uk-text-center uk-light">
          <h3>Waarvoor kan je bij Petra terecht?</h3>
          <p>
            Samen gaan we op zoek naar een methode die voor jou werkt en
            vertrekt vanuit je huidige eetgewoonten en leefstijl. Samen zoeken
            we naar een haalbaar doel waarbij een verbetering van jouw
            gezondheid en meer fysiek en psychisch welzijn centraal staan.
          </p>
        </div>

        <div className="tw-element tw-carousel-post uk-text-center style-2 tw-posts">
          <div
            className="owl-carousel owl-theme"
            data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium"
          >
            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Privé-raadpleging</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Afspraak</a>
                </h3>
                <p>
                  Individuele begeleiding werkt het best en garandeert het
                  grootste succes op lange termijn.
                </p>
                <a
                  href="afspraak.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Groepssessies</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Kookworkshops</a>
                </h3>
                <p>
                  De ideale gelegenheid om kennis te maken met de gezonde keuken
                  waar puur en seizoensgebonden primeert.
                </p>
                <a
                  href="kookworkshop.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Vervangmaaltijden</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Equilibre3-mentor</a>
                </h3>
                <p>
                  Equilibre3 biedt je een dieet op maat aan met verantwoord
                  lekkere vervangmaaltijden.
                </p>
                <a
                  href="equilibre3.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Groepssessies</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Suikerstop!</a>
                </h3>
                <p>
                  Tijdens informatieve groepssessies informeer ik je over de
                  effecten van gezonde voeding op je lichaam.
                </p>
                <a
                  href="suikerstop.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
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

            <div className="post-item">
              <div className="post-content">
                <div className="tw-meta">
                  <a href="#">Demonstratie</a>
                </div>
                <h3 className="post-title">
                  <a href="#">Thermomix-demo</a>
                </h3>
                <p>
                  Beleef de Thermomix ervaring bij u thuis, bij vrienden of in
                  de kookstudio van 'Voeding in balans'.
                </p>
                <a
                  href="thermomix.html"
                  className="
                      uk-button
                      uk-button-default
                      uk-button-small
                      uk-button-radius
                      tw-hover
                    "
                >
                  <span className="tw-hover-inner">
                    <span>Lees meer</span>
                    <i className="ion-ios-arrow-thin-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withPageWithLayout('about', AboutPage);
