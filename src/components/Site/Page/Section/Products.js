const ProductItem = () => (
  <div>
    <div className="event-item" data-uk-grid>
      <div className="entry-media uk-width-1-2">
        <a
          href="#"
          className="tw-image-hover"
          title="Closeup of the woman's hand wearing beautiful rings"
        >
          <img
            src="/dev/assets/images/images-p/kookworkshop-meta5.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="event-content uk-width-expand">
        <div className="tw-meta">Kookworkshop</div>
        <h3 className="event-title uk-text-uppercase">
          <a href="#">
            Gezonde hapjes <br />
            voor de feesttafel
          </a>
        </h3>
        <p>
          Vier heerlijke en eenvoudige hapjes boordevol smaak om mee uit te
          pakken op elke feesttafel.
        </p>
        <a
          href="#"
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
  </div>
);

const SitePageSectionProducts = () => (
  <section className="uk-section uk-section-muted">
    <div className="uk-container">
      <div className="tw-element tw-heading uk-text-center">
        <h4>Kookstudio 'Voeding in balans'</h4>
        <p>
          Schrijf je snel in, omdat het interactieve sessies zijn, zijn de
          plaatsen beperkt tot 8 personen.
        </p>
      </div>

      <div className="tw-element tw-carousel-event tw-posts">
        <div
          className="uk-child-width-1-2"
          data-uk-grid
          data-uk-scrollspy="target:.post-item; cls:uk-animation-slide-bottom-medium; delay: 350;"
        >
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  </section>
);

export default SitePageSectionProducts;
