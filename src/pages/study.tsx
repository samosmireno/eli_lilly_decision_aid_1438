import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

const studies = {
  monarche: {
    title: "MonarchE +",
    shortTitle: "MonarchE",
    image: {
      src: "/monarche-study-results.png",
      alt: "monarchE study results",
    },
    results: {
      relativeRiskReduction: "26.6%",
      years: "7",
    },
    desription: {
      population: "In this high-risk patient population, about ",
      people: "6-7 fewer people out of 100",
      result:
        "had their cancer return by 7 years when abemaciclib was added to endocrine therapy, compared with endocrine therapy alone.",
    },
    medication: "abemaciclib",
    footnote: {
      bold: "Absolute risk difference: ~6-7% fewer patients had cancer return by 7 years with abemaciclib + endocrine therapy vs endocrine therapy alone.",
      text: "monarchE (primary OS / long-term efficacy analysis): At a median follow-up of 6.3 years, abemaciclib + endocrine therapy reduced the risk of death by 15.8% (OS HR 0.842; 95% CI 0.722-0.981), the risk of invasive disease-free survival (IDFS) events by 26.6% (HR 0.734; 95% CI 0.657-0.820), and the risk of distant relapse-free survival (DRFS) events by 25.4% (HR 0.746; 95% CI 0.660-0.840) vs endocrine therapy alone. Population: HR+/HER2-, node-positive, high-risk early breast cancer. Results are not directly comparable to other studies.",
      references:
        "Johnston S, et al. ESMO 2025; Abstract LBA13. Johnston S, et al. Ann Oncol. 2025 (in press). Eli Lilly Canada Inc., VERZENIO Product Monograph, 2025.",
    },
  },
  natalee: {
    title: "NATALEE +",
    shortTitle: "NATALEE",
    image: {
      src: "/natalee-study-results.png",
      alt: "NATALEE study results",
    },
    results: {
      relativeRiskReduction: "28%",
      years: "5",
    },
    desription: {
      population: "In this study population, ",
      people: "about 3 fewer people out of 100 ",
      result:
        "had their cancer return by 5 years when ribociclib was added to endocrine therapy, compared with endocrine therapy alone.",
    },
    medication: "ribociclib",
    footnote: {
      bold: "Absolute risk difference at ~5 years: ~2.8% fewer patients experienced disease recurrence with ribociclib + NSAI vs NSAI alone (iDFS 90.8% vs 88.0%).",
      text: "NATALEE study design: Phase III, randomized, open-label study of 5,101 patients with HR+/HER2- early breast cancer (stage II–III). Randomization to ribociclib 400 mg daily (3 weeks on / 1 week off) + NSAI for 3 years vs NSAI alone. Primary endpoint: iDFS. Median follow-up: 55.4 months (~5 years). Results: 5-year iDFS 90.8% vs 88.0%; HR 0.716 (95% CI 0.618–0.829). Population included node-negative and node-positive disease at high risk of recurrence.",
      references:
        " Crown J, et al., Ann Oncol. 2025; LBA14. KISQALI Product Monograph, Novartis Pharmaceuticals Canada Inc., June 2025.",
    },
  },
} as const;

interface StudyProps {
  studyKey: keyof typeof studies;
}

export function Study({ studyKey }: StudyProps) {
  const study = studies[studyKey];
  return (
    <PageLayout title="Adding a CDK4/6 Inhibitor Further Reduced the Risk of Cancer Returning">
      <div className="mt-8 mr-16 flex min-h-[calc(100vh-156px)] flex-col">
        <main className="space-y-8">
          <h2 className="text-2xl">
            <span className="font-semibold">{study.title} </span>
            <span className="italic">
              Based on the {study.shortTitle} study in HR+/HER2- early breast
              cancer
            </span>
          </h2>

          <div className="flex flex-row gap-5">
            <img
              src={study.image.src}
              alt={study.image.alt}
              className="h-96 w-120 border border-gray-900"
            />

            <div className="space-y-6">
              <div className="max-w-2xl border border-gray-900 p-4">
                <h3 className="text-2xl">
                  What does this mean in real numbers?
                </h3>
                <p className="mb-6 text-2xl font-semibold">
                  {study.results.relativeRiskReduction} relative reduction in
                  the risk of cancer returning (IDFS) at {study.results.years}{" "}
                  years.
                </p>
                <p className="text-2xl">
                  {study.desription.population}
                  <span className="font-semibold">
                    {study.desription.people}
                  </span>{" "}
                  {study.desription.result}
                </p>
              </div>

              <section className="flex flex-row items-center gap-4 pl-20">
                <Button
                  onClick={() => {}}
                  className="h-16 w-16 rounded-full border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100"
                >
                  +
                </Button>
                <p className="text-xl font-semibold">
                  Common Side Effects ({study.medication})
                </p>
              </section>
            </div>
          </div>
        </main>
        <footer className="mt-auto text-sm whitespace-pre-line text-gray-700">
          <section aria-labelledby="study-details-heading">
            <h2 id="study-details-heading" className="sr-only">
              Study Details
            </h2>
            <p>
              <strong>{study.footnote.bold}</strong>
            </p>
            <p>{study.footnote.text}</p>
          </section>

          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <p>{study.footnote.references}</p>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
