import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

export function ElevatedRiskRecurrence() {
  return (
    <PageLayout title="Elevated Risk of Recurrence">
      <article className="mr-16 space-y-8 pt-4">
        <section className="flex flex-row items-center justify-start gap-4">
          <h2 className="text-2xl font-bold">
            What does higher risk mean in early breast cancer?
          </h2>
          <Button
            onClick={() => {}}
            className="h-8 w-8 rounded-full border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100"
          >
            +
          </Button>
        </section>

        <ul className="list-disc space-y-6 text-2xl">
          <li className="ml-6">
            Even after surgery, chemotherapy, or hormone therapy, some cancers
            have features that make them more likely to come back.
            <sup>1-3</sup>
          </li>

          <li className="ml-6">
            <strong>
              Even after completing 5 to 10 years of hormone therapy, the risk
              of breast cancer returning does not completely go away.
            </strong>
            <sup>2</sup>
          </li>

          <li className="ml-6">
            Research following thousands of women with HR+ breast cancer found
            that{" "}
            <strong>some recurrences can happen up to 20 years later,</strong>{" "}
            especially in people whose cancer had spread to nearby lymph nodes
            when first diagnosed.<sup>1-2</sup>
          </li>

          <li className="ml-6">
            When breast cancer recurs, it most often returns outside the breast,
            as distant (metastatic) disease (for example, in bone, liver, or
            lung), rather than only in the breast.<sup>1-2</sup>
          </li>

          <li className="ml-6">
            Distant recurrence is different from cancer returning in the breast
            and usually requires ongoing systemic treatment rather than surgery
            alone.<sup>3</sup>
          </li>
        </ul>

        <footer className="pt-12 text-sm text-gray-700">
          1. Pan H, et al. N Engl J Med. 2017;377(19):1836-1846. 2. Early Breast
          Cancer Trialists' Collaborative Group (EBCTCG), et al., Lancet.
          2011;378(9793):771-784. 3. Burstein HJ, et al. J Clin Oncol.
          2019;37(5):423-438.
        </footer>
      </article>
    </PageLayout>
  );
}
