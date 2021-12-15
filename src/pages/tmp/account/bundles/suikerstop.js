import SiteHeader from '@shop/components/Site/Header';

const Page = () => (
  <div className="main-container">
    <SiteHeader title="Suikerstop! Bundel" />

    <section className="uk-section uk-padding-remove-vertical uk-margin-large-top">
      <div
        className="uk-container"
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 600;"
      >
        <div
          className="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-medium"
          data-uk-grid
        >
          <div className="uk-width-1-1">
            <div className="tw-heading" />
          </div>
          <div>
            <form>
              <fieldset className="uk-fieldset">
                <div className="uk-margin">
                  <select className="uk-select">
                    <option>Dag 1</option>
                    <option>Dag 2</option>
                    <option>Dag 3</option>
                    <option>Dag 4</option>
                    <option>Dag 5</option>
                    <option>Dag 6</option>
                    <option>Dag 7</option>
                    <option>Dag 8</option>
                    <option>Dag 9</option>
                    <option>Dag 10</option>
                    <option>Dag 11</option>
                    <option>Dag 12</option>
                    <option>Dag 13</option>
                    <option>Dag 14</option>
                    <option>Dag 15</option>
                    <option>Dag 16</option>
                    <option>Dag 17</option>
                    <option>Dag 18</option>
                    <option>Dag 19</option>
                    <option>Dag 20</option>
                    <option>Dag 21</option>
                    <option>Dag 22</option>
                    <option>Dag 23</option>
                    <option>Dag 24</option>
                    <option>Dag 25</option>
                    <option>Dag 26</option>
                    <option>Dag 27</option>
                    <option>Dag 28</option>
                    <option>Dag 29</option>
                    <option>Dag 30</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>
          <div>
            <div className="uk-text-center">
              <a
                href="#"
                className="uk-button uk-button-default uk-margin-bottom"
              >
                Ontbijt
              </a>
            </div>
          </div>
          <div>
            <div className="uk-text-center">
              <a
                href="#"
                className="uk-button uk-button-default uk-margin-bottom"
              >
                Lunch
              </a>
            </div>
          </div>
          <div>
            <div className="uk-text-center">
              <a
                href="#"
                className="uk-button uk-button-default uk-margin-bottom"
              >
                Diner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="uk-section uk-padding-remove-vertical uk-margin-large-top">
      <div
        className="uk-container"
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 600;"
      >
        <div className="uk-child-width-expand uk-grid-medium" data-uk-grid>
          <div className="uk-width-1-1" />
          <div className="uk-width-1-4 uk-width-1-1@xs">
            <h2 className="entry-title uk-text-left">
              <a href="#">Omelet champignons</a>
            </h2>

            <div className="entry-cats tw-meta uk-text-left uk-margin-large-top">
              <a href="#" title="View all posts in Fashion">
                Ingrediënten
              </a>
            </div>
            <ul>
              <li>4-5 champignons</li>
              <li>2 eieren</li>
            </ul>
          </div>
          <div>
            <div
              className="
                  tw-element
                  uk-text-center uk-margin-remove-top uk-padding-remove-vertical
                "
            >
              <img src="/assets/images/recept-omelet-champignons.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="
          uk-section
          uk-padding-remove-vertical
          uk-margin-remove-top
          uk-margin-large-bottom
        "
    >
      <div
        className="uk-container"
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 600;"
      >
        <div className="uk-child-width-expand uk-grid-medium" data-uk-grid>
          <div className="uk-width-1-1" />
          <div className="uk-width-1-4 uk-width-1-1@xs" />
          <div>
            <div className="uk-grid-medium" data-uk-grid>
              <div>
                <div className="entry-cats tw-meta uk-text-left uk-margin-large-top">
                  <a href="#" title="View all posts in Fashion">
                    Bereiding
                  </a>
                </div>
                Snij de champignons in plakjes en bak ze aan in een beetje
                boter, kruid met peper en zout. Kluts de eieren, voeg een beetje
                peper en zout toe en giet ze over de champignons. Strooi er
                eventueel wat bieslook, dragon of peterselie over.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
