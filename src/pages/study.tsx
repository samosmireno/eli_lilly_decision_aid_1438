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
    <PageLayout title="Adding a CDK4/6 Inhibitor Further Reduces the Risk of Cancer Returning">
      <div className="flex min-h-[calc(100vh-156px)] flex-col md:mr-16 lg:mt-8">
        <main className="space-y-4 md:space-y-8">
          <h2 className="text-center text-base sm:text-xl md:text-2xl lg:text-left">
            <span className="font-semibold">{study.title} </span>
            <span className="italic">
              Based on the {study.shortTitle} study in HR+/HER2- early breast
              cancer
            </span>
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-5">
            <img
              src={study.image.src}
              alt={study.image.alt}
              className="h-96 w-full border border-gray-900 lg:w-120"
            />

            <div className="space-y-6">
              <div className="max-w-2xl border border-gray-900 p-4 text-base sm:text-xl md:text-2xl">
                <h3>What does this mean in real numbers?</h3>
                <p className="font-semibold md:mb-6">
                  {study.results.relativeRiskReduction} relative reduction in
                  the risk of cancer returning (IDFS) at {study.results.years}{" "}
                  years.
                </p>
                <p>
                  {study.desription.population}
                  <span className="font-semibold">
                    {study.desription.people}
                  </span>{" "}
                  {study.desription.result}
                </p>
              </div>

              <section className="flex flex-row items-center md:gap-4 md:pl-20">
                <Button
                  onClick={() => {}}
                  className="order-2 h-16 w-12 rounded-none border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100 md:order-1 md:w-16 md:rounded-full"
                >
                  +
                </Button>
                <p className="order-1 flex h-16 w-full items-center justify-center border border-gray-900 text-base font-semibold md:order-2 md:h-fit md:w-fit md:border-none md:text-left md:text-xl">
                  Common Side Effects ({study.medication})
                </p>
              </section>
            </div>
          </div>
        </main>
        <footer className="mt-auto pt-4 text-sm whitespace-pre-line text-gray-700">
          <section aria-labelledby="study-details-heading">
            <h2 id="study-details-heading" className="sr-only">
              Study Details
            </h2>
            <p>
              <span className="font-semibold">{study.footnote.bold}</span>
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
