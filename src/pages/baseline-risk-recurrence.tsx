import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

export function BaselineRiskRecurrence() {
  return (
    <PageLayout title="Baseline Risk of Recurrence with Endocrine Treatment">
      <article className="mt-4 mr-16 space-y-12">
        <ul className="list-disc space-y-6 text-2xl">
          <li className="ml-6">
            Most patients with lower-risk HR+ early breast cancer have excellent
            outcomes with endocrine therapy alone.
          </li>

          <li className="ml-6">
            Across multiple clinical studies, patients with low genomic risk had
            over 94% disease-free survival at 5 years on endocrine therapy
            alone.
          </li>

          <li className="ml-6">
            But{" "}
            <strong>
              some patients have a higher chance of disease recurrence,
            </strong>{" "}
            even after excellent initial treatment and may benefit from adding
            another medicine to further reduce that risk
          </li>

          <li className="ml-6">
            Tumor size, lymph node status, grade, and genomic features (when
            indicated) help identify who may benefit from treatment beyond
            endocrine therapy.
          </li>
        </ul>

        <section className="mt-12 flex flex-row items-center justify-end gap-4">
          <Button
            onClick={() => {}}
            className="h-16 w-16 rounded-full border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100"
          >
            +
          </Button>
          <p className="text-xl font-semibold">
            Personalized Risk Discussion with your doctor
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
