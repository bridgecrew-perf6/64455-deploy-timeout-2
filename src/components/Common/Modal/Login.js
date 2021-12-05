const CommonModalLogin = () => (
  <div
    id="login-modal"
    className="uk-modal-full uk-modal uk-light"
    uk-modal="true"
  >
    <div
      className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
      uk-height-viewport="true"
    >
      <button className="uk-modal-close-full" type="button" uk-close="true" />
      <form className="uk-text-center">
        <h4 className="uk-text-uppercase">Log in</h4>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user" />
            <input
              className="uk-form-width-medium uk-input"
              type="text"
              placeholder="emailadres"
              autoFocus
            />
          </div>
        </div>

        <input
          className="
              uk-button
              uk-button-small
              uk-button-default
              uk-margin-bottom
              uk-input
            "
          type="submit"
          value="Inloggen"
        />
      </form>
    </div>
  </div>
);

export default CommonModalLogin;
