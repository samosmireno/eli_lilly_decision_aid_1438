import { PageLayout } from "../components/page-layout";

export function EndocrineTherapySideEffects() {
  return (
    <PageLayout title="Endocrine Therapy: Side Effects and Why Consistency Matters">
      <div className="flex min-h-[calc(100vh-168px)] flex-col md:mr-16 lg:mt-12">
        <main className="space-y-4 text-center sm:text-left">
          <section aria-labelledby="side-effects">
            <h2
              id="side-effects"
              className="mb-4 text-xl font-semibold md:mb-6 md:text-2xl"
            >
              Endocrine therapy-related side effects
              <sup>
                <a id="ref1-back" href="#ref1">
                  <span className="sr-only">Reference </span>1
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
            <h2
              id="adherence"
              className="mb-3 text-xl font-semibold md:text-2xl"
            >
              Why adherence is important?
            </h2>
            <p className="text-base leading-relaxed sm:text-xl md:text-2xl">
              Endocrine therapy works best when it is taken consistently and for
              the recommended duration. Studies show that staying on treatment
              as prescribed is associated with a lower risk of breast cancer
              recurrence over the long term.
              <sup>
                <a href="#ref2" id="ref2-back">
                  <span className="sr-only">Reference </span>2
                </a>
                ,
              </sup>
              <sup>
                <a href="#ref3" id="ref3-back">
                  <span className="sr-only">Reference </span>3
                </a>
              </sup>{" "}
              Managing side effects early and discussing challenges with your
              care team can help you stay on therapy and get the full benefit.
            </p>
          </section>
        </main>
        <footer className="mt-auto pt-4 text-sm leading-5 whitespace-pre-line text-gray-700">
          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <ol className="flex flex-wrap text-sm text-gray-700">
              <li id="ref1" tabIndex={-1}>
                <a href="#ref1-back">
                  <span className="sr-only">Back to reference </span>1.
                </a>{" "}
                Cucciniello L, et al. Cancer Treat Rev. 2023;120:102624.
              </li>{" "}
              <li id="ref2" tabIndex={-1}>
                <a href="#ref2-back">
                  <span className="sr-only">Back to reference </span>2.
                </a>{" "}
                Eliassen FM, et al. BMC Cancer. 2023;23(1):625.
              </li>{" "}
              <li id="ref3" tabIndex={-1}>
                <a href="#ref3-back">
                  <span className="sr-only">Back to reference </span>3.
                </a>{" "}
                Chang CY, et al. Br J Cancer. 2024;130(12):1943-1950.
              </li>
            </ol>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
