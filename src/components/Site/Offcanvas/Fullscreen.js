import { withPortal } from '@foundation/next';
import { useModalEvents } from '@app/hooks/site';

const OffcanvasFullscreen = withPortal(
  ({ id, type, children, offcanvas, onShow, onHide }) => {
    useModalEvents(offcanvas, { onShow, onHide });

    return (
      <div
        id={id}
        ref={offcanvas}
        className="uk-offcanvas uk-offcanvas-fullscreen uk-offcanvas-responsive"
        uk-offcanvas="overlay: true; container: #__next"
        data-modal-type={type}
      >
        <aside className="uk-offcanvas-bar uk-flex uk-flex-column uk-width-1-1">
          <div className="uk-card uk-height-1-1 uk-flex uk-flex-column">
            <button
              type="button"
              className="uk-close uk-position-small uk-position-top-left uk-margin-left"
              uk-icon="icon: chevron-left; ratio: 1.6"
              uk-toggle={`#${id}`}
            />
            <button
              className="uk-offcanvas-close uk-close-large uk-margin-small-right"
              type="button"
              uk-close="true"
            />
            {children}
          </div>
        </aside>
      </div>
    );
  }
);

export default OffcanvasFullscreen;
