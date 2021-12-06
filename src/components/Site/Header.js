const SiteHeader = ({ title, image }) => (
  <section
    className="
  uk-section
  uk-text-center
  uk-flex
  uk-flex-middle
  uk-flex-center
  uk-light
  uk-background-cover
  uk-background-bottom-right
"
    data-overlay="0.3"
    style={{
      backgroundColor: '#151515',
      backgroundImage: image
        ? `url(/dev/assets/images/images-p/${image})`
        : 'none',
      height: '500px',
    }}
  >
    <div className="tw-page-title-container tw-element">
      <h1 className="tw-page-title uk-text-uppercase">{title}</h1>
    </div>
    <div
      className="
    tw-breadcrumb-container
    uk-position-absolute uk-position-bottom-center
    tw-element
  "
    >
      <a href="/tmp" className="tw-breadrumb-child home">
        {/* TODO */}
        Home
      </a>
      <a href="/tmp/aanbod" className="tw-breadrumb-child">
        {/* TODO */}
        Aanbod
      </a>
      <a href="aanbod.html" className="tw-breadrumb-child">
        {/* TODO */}
        {title ?? 'TODO'}
      </a>
    </div>
  </section>
);

export default SiteHeader;
