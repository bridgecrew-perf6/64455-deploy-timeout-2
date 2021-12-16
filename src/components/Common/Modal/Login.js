import AuthLogin from '@app/components/Auth/Login';

const CommonModalLogin = () => (
  <div id="login-modal" className="uk-modal-full uk-modal" uk-modal="true">
    <div
      className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
      uk-height-viewport="true"
    >
      <button className="uk-modal-close-full" type="button" uk-close="true" />
      <div className="uk-text-center">
        <AuthLogin />
      </div>
    </div>
  </div>
);

export default CommonModalLogin;
