import { signOut } from '@atelierfabien/next-auth';

import { useTranslation } from '@foundation/next';

import { useCredentialsForm } from '@app/hooks/auth';

import AuthCredentialsSignIn from '@app/components/Auth/Credentials/SignIn';

const isDevelopment = process.env.NODE_ENV === 'development';

const AuthEmailSignIn = props => {
  const { handleSignIn, email, setEmail } = props;

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSignIn} data-provider="email">
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">{t('auth:email.signIn.title')}</legend>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user" />
            <input
              type="email"
              value={email}
              placeholder={t('auth:fields.email.placeholder')}
              className="uk-form-width-medium uk-input"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="uk-margin-medium">
          <input
            className="uk-button uk-button-default uk-button-small uk-button-radius"
            type="submit"
            value={t('auth:email.signIn.button')}
          />
        </div>
      </fieldset>
    </form>
  );
};

const AuthLogin = props => {
  const form = useCredentialsForm(props);
  const { session, loading } = form;

  const { t } = useTranslation();

  if (loading) {
    return <div key="spinner" className="uk-light" data-uk-spinner />;
  } else {
    return (
      <div className="uk-padding-large uk-light">
        {session && (
          <>
            <p>
              {session?.user?.name} / {session?.user?.email}
            </p>
            <div className="uk-margin">
              <input
                className="uk-button uk-button-default uk-button-small uk-button-radius"
                type="submit"
                value={t('auth:signOut.button')}
                onClick={signOut}
              />
            </div>
          </>
        )}
        {!session && (
          <>
            <AuthEmailSignIn {...form} />
            {isDevelopment && <AuthCredentialsSignIn {...form} />}
          </>
        )}
      </div>
    );
  }
};

export default AuthLogin;
