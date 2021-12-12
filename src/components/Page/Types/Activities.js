import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';
import SiteOverviewItem from '@shop/components/Site/Overview/Item';

const ActivitiesPage = ({ page }) => (
  <div className="main-container">
    <SiteHeader page={page} />
    <section className="uk-section uk-section-blog">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="content-area uk-width-expand">
            <div
              className="
              tw-element tw-blog
              grid-blog
              uk-child-width-1-2@s uk-child-width-1-3@m
            "
              data-uk-grid
              data-uk-height-match=".entry-intro"
              data-uk-scrollspy="target: > article; cls:uk-animation-slide-bottom-small; delay: 300;"
            >
              {page.nodes.map(node => (
                <SiteOverviewItem
                  key={node._id}
                  {...node.item?.content}
                  image={node.item.image}
                  href={node.path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withPageWithLayout('activities', ActivitiesPage);
