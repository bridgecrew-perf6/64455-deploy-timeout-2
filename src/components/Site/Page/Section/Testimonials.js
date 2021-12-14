import { formatDate, isBlank } from '@atelierfabien/next-foundation/lib/util';
import { PortableText } from '@shop/components/Sanity';

const Item = ({ name, date, comment }) => (
  <div className="comment">
    <div className="comment-text comment-plain">
      <h3 className="author">{name}</h3>
      {date && <span className="tw-meta">{formatDate(date)}</span>}
      <p>{comment}</p>
    </div>
  </div>
);

const TestimonialsSection = ({ title, subtitle, body, entries = [] }) => {
  if (isBlank(entries)) return null;

  return (
    <section className="uk-section">
      <div className="uk-container uk-container-small">
        {(title || subtitle) && (
          <div className="tw-element tw-heading uk-text-left">
            <h4>{title}</h4>
            {subtitle && <p className="subtitle">{subtitle}</p>}
            {body && <PortableText blocks={body} />}
          </div>
        )}
        <div className="entry-comments">
          <div className="comment-list clearfix">
            {entries.map(entry => (
              <Item key={entry._key} {...entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
