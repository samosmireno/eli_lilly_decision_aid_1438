import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

export function BaselineRiskRecurrence() {
  return (
    <PageLayout title="Baseline Risk of Recurrence with Endocrine Treatment">
      <div className="md:mr-16 lg:mt-4">
        <main>
          <ul className="list-disc text-base sm:text-lg md:space-y-6 md:text-2xl">
            <li className="ml-6">
              Most patients with lower-risk HR+ early breast cancer have
              excellent outcomes with endocrine therapy alone.
            </li>

            <li className="ml-6">
              Across multiple clinical studies, patients with low genomic risk
              had over 94% disease-free survival at 5 years on endocrine therapy
              alone.
            </li>

            <li className="ml-6">
              But{" "}
              <strong>
                some patients have a higher chance of disease recurrence,
              </strong>{" "}
              even after excellent initial treatment and may benefit from adding
              another medicine to further reduce that risk.
            </li>

            <li className="ml-6">
              Tumor size, lymph node status, grade, and genomic features (when
              indicated) help identify who may benefit from treatment beyond
              endocrine therapy.
            </li>
          </ul>

          <section className="mt-4 flex flex-row-reverse items-center justify-end gap-4 pr-3 pl-8 md:mt-12 md:flex-row md:pr-0 md:pl-0">
            <Button
              onClick={() => {}}
              className="h-12 w-12 rounded-full border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100 md:h-16 md:w-16"
            >
              +
            </Button>
            <p className="text-base font-semibold sm:text-lg md:text-xl">
              Personalized risk discussion with your doctor
            </p>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}
