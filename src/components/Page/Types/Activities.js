import { withPageWithLayout } from '@shop/hooks';

import SiteHeader from '@shop/components/Site/Header';
import SiteOverviewItem from '@shop/components/Site/Overview/Item';

const ActivitiesPage = ({ page }) => (
  <div className="main-container">
    <SiteHeader image="aanbod-multi2.jpg" />

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
              data-uk-scrollspy="target: > article; cls:uk-animation-slide-bottom-small; delay: 300;"
            >
              {page.nodes.map(node => (
                <SiteOverviewItem
                  key={node._id}
                  {...node.item?.content}
                  image="aanbod-suikerstop.jpg"
                />
              ))}

              <SiteOverviewItem
                title="Suikerstop!"
                subtitle="Groepssessies"
                href="/tmp/aanbod/suikerstop"
                image="aanbod-suikerstop.jpg"
                intro="Tijdens informatieve groepssessies informeer ik je over de effecten van gezonde voeding op je lichaam."
              />

              <SiteOverviewItem
                title="Afspraak"
                subtitle="Voedingsadvies op maat"
                href="/tmp/aanbod/afspraak"
                image="overzicht-petra.jpg"
                intro="Individuele begeleiding werkt het best en garandeert het grootste succes op lange termijn."
              />

              <SiteOverviewItem
                title="Kookworkshop"
                subtitle="Groepssessie"
                href="/tmp/aanbod/kookworkshop"
                image="overzicht-kookworkshop.jpg"
                intro="De ideale gelegenheid om kennis te maken met de gezonde keuken waar puur en seizoensgebonden primeert."
              />

              <SiteOverviewItem
                title="BiometrIQ"
                subtitle="Voedingsplan voor jou alleen"
                href="/tmp/aanbod/biometriq"
                image="overzicht-biometriq.jpg"
                intro="Start nu en krijg een gepersonaliseerd voedingsplan en bruikbare tips op basis van jouw DNA."
              />

              <SiteOverviewItem
                title="Thermomix-demo"
                subtitle="Groepssessie"
                href="/tmp/aanbod/thermomix"
                image="overzicht-thermomix.jpg"
                intro="Beleef de Thermomix ervaring bij u thuis, bij vrienden of in de kookstudio van 'Voeding in balans'."
              />

              <SiteOverviewItem
                title="Equilibre3-mentor"
                subtitle="Vervangmaaltijden"
                href="/tmp/aanbod/equilibre3"
                image="overzicht-equilibre.jpg"
                intro="Equilibre3 biedt je een dieet op maat met verantwoord
                lekkere vervangmaaltijden."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withPageWithLayout('activities', ActivitiesPage);
