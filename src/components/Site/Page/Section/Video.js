const SitePageSectionVideo = () => (
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
            Ontdek
          </h5>
          <h3>Voeding in balans</h3>
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
              <button className="uk-modal-close" type="button" data-uk-close />
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
);

export default SitePageSectionVideo;
