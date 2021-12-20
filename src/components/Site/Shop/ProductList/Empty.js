import { Link, useRouter } from '@foundation/next';
import { isBlank } from '@foundation/lib/util';

const ProductListEmpty = () => {
  const router = useRouter();

  return (
    <div>
      <h3>Geen resultaten</h3>
      <p>Er zijn geen producten gevonden die beantwoorden aan uw criteria.</p>
      {!isBlank(router.query.query) && (
        <Link
          href="/shop"
          className="uk-button uk-button-default uk-button-small uk-button-radius tw-hover uk-margin-top"
          shallow
        >
          <span className="tw-hover-inner">
            <span>Naar Overzicht</span>
            <i className="ion-ios-arrow-thin-right" />
          </span>
        </Link>
      )}
    </div>
  );
};

export default ProductListEmpty;
