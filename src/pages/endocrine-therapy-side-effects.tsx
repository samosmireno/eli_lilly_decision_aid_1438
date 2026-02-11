import { PageLayout } from "../components/page-layout";

export function EndocrineTherapySideEffects() {
  return (
    <PageLayout title="Endocrine Therapy: Side Effects and Why Consistency Matters">
      <article className="mt-8 mr-16 space-y-4">
        <section aria-labelledby="side-effects">
          <h2 id="side-effects" className="mb-6 text-2xl font-bold">
            Endocrine therapy-related side effects
            <sup id="ref1-back">
              <a href="#ref1" aria-label="Reference 1">
                1
              </a>
            </sup>
          </h2>
          <img
            src="/images/side-effects.png"
            alt="Side effects"
            className="h-80 w-full border border-gray-900"
          />
        </section>

        <section aria-labelledby="adherence">
          <h2 id="adherence" className="mb-3 text-2xl font-bold">
            Why adherence is important?
          </h2>
          <p className="text-2xl leading-relaxed">
            Endocrine therapy works best when it is taken consistently and for
            the recommended duration. Studies show that staying on treatment as
            prescribed is associated with a lower risk of breast cancer
            recurrence over the long term.
            <sup id="ref2-back">
              <a href="#ref2" aria-label="Reference 2">
                2
              </a>
            </sup>
            <sup>
              ,
              <a href="#ref3" aria-label="Reference 3" id="ref3-back">
                3
              </a>
            </sup>{" "}
            Managing side effects early and discussing challenges with your care
            team can help you stay on therapy and get the full benefit.
          </p>
        </section>

        <footer className="mt-4" role="doc-endnotes">
          <p className="text-sm text-gray-700">
            <span id="ref1">
              <a
                href="#ref1-back"
                aria-label="Go back to reference 1"
                className="cursor-default"
              >
                1.
              </a>{" "}
              Cucciniello L, et al. Cancer Treat Rev. 2023;120:102624.
            </span>{" "}
            <span id="ref2">
              <a
                href="#ref2-back"
                aria-label="Go back to reference 2"
                className="cursor-default"
              >
                2.
              </a>{" "}
              Eliassen FM, et al. BMC Cancer. 2023;23(1):625.
            </span>{" "}
            <span id="ref3">
              <a
                href="#ref3-back"
                aria-label="Go back to reference 3"
                className="cursor-default"
              >
                3.
              </a>{" "}
              Chang CY, et al. Br J Cancer. 2024;130(12):1943-1950.
            </span>
          </p>
        </footer>
      </article>
    </PageLayout>
  );
}
