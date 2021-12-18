import AuthLogin from '@app/components/Auth/Login';

const Page = () => (
  <div
    className="uk-flex-1 uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center uk-background-cover tw-background"
    data-overlay="0.6"
    style={{
      backgroundImage: 'url(/assets/images/background-ingredients.jpg)',
      minHeight: '500px',
    }}
  >
    <div style={{ zIndex: 10 }}>
      <AuthLogin />
    </div>
  </div>
);

export default Page;
