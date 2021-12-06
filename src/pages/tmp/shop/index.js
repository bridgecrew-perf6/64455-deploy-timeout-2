import SiteHeader from '@shop/components/Site/Header';

const Page = () => (
  <div className="main-container">
    <SiteHeader title="Webshop" image="shop-multi2.jpg" />

    <section className="uk-section uk-section-shop">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="content-area uk-width-expand">
            <div className="tw-element tw-shop">
              <div className="shop-lead-meta uk-child-width-1-2" data-uk-grid>
                <div>
                  <h4 className="shop-result-text uk-float-left">
                    Showing 1–12 of 60 results
                  </h4>
                </div>
              </div>

              <div
                className="
                    shop-container
                    uk-child-width-1-1@xxs
                    uk-child-width-1-2@xs
                    uk-child-width-1-3@s
                    uk-child-width-1-2@m
                    uk-child-width-1-3@l
                  "
                data-uk-grid
                data-uk-scrollspy="target: > .shop-item; cls:uk-animation-slide-bottom-medium; delay: 300;"
              >
                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-suikerstop1.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-suikerstop1.html" className="shop-title">
                          Suikerstop!
                        </a>
                      </h4>
                      <a className="shop-category">Groepssessies</a>
                      <div className="price">
                        <span className="new-price">€ 129</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-suikerstop2.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Suikerstop 2.0!
                        </a>
                      </h4>
                      <a className="shop-category">Groepssessies</a>
                      <div className="price">
                        <span className="new-price">€ 129</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-suikervrij-kerstmenu.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Suikervrij kerstmenu
                        </a>
                      </h4>
                      <a className="shop-category">Receptenbundel</a>
                      <div className="price">
                        <span className="new-price">€ 55</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-thermomix-demo.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Thermomix-demo
                        </a>
                      </h4>
                      <a className="shop-category">Demonstratie</a>
                      <div className="price">
                        <span className="new-price">€ 55</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-burgers.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Vegetarische burgers
                        </a>
                      </h4>
                      <a className="shop-category">Kookworkshop</a>
                      <div className="price">
                        <span className="new-price">€ 55</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-soep.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Winterse soepen
                        </a>
                      </h4>
                      <a className="shop-category">Kookworkshop</a>
                      <div className="price">
                        <span className="new-price">€ 55</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-glutenvrij-bakken.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Gluten- en lactosevrij bakken
                        </a>
                      </h4>
                      <a className="shop-category">Receptenbundel</a>
                      <div className="price">
                        <span className="new-price">€ 55</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-lezing-vitamines.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Lezing vitamines
                        </a>
                      </h4>
                      <a className="shop-category">Lezing</a>
                      <div className="price">
                        <span className="new-price">€ 55</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shop-item">
                    <div className="shop-content">
                      <div
                        className="
                            shop-image-container
                            uk-inline
                            tw-onhover
                            visible
                          "
                      >
                        <img
                          alt="Backpack In Black"
                          src="/dev/assets/images/images-p/shop-weekmenu-veggie.jpg"
                        />
                        <div className="uk-position-bottom">
                          <a className="add-to-cart">
                            <i className="icon ion-bag" />
                            Toevoegen
                          </a>
                        </div>
                      </div>
                      <h4>
                        <a href="shop-single.html" className="shop-title">
                          Weekmenu veggie
                        </a>
                      </h4>
                      <a className="shop-category">Receptenbundel</a>
                      <div className="price">
                        <span className="new-price">€ 55</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-area">
            <div
              className="sidebar-inner"
              data-uk-sticky="bottom: true;offset: 40"
            >
              <div className="widget-item">
                <aside className="widget widget_categories">
                  <h3 className="widget-title">
                    <span>Search</span>
                  </h3>
                  <div className="call-btn" data-uk-grid>
                    <div className="uk-inline uk-width-1-1">
                      <a className="uk-form-icon uk-form-icon-flip" href="">
                        <i className="ion-android-search" />
                      </a>
                      <input
                        type="text"
                        placeholder="Zoek"
                        className="uk-input"
                      />
                    </div>
                  </div>
                </aside>
              </div>

              <div className="widget-item">
                <aside className="widget widget_categories">
                  <h3 className="widget-title">
                    <span>Categories</span>
                  </h3>
                  <ul>
                    <li className="cat-item cat-item-2 current-cat">
                      <a href="#">Groepssessies</a> (2)
                    </li>
                    <li className="cat-item cat-item-7">
                      <a href="#">Receptenbundel</a> (3)
                    </li>
                    <li className="cat-item cat-item-9">
                      <a href="#">Kookworkshop</a> (2)
                    </li>
                    <li className="cat-item cat-item-8">
                      <a href="#">Demonstratie</a> (1)
                    </li>
                    <li className="cat-item cat-item-8">
                      <a href="#">Lezing</a> (1)
                    </li>
                  </ul>
                </aside>
              </div>

              <div className="widget-item">
                <aside className="widget tw-shop-widget">
                  <h3 className="widget-title">
                    <span>Meest verkocht</span>
                  </h3>
                  <ul>
                    <li>
                      <div className="recent-thumb">
                        <a href="shop-single.html">
                          <img
                            src="/dev/assets/images/images-p/shop-suikerstop2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-content">
                        <h4>
                          <a href="#">Suikerstop 2.0!</a>
                        </h4>
                        <span className="entry-cat">Groepssessies</span>
                        <span className="entry-price">€ 129</span>
                      </div>
                    </li>
                    <li>
                      <div className="recent-thumb">
                        <a href="shop-single.html">
                          <img
                            src="/dev/assets/images/images-p/shop-soep.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-content">
                        <h4>
                          <a href="#">Winterse soepen</a>
                        </h4>
                        <span className="entry-cat">Kookworkshop</span>
                        <span className="entry-price">€ 55</span>
                      </div>
                    </li>
                    <li>
                      <div className="recent-thumb">
                        <a href="shop-single.html">
                          <img
                            src="/dev/assets/images/images-p/shop-lezing-vitamines.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-content">
                        <h4>
                          <a href="#">Lezing vitamines</a>
                        </h4>
                        <span className="entry-cat">Lezing</span>
                        <span className="entry-price">€ 55</span>
                      </div>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
