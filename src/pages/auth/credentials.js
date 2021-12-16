import AuthLogin from '@app/components/Auth/Login';

const Page = () => (
  <div
    className="uk-flex-1 uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center uk-background-cover tw-background"
    data-overlay="0.7"
    style={{
      backgroundImage: 'url(/assets/images/background-berries.jpg)',
    }}
  >
    <div style={{ zIndex: 10 }}>
      <AuthLogin />
    </div>
  </div>
);

export default Page;
