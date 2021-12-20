import { useMemo, useRef } from 'react';

import { withPortal } from '@foundation/next';

import AuthLogin from '@app/components/Auth/Login';

const CommonModalLogin = withPortal(() => {
  const ref = useRef();

  const onSubmit = useMemo(() => {
    return () =>
      ref.current && setTimeout(() => UIkit.modal(ref.current).hide(), 300);
  }, [ref]);

  return (
    <div
      id="login-modal"
      ref={ref}
      className="uk-modal-full uk-modal"
      uk-modal="container: #__next"
    >
      <div
        className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
        uk-height-viewport="true"
      >
        <button className="uk-modal-close-full" type="button" uk-close="true" />
        <div className="uk-text-center">
          <AuthLogin onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
});

export default CommonModalLogin;
