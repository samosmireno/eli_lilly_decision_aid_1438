export function EndocrineTherapySideEffectsContent() {
  return (
    <div className="flex max-h-screen flex-col overflow-y-hidden sm:max-h-[80vh]">
      <div className="space-y-4 text-left">
        <section aria-labelledby="side-effects">
          <h2
            id="side-effects"
            className="mb-4 text-lg font-semibold md:text-xl"
          >
            Endocrine therapy-related side effects
            <sup>
              <a
                id="side-effects-popup-ref1-back"
                href="#side-effects-popup-ref1"
              >
                <span className="sr-only">Reference </span>1
              </a>
            </sup>
          </h2>
          <img
            src="/images/side-effects.png"
            alt="Side effects"
            className="h-64 w-full border border-gray-900 object-contain"
          />
        </section>

        <section aria-labelledby="adherence">
          <h2 id="adherence" className="mb-3 text-lg font-semibold md:text-xl">
            Why adherence is important?
          </h2>
          <p className="text-sm leading-relaxed md:text-base">
            Endocrine therapy works best when it is taken consistently and for
            the recommended duration. Studies show that staying on treatment as
            prescribed is associated with a lower risk of breast cancer
            recurrence over the long term.
            <sup>
              <a
                href="#side-effects-popup-ref2"
                id="side-effects-popup-ref2-back"
              >
                <span className="sr-only">Reference </span>2
              </a>
              ,
            </sup>
            <sup>
              <a
                href="#side-effects-popup-ref3"
                id="side-effects-popup-ref3-back"
              >
                <span className="sr-only">Reference </span>3
              </a>
            </sup>{" "}
            Managing side effects early and discussing challenges with your care
            team can help you stay on therapy and get the full benefit.
          </p>
        </section>
      </div>

      <section
        aria-labelledby="references-heading"
        className="pt-4 text-xs leading-5 text-gray-700"
      >
        <h2 id="references-heading" className="sr-only">
          References
        </h2>
        <ol className="flex flex-col text-xs text-gray-700">
          <li id="side-effects-popup-ref1" tabIndex={-1}>
            <a href="#side-effects-popup-ref1-back">
              <span className="sr-only">Back to reference </span>1.
            </a>{" "}
            Cucciniello L, et al. Cancer Treat Rev. 2023;120:102624.
          </li>
          <li id="side-effects-popup-ref2" tabIndex={-1}>
            <a href="#side-effects-popup-ref2-back">
              <span className="sr-only">Back to reference </span>2.
            </a>{" "}
            Eliassen FM, et al. BMC Cancer. 2023;23(1):625.
          </li>
          <li id="side-effects-popup-ref3" tabIndex={-1}>
            <a href="#side-effects-popup-ref3-back">
              <span className="sr-only">Back to reference </span>3.
            </a>{" "}
            Chang CY, et al. Br J Cancer. 2024;130(12):1943-1950.
          </li>
        </ol>
      </section>
    </div>
  );
}
