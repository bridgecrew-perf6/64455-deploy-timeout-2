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
        <legend className="uk-legend uk-light">
          {t('auth:email.signIn.title')}
        </legend>
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
        <div className="uk-margin-medium uk-light">
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

  if (loading) return <div className="uk-light" data-uk-spinner />;

  return (
    <div className="uk-padding-large">
      {session && (
        <>
          <p className="uk-light">
            {session?.user?.name} / {session?.user?.email}
          </p>
          <div className="uk-margin uk-light">
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
};

export default AuthLogin;
