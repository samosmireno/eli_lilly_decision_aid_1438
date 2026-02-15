import { PageLayout } from "../components/page-layout";

export function BrcaMutationStatus() {
  return (
    <PageLayout title="BRCA1/2 Mutation Status">
      <article className="mt-4 mr-16 space-y-6">
        <div className="flex flex-row gap-4">
          <div className="space-y-3 p-4">
            <section>
              <p className="text-2xl">
                Some people with early breast cancer carry an inherited BRCA1 or
                BRCA2 mutation, which may influence treatment discussions in the
                adjuvant setting.
              </p>
            </section>

            <section aria-labelledby="why-matters">
              <h2 id="why-matters" className="mb-5 text-xl font-bold">
                Why this matters
              </h2>
              <ul className="list-disc text-xl">
                <li className="ml-6">
                  BRCA1/2 status does not determine eligibility for CDK4/6
                  inhibitors.
                </li>
                <li className="ml-6">
                  CDK4/6 inhibitor use is based on clinicopathologic features
                  and clinical trial criteria.
                </li>
                <li className="ml-6">
                  If a BRCA1 or BRCA2 mutation is present, your doctor may also
                  discuss other approved adjuvant treatment options, such as
                  olaparib (as studied in the OlympiA trial
                  <sup>
                    <a id="ref1-back" href="#ref1">
                      <span className="sr-only">Footnote </span>*
                    </a>
                  </sup>
                  ), depending on your individual risk.
                </li>
              </ul>
            </section>

            <section aria-labelledby="talk-to-team">
              <h2 id="talk-to-team" className="mb-5 text-xl font-bold">
                Talk to your care team
              </h2>
              <ul className="list-disc text-xl">
                <li className="ml-6">
                  How your BRCA1/2 status fits into your overall treatment plan
                </li>
                <li className="ml-6">
                  Whether other treatment options should be discussed
                </li>
              </ul>
            </section>
          </div>

          <img
            src="/images/brca-mutation.png"
            alt="BRCA mutation"
            className="h-128 w-full border border-gray-900"
          />
        </div>

        <footer className="mt-3">
          <section
            role="doc-endnotes"
            aria-labelledby="footnotes-heading"
            className="text-sm text-gray-700"
          >
            <h2 id="footnotes-heading" className="sr-only">
              Footnotes
            </h2>
            <p id="ref1" tabIndex={-1}>
              <a href="#ref1-back">
                <span className="sr-only">Back to footnote </span>*
              </a>{" "}
              In a phase 3, randomized, double-blind trial (OlympiA), patients
              with high-risk, HER2-negative early breast cancer and germline
              BRCA1 or BRCA2 pathogenic or likely pathogenic variants who had
              completed local therapy and neoadjuvant or adjuvant chemotherapy
              were randomized to receive 1 year of adjuvant olaparib or placebo.
              The primary endpoint was invasive disease-free survival. At a
              prespecified interim analysis (median follow-up, 2.5 years),
              3-year invasive disease-free survival was 85.9% with olaparib and
              77.1% with placebo (hazard ratio for invasive disease or death,
              0.58; P&lt;0.001).
            </p>
          </section>

          <section
            role="doc-glossary"
            aria-labelledby="abbreviations-heading"
            className="text-sm text-gray-700"
          >
            <h2 id="abbreviations-heading" className="sr-only">
              Abbreviations
            </h2>
            <p>
              BRCA, breast cancer susceptibility gene; HER2, human epidermal
              growth factor receptor 2; HR, hazard ratio; IDFS, invasive
              disease-free survival; PARP, poly(adenosine diphosphate-ribose)
              polymerase.
            </p>
          </section>

          <section
            role="doc-bibliography"
            aria-labelledby="references-heading"
            className="text-sm text-gray-700"
          >
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <ol>
              <li tabIndex={-1}>
                Tutt ANJ, et al., New England Journal of Medicine.
                2021;384:2394-2405.
              </li>
            </ol>
          </section>
        </footer>
      </article>
    </PageLayout>
  );
}
