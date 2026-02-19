import EndocrineTherapyBenefitsDesktop from "@/components/endocrine-therapy-benefits/endocrine-therapy-benefits-desktop";
import { PageLayout } from "../components/page-layout";
import EndocrineTherapyBenefitsMobile from "@/components/endocrine-therapy-benefits/endocrine-therapy-benefits-mobile";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EndocrineTherapySideEffectsContent } from "@/components/endocrine-therapy-side-effects-content";

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

          <Popover>
            <PopoverTrigger asChild>
              <Button className="h-auto min-h-12 w-full rounded-none border border-black bg-white px-3 py-3 text-center text-base font-semibold whitespace-normal text-gray-900 hover:bg-gray-100 sm:text-lg md:w-auto md:text-xl">
                Endocrine Therapy: Side Effects and Why Consistency Matters
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[90vw] max-w-2xl rounded-none border border-gray-900 p-6"
              align="start"
            >
              <EndocrineTherapySideEffectsContent />
            </PopoverContent>
          </Popover>
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
