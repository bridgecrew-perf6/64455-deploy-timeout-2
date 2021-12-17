import { withPortal } from '@foundation/next';
import { useModalEvents } from '@app/hooks/site';

const SiteOffcanvasFullscreen = withPortal(
  ({ id, children, offcanvas, onShow, onHide }) => {
    useModalEvents(offcanvas, { onShow, onHide });

    return (
      <div
        id={id}
        ref={offcanvas}
        className="uk-offcanvas uk-offcanvas-fullscreen uk-offcanvas-responsive"
        uk-offcanvas="overlay: true; container: #__next"
      >
        <aside className="uk-offcanvas-bar uk-flex uk-flex-column uk-width-1-1">
          <div className="uk-card uk-height-1-1 uk-flex uk-flex-column">
            <button
              className="uk-offcanvas-close uk-close-large "
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

export default SiteOffcanvasFullscreen;
