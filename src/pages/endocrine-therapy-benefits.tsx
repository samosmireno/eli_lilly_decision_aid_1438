import EndocrineTherapyBenefitsDesktop from "@/components/endocrine-therapy-benefits/endocrine-therapy-benefits-desktop";
import { PageLayout } from "../components/page-layout";
import { Link } from "react-router-dom";
import EndocrineTherapyBenefitsMobile from "@/components/endocrine-therapy-benefits/endocrine-therapy-benefits-mobile";

export function EndocrineTherapyBenefits() {
  return (
    <PageLayout title="Clinical Benefits of Endocrine Therapy">
      <div className="mr-0 flex min-h-[calc(100vh-136px)] flex-col px-4 md:mr-16 md:px-0 lg:mt-4">
        <main className="space-y-4">
          <p className="mb-4 text-center text-xl font-semibold sm:text-2xl md:mb-8 md:text-left">
            Ask your doctor about what these findings mean to you.
          </p>

          <EndocrineTherapyBenefitsDesktop />
          <EndocrineTherapyBenefitsMobile />

          <div className="flex flex-col gap-4 pt-4 text-base font-semibold sm:text-lg md:flex-row md:items-center md:justify-end md:text-xl">
            <span className="text-center md:text-left">Skip ahead to:</span>
            <Link
              to="/endocrine-therapy-effects"
              className="inline-block w-full border border-black px-3 py-3 text-center text-base font-semibold transition-colors hover:bg-gray-100 sm:text-lg md:w-auto md:text-xl"
            >
              Endocrine Therapy: Side Effects and Why Consistency Matters
            </Link>
          </div>
        </main>

        <footer className="mt-auto pt-4 text-xs leading-5 whitespace-pre-line text-gray-700 md:text-sm">
          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <ol className="text-xs text-gray-700 md:text-sm">
              <li id="ref1" tabIndex={-1} className="inline">
                <a href="#ref1-back">
                  <span className="sr-only">Back to reference </span>1.
                </a>{" "}
                NCCN Guidelines for Patients®: Ductal Carcinoma In Situ. Version
                1. 2025. National Comprehensive Cancer Network (NCCN).
              </li>{" "}
              <li id="ref2" tabIndex={-1} className="inline">
                <a href="#ref2-back">
                  <span className="sr-only">Back to reference </span>2.
                </a>{" "}
                Early Breast Cancer Trialists' Collaborative Group (EBCTCG).
                Lancet. 2005;365:1687-1717.
              </li>{" "}
              <li id="ref3" tabIndex={-1} className="inline">
                <a href="#ref3-back">
                  <span className="sr-only">Back to reference </span>3.
                </a>{" "}
                Early Breast Cancer Trialists' Collaborative Group (EBCTCG).
                Lancet. 2005;365:1687-1717.
              </li>{" "}
              <li id="ref4" tabIndex={-1} className="inline">
                <a href="#ref4-back">
                  <span className="sr-only">Back to reference </span>4.
                </a>{" "}
                Pagani O, et al. J Clin Oncol. 2023;41:1376-1382.
              </li>
            </ol>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
