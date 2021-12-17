import { useMemo, useState } from 'react';

import { isBlank, uniqueId } from '@atelierfabien/next-foundation/lib/util';

import { PortableText } from '@shop/components/Sanity';

import { urlFor } from '@app/hooks/image';

const REGEX =
  /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)&?/;

const VideoSection = ({ title, subtitle, body, link, image }) => {
  const [id] = useState(() => uniqueId('video-'));

  const imageUrl = useMemo(
    () => (image ? urlFor(image).width(1600).auto('format').url() : null),
    [image]
  );

  const embedId = useMemo(
    () => (typeof link === 'string' ? (link.match(REGEX) ?? [])[1] : null),
    [link]
  );

  if (isBlank(embedId)) return null;

  return (
    <section
      className="uk-section uk-section-large uk-light uk-background-cover"
      data-overlay="0.4"
      style={{
        backgroundColor: '#151515',
        backgroundImage: imageUrl ? `url('${imageUrl}')` : null,
      }}
    >
      <div className="uk-container">
        <div data-uk-scrollspy="target: > .tw-heading; cls:uk-animation-slide-bottom-small; delay: 300">
          <div className="tw-element uk-height-medium-min tw-heading uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            {subtitle && (
              <h5 className="tw-sub-title" style={{ opacity: 0.8 }}>
                {subtitle}
              </h5>
            )}
            {title && <h3>{title}</h3>}
            {body && <PortableText blocks={body} />}
            <a
              href="#"
              className="uk-margin-top tw-video-icon"
              data-uk-toggle={`target: #${id}`}
            >
              <i className="ion-play" />
            </a>
            <div id={id} className="uk-flex-top" data-uk-modal="center: true">
              <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                <button
                  className="uk-modal-close-outside"
                  type="button"
                  data-uk-close
                />
                <iframe
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`}
                  width="1920"
                  height="1080"
                  frameBorder="0"
                  allowFullScreen
                  data-uk-responsive
                  data-uk-video="autoplay: true, automute: true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
