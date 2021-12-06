const Page = () => (
  <div className="main-container">
    <section className="uk-section uk-section-normal">
      <div className="uk-container">
        <div className="uk-grid-medium" data-uk-grid>
          <div className="uk-width-2-3@m">
            <div className="tw-element">
              <div className="uk-grid-xsmall uk-child-width-1-1" data-uk-grid>
                <div className="gallery-item">
                  <div>
                    <a href="" uk-toggle>
                      <img
                        src="/dev/assets/images/images-p/shop-suikerstop1-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-image">
                    <a href="" uk-toggle>
                      <img
                        src="/dev/assets/images/images-p/shop-suikerstop1-3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="grid-sizer" />
              </div>
            </div>
          </div>
          <div className="uk-width-expand">
            <div className="portfolio-single-title">
              <h1 className="portfolio-title">Suikerstop!</h1>
              <div className="portfolio-cats tw-meta">
                <a href="#">Groepssessies</a>
              </div>
            </div>
            <div className="portfolio-single-content">
              <p>
                Ben jij tijdens de lockdown ook meer gaan snoepen en wil je
                daarvan af? Heb je weinig energie, voel je je futloos en is het
                tijd voor verandering? Ben je enkele kilo’s bijgekomen en wil je
                daar komaf mee maken? Of wil je werken aan een optimale
                gezondheid en immuniteit?
              </p>

              <p>
                Dan is het suikerstop-programma iets voor jou! Ga mee de
                uitdaging aan en breng je eetpatroon terug in balans!
              </p>
              <p>Het programma bestaat uit 5 online bijeenkomsten.</p>
              <p>
                Stap voor stap evolueer je naar een evenwichtig en volwaardig
                eetpatroon. Zonder (toegevoegde) suikers en geraffineerde
                koolhydraten maar boordevol voedingsstoffen en smaak!
              </p>
              <p>
                Om je zoveel mogelijk te inspireren krijg je aangepaste recepten
                voor 30 dagen (90 recepten).
              </p>
            </div>
            <ul className="portfolio-single-meta">
              <li>
                <h3 className="portfolio-subtitle">Prijs</h3>
                <div className="portfolio-meta">
                  <a href="#">€ 129</a>
                </div>
              </li>
              <li>
                <h3 className="portfolio-subtitle">Waar</h3>
                <div className="portfolio-meta">
                  <a href="#">Online</a>
                </div>
              </li>
              <li>
                <h3 className="portfolio-subtitle">Data</h3>
                <div className="portfolio-meta">
                  <a href="#">30/9, 4/10, 11/10, 18/10 en 28/10 </a>
                </div>
              </li>
              <li>
                <h3 className="portfolio-subtitle">Uur</h3>
                <div className="portfolio-meta">
                  <a href="#">14 uur</a>
                </div>
              </li>
            </ul>
            <a
              href="#"
              className="
                  uk-button uk-button-radius uk-button-default
                  portfolio-btn
                  tw-hover
                "
            >
              <span className="tw-hover-inner">
                <span>Inschrijven</span>
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
