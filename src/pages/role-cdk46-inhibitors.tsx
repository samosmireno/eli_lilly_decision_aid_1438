import { PageLayout } from "../components/page-layout";

export function RoleCDK46Inhibitors() {
  return (
    <PageLayout title="Role of CDK4/6 inhibitors in HR+ Early Breast Cancer">
      <div className="flex min-h-[calc(100vh-136px)] flex-col md:mr-16 lg:mt-4">
        <main>
          <ul className="mb-4 list-disc text-base sm:text-xl md:mb-8 md:text-2xl">
            <li className="ml-6">
              Cancer cells grow by dividing controlled by proteins called CDK4
              and CDK6
              <sup>
                <a href="#footnote1" id="footnote1-back">
                  <span className="sr-only">Footnote </span>*
                </a>
              </sup>
              .
            </li>
            <li className="ml-6">
              CDK4/6 inhibitors prevent cancer cells from moving through the
              cell cycle.
            </li>
            <li className="ml-6">
              This helps keep cancer cells from multiplying.
            </li>
          </ul>

          <img
            src="/cdk4-6-inhibitors.png"
            alt="CDK4/6 inhibitors mechanism of action"
            className="mx-auto h-96 w-full max-w-2xl border border-gray-900"
          />
        </main>
        <footer className="mt-auto pt-4 text-sm leading-5 text-gray-700">
          <section aria-labelledby="footnotes-heading">
            <h2 id="footnotes-heading" className="sr-only">
              Footnotes
            </h2>
            <p id="footnote1" tabIndex={-1}>
              <a href="#footnote1-back">
                <span className="sr-only">Back to footnote </span>*
              </a>{" "}
              CDK4/6 inhibitors are targeted therapies that block
              cyclin-dependent kinases 4 and 6, key regulators of cell-cycle
              progression, thereby slowing or stopping cancer cell division.
              CDK4/6 inhibitors are used in combination with endocrine therapy
              in selected patients with HR+ early breast cancer to further
              reduce the risk of disease recurrence.
            </p>
          </section>

          <section aria-labelledby="abbreviations-heading">
            <h2 id="abbreviations-heading" className="sr-only">
              Abbreviations
            </h2>
            <p>
              CDK, cyclin-dependent kinase; ET, endocrine therapy; HR+, hormone
              receptor-positive.
            </p>
          </section>

          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <ol>
              <li id="ref1" tabIndex={-1} className="inline">
                1. Finn RS, et al. New England Journal of Medicine.
                2016;375:1925-1936.
              </li>{" "}
              <li id="ref2" tabIndex={-1} className="inline">
                2. Johnston SRD, et al. Journal of Clinical Oncology.
                2023;41:1376-1387.
              </li>{" "}
              <li id="ref3" tabIndex={-1} className="inline">
                3. Slamon DJ, et al. New England Journal of Medicine.
                2024;390:943-955.
              </li>
            </ol>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
