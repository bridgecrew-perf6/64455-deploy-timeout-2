import { usePropsOrPage, get } from '@foundation/next';

const ProductLayout = ({ page, children }) => {
  const { layout } = usePropsOrPage(page);
  const containerProps = get(layout, ['options', 'containerProps'], {});

  return (
    <section
      data-part="layout"
      data-page-type="basic"
      {...containerProps}
      uk-height-viewport="expand: true"
    >
      {children}
    </section>
  );
};

export default ProductLayout;
