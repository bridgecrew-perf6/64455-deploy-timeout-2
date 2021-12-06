const SiteOverviewItem = ({ title, subtitle, intro, href, image }) => (
  <article className="post">
    <div className="entry-post">
      <div className="entry-media">
        <div className="tw-thumbnail">
          <a href={href} className="tw-image-hover" title="TODO">
            <img src={`/dev/assets/images/images-p/${image}`} alt="TODO" />
          </a>
        </div>
      </div>
      <div className="entry-cats tw-meta">
        <a href={href} title="TODO">
          {subtitle}
        </a>
      </div>
      <h2 className="entry-title">
        <a href={href}>{title}</a>
      </h2>
      <div className="entry-content uk-text-center">
        <p>{intro}</p>
        <p className="more-link">
          <a
            className="
        uk-button
        uk-button-default
        uk-button-small
        uk-button-radius
        tw-hover
      "
            href={href}
          >
            <span className="tw-hover-inner">
              <span>Meer info</span>
              <i className="ion-ios-arrow-thin-right" />
              {/* TODO */}
            </span>
          </a>
        </p>
      </div>
    </div>
  </article>
);

export default SiteOverviewItem;
