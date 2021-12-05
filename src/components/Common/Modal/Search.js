const CommonModalSearch = () => (
  <div
    id="search-modal"
    className="uk-modal-full uk-modal uk-light"
    uk-modal="true"
  >
    <div
      className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
      uk-height-viewport="true"
    >
      <button className="uk-modal-close-full" type="button" uk-close="true" />
      <form className="uk-search uk-search-large">
        <span className="input--hoshi">
          <input
            className="uk-search-input input__field--hoshi"
            autoFocus
            type="search"
            placeholder="Start typing..."
          />
          <label className="input__label--hoshi" />
          <button type="submit" className="button-search">
            <i uk-icon="search" />
          </button>
        </span>
      </form>
    </div>
  </div>
);

export default CommonModalSearch;
