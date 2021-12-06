const SitePageSectionStats = () => (
  <section
    className="uk-section uk-light"
    style={{ backgroundColor: '#151515' }}
  >
    <div className="uk-container">
      <div
        className="uk-child-width-1-2@s uk-child-width-expand@m"
        data-uk-grid
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
      >
        <div>
          <div
            className="tw-element tw-counterup uk-text-center"
            data-slctr=">h1"
            data-txt=""
            data-sep=","
            data-dur="1000"
          >
            <i className="et-layers" />
            <h1>55</h1>
            <span className="tw-meta"> euro per persoon </span>
          </div>
        </div>
        <div>
          <div
            className="tw-element tw-counterup uk-text-center"
            data-slctr=">h1"
            data-txt=""
            data-sep=","
            data-dur="1000"
          >
            <i className="et-clock" />
            <h1>120</h1>
            <span className="tw-meta"> minuten </span>
          </div>
        </div>
        <div>
          <div
            className="tw-element tw-counterup uk-text-center"
            data-slctr=">h1"
            data-txt=""
            data-sep=","
            data-dur="1000"
          >
            <i className="et-trophy" />
            <h1>4</h1>
            <span className="tw-meta"> recepten </span>
          </div>
        </div>
        <div>
          <div
            className="tw-element tw-counterup uk-text-center"
            data-slctr=">h1"
            data-txt=""
            data-sep=","
            data-dur="1000"
          >
            <i className="et-happy" />
            <h1>8</h1>
            <span className="tw-meta"> personen </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SitePageSectionStats;
