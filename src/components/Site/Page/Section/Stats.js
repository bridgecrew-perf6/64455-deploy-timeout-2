import { isBlank } from '@atelierfabien/next-foundation/lib/util';

const Item = ({ label, value, icon, prefix, postfix }) => {
  return (
    <div>
      <div
        className="tw-element tw-counterup uk-text-center"
        data-slctr="> h1 > span"
        data-txt=""
        data-sep=","
        data-dur="1000"
      >
        <i className={icon} />
        <h1>
          {prefix} <span>{value}</span> {postfix}
        </h1>
        <span className="tw-meta">{label}</span>
      </div>
    </div>
  );
};

const StatsSection = ({ entries = [] }) => {
  if (isBlank(entries)) return null;

  return (
    <section
      className="uk-section uk-light"
      style={{ backgroundColor: '#151515' }}
    >
      <div className="uk-container">
        <div
          className="uk-child-width-1-2@s uk-child-width-expand@m"
          data-uk-grid
          data-uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-medium; delay: 400;"
        >
          {entries.map(entry => (
            <Item key={entry._key} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
