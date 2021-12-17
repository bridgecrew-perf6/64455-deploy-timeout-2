import { useRef } from 'react';

import { isBlank } from '@atelierfabien/next-foundation/lib/util';

import { useCountUp } from '@app/hooks/site';

const Item = ({ label, value, icon, prefix, postfix }) => {
  const ref = useRef();

  useCountUp(ref, { value });

  return (
    <div>
      <div className="tw-element tw-counterup uk-text-center">
        <i className={icon} />
        <h1>
          {prefix} <span ref={ref}>{value}</span> {postfix}
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
      className="uk-section uk-light tm-section-stats"
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
