//import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

export function ElevatedRiskRecurrence() {
  return (
    <PageLayout title="Elevated Risk of Recurrence">
      <div className="flex min-h-[calc(100vh-152px)] flex-col md:mr-16 lg:mt-8">
        <main className="space-y-4 md:space-y-8">
          <section className="flex flex-row items-center justify-start gap-4">
            <h2 className="text-center text-xl font-semibold sm:text-left md:text-2xl">
              What does higher risk mean in early breast cancer?
            </h2>
            {/* <Button
              onClick={() => {}}
              className="h-8 w-8 rounded-full border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100"
            >
              +
            </Button> */}
          </section>

          <ul className="list-disc text-base sm:text-xl md:space-y-3 md:text-2xl lg:space-y-6">
            <li className="ml-6">
              Even after surgery, chemotherapy, or hormone therapy, some cancers
              have features that make them more likely to come back.
              <sup>
                <a href="#ref1" id="ref1-back">
                  <span className="sr-only">Reference </span>1
                </a>
                –
                <a href="#ref3" id="ref3-back">
                  <span className="sr-only">Reference </span>3
                </a>
              </sup>
            </li>

            <li className="ml-6">
              <strong>
                Even after completing 5 to 10 years of hormone therapy, the risk
                of breast cancer returning does not completely go away.
              </strong>
              <sup>
                <a href="#ref2" id="ref2-back">
                  <span className="sr-only">Reference </span>2
                </a>
              </sup>
            </li>

            <li className="ml-6">
              Research following thousands of women with HR+ breast cancer found
              that{" "}
              <strong>some recurrences can happen up to 20 years later,</strong>{" "}
              especially in people whose cancer had spread to nearby lymph nodes
              when first diagnosed.
              <sup>
                <a href="#ref1">
                  <span className="sr-only">Reference </span>1
                </a>
                ,
                <a href="#ref2">
                  <span className="sr-only">Reference </span>2
                </a>
              </sup>
            </li>

            <li className="ml-6">
              When breast cancer recurs, it most often returns outside the
              breast, as distant (metastatic) disease (for example, in bone,
              liver, or lung), rather than only in the breast.
              <sup>
                <a href="#ref1">
                  <span className="sr-only">Reference </span>1
                </a>
                ,
                <a href="#ref2">
                  <span className="sr-only">Reference </span>2
                </a>
              </sup>
            </li>

            <li className="ml-6">
              Distant recurrence is different from cancer returning in the
              breast and usually requires ongoing systemic treatment rather than
              surgery alone.
              <sup>
                <a href="#ref3">
                  <span className="sr-only">Reference </span>3
                </a>
              </sup>
            </li>
          </ul>
        </main>
        <footer className="mt-auto pt-4 text-sm leading-5 whitespace-pre-line text-gray-700">
          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <ol className="text-sm text-gray-700">
              <li id="ref1" tabIndex={-1} className="inline">
                <a href="#ref1-back">
                  <span className="sr-only">Back to reference </span>1.
                </a>{" "}
                Pan H, et al. N Engl J Med. 2017;377(19):1836-1846.
              </li>{" "}
              <li id="ref2" tabIndex={-1} className="inline">
                <a href="#ref2-back">
                  <span className="sr-only">Back to reference </span>2.
                </a>{" "}
                Early Breast Cancer Trialists' Collaborative Group (EBCTCG), et
                al., Lancet. 2011;378(9793):771-784.
              </li>{" "}
              <li id="ref3" tabIndex={-1} className="inline">
                <a href="#ref3-back">
                  <span className="sr-only">Back to reference </span>3.
                </a>{" "}
                Burstein HJ, et al. J Clin Oncol. 2019;37(5):423-438.
              </li>
            </ol>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
