const SitePageSectionMain = () => (
  <section
    className="
          uk-section
          uk-section-large
          uk-padding-remove-vertical
          uk-margin-large-top
        "
  >
    <div className="uk-container uk-container-small">
      <div
        className="uk-child-width-1-1 uk-child-width-1-2@m"
        data-uk-grid
        data-uk-scrollspy="target: > div; cls:uk-animation-slide-top-medium; delay: 400;"
      >
        <div>
          <div className="tw-element tw-box">
            <h4>TRAJECT:</h4>
            <ul>
              <li>1 intake-gesprek + 6 opvolgconsultaties</li>

              <li>229 euro</li>
            </ul>
            <b>Wat kan je verwachten van het traject?</b>
            <ul>
              <li>
                Intake gesprek: algemene informatie, je verwachtingen,
                (medische) voorgeschiedenis.
              </li>
              <li>
                Meten is weten: meting gewicht en lichaamssamenstelling (BCM,
                BMI en metabolisme).
              </li>
              <li>Persoonlijk actieplan met voedingsadvies op maat.</li>
              <li>
                Opvolging en ondersteuning: tijdens het traject worden je
                vorderingen en verbeteringen in de lichaamssamenstelling
                nauwkeurig opgevolgd en werken we verder aan de weg naar een
                gezond gewicht, meer energie en een gezonde eetgewoonte! Onder
                meer met een motiverend gesprek, tips&tricks en receptjes die je
                helpen de juiste keuzes te maken. De afspraken worden gespreid
                over 3 maanden.
              </li>
            </ul>

            <br />
            <br />
          </div>
        </div>
        <div>
          <div className="tw-element tw-box">
            <h4>Toch liever aparte sessies?</h4>

            <ul>
              <li>intake-gesprek: 75 euro (1 uur)</li>
              <li>opvolgconsultatie: 30 euro (+- 30 minuten)</li>
            </ul>
            <b>Aanvullend EQ3 gebruiken?</b>
            <p>
              Soms is het aangewezen van te werken met EQ3-vervangmaaltijden ter
              ondersteuning van het voedingsadvies, deze worden apart
              afgerekend.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SitePageSectionMain;
