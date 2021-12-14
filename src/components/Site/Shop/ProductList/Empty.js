const ProductListEmpty = () => {
  return (
    <div uk-alert>
      <a className="uk-alert-close" uk-close />
      <h3>Geen resultaten</h3>
      <p>Er zijn geen producten gevonden die beantwoorden aan uw criteria.</p>
    </div>
  );
};

export default ProductListEmpty;
