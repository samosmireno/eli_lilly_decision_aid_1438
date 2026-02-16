import { PageLayout } from "../components/page-layout";

const studyResults = {
  abemaciclib: {
    medication: "abemaciclib (Verzenio)",
    study: "monarchE",
    who: "People with HR-positive, HER2-negative, node-positive early breast cancer at higher risk of recurrence",
    followUp: "7",
    resultsPercentage: ["26.6%", "25.4%"],
    results: [
      " more likely to stay cancer-free and live longer with abemaciclib + hormone therapy vs hormone therapy alone, with continued benefit 2 years after stopping abemaciclib",
      " reduced chance of cancer spreading when adding abemaciclib to hormone therapy, with continued benefit 2 years after stopping abemaciclib.",
    ],
    details: [
      "Absolute risk differences at ~7 years: IDFS: ~6–7% fewer people had cancer return with abemaciclib + HT vs HT alone; OS: ~3–4% more people were alive with abemaciclib + HT vs HT alone.",
      "Absolute risk difference at ~7 years: ~4–5% fewer patients had distant spread (metastatic recurrence) with abemaciclib + endocrine therapy vs endocrine therapy alone.",
    ],
    studyDesign:
      "MonarchE study design: Phase 3, randomized, open-label trial of 5,637 adults with HR-positive, HER2-negative, node-positive, high-risk early breast cancer. Participants received abemaciclib (150 mg twice daily for 2 years) + standard adjuvant endocrine therapy or endocrine therapy alone. Primary endpoint: Invasive Disease-Free Survival (IDFS). Median follow-up: ~7 years (76 months). Results: 7-yr IDFS HR 0.734 (95% CI 0.657–0.820). Overall Survival (OS) HR 0.842 (95% CI 0.722–0.981). Benefit continued after treatment completion at 2 years. Efficacy results are not directly comparable to other studies.",
    references: [
      "Johnston S, et al. ESMO 2025 Annual Congress; Abstract LBA13. ",
      "Johnston S, et al. Ann Oncol. 2025 In press.",
      "Eli Lilly Canada Inc. VERZENIO (abemaciclib) Product Monograph – Including Patient Medication Information. Toronto (ON); 2025 Jul 24. Submission Control No. 293494.",
    ],
  },
  ribociclib: {
    medication: "ribociclib (Kisqali)",
    study: "NATALEE",
    who: "People with HR-positive, HER2-negative, stage II–III early breast cancer, including some with node-negative disease at higher risk of recurrence.",
    followUp: "5",
    resultsPercentage: ["28%", "29%"],
    results: [
      " of people who took ribociclib with hormone therapy were more likely to stay cancer-free than those who took hormone therapy alone, with continued benefit after 3 years of stopping ribociclib.",
      " reduced chance of cancer spreading when adding ribociclib to hormone therapy, with continued benefit 3 years after stopping ribociclib.",
    ],
    details: [
      "Absolute risk difference at ~5 years: ~4.5% more people were cancer-free with ribociclib + hormone therapy vs hormone therapy alone (85.5% vs 81.0%).",
      "Absolute risk difference at ~5 years: ~6.6% more people were free of distant cancer spread with ribociclib + hormone therapy vs hormone therapy alone (89.1% vs 82.5%).",
    ],
    studyDesign:
      "NATALEE study design: Phase 3, randomized, open-label trial of 5,101 adults with HR-positive, HER2-negative, stage II–III early breast cancer, including some with node-negative disease at higher risk of recurrence. Participants received ribociclib 400 mg once daily (3 weeks on/1 week off) with a non-steroidal aromatase inhibitor (NSAI) for 3 years vs NSAI alone. Primary endpoint: invasive disease-free survival (IDFS). At ~5-year follow-up, IDFS was 88.5% with ribociclib + hormone therapy vs 83.6% with hormone therapy alone, corresponding to ~29% relative reduction in the risk of recurrence; benefit was consistent across subgroups, and no new safety concerns were identified.",
    references: [
      "Crown J, et al. ESMO Open. 2025;10(11):105858. ",
      "Novartis Pharmaceuticals Canada Inc., KISQALI Product Monograph, 2025. ",
      "Slamon D, et al. N Engl J Med. 2024. ClinicalTrials.gov Identifier: NCT03701334.",
    ],
  },
};

interface StudyResultsProps {
  medicationKey: keyof typeof studyResults;
  part: 1 | 2;
}

export function StudyResults({ medicationKey, part }: StudyResultsProps) {
  const study = studyResults[medicationKey];
  return (
    <PageLayout
      title={`How ${study.medication} helped people stay cancer-free in the ${study.study} study`}
    >
      <div className="mr-16 flex min-h-[calc(100vh-120px)] flex-col space-y-4">
        <main className="space-y-4">
          <section aria-labelledby="study-summary" className="relative">
            <h2
              id="study-summary"
              className="mb-3 border-b-2 border-gray-900 pb-2 pl-5 text-2xl font-semibold"
            >
              {study.study} Study Summary:
            </h2>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-8.5 left-0"
            >
              <circle cx="6" cy="6" r="6" fill="black" />
            </svg>
            <ul className="list-disc pl-11 text-lg">
              <li>
                <span className="font-semibold">Who was studied:</span> People
                with HR-positive, HER2-negative, node-positive early breast
                cancer at higher risk of coming back.
              </li>
              <li>
                <span className="font-semibold">Follow-up:</span> ~
                {study.followUp} years after starting treatment.
              </li>
            </ul>
          </section>

          <section aria-labelledby="staying-cancer-free" className="pl-5">
            <h2 id="staying-cancer-free" className="mb-2 text-xl font-semibold">
              Staying Cancer-Free
            </h2>
            <ul className="mb-14 list-disc pl-6 text-lg">
              <li>
                Invasive Disease-Free Survival (IDFS) = how long people lived
                without the cancer coming back or a new cancer starting.
              </li>
              <li>
                <span className="font-semibold">Results</span> ({study.followUp}
                -year analysis):
              </li>
            </ul>

            <div className="mb-6 flex w-full justify-center">
              <div className="max-w-3xl border border-gray-900 p-4">
                <ul className="list-disc pl-6 text-lg">
                  <li>
                    <span className="font-semibold">
                      {study.resultsPercentage[part - 1]}
                    </span>{" "}
                    <span className="italic">{study.results[part - 1]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <footer className="mt-auto text-sm leading-5 text-gray-700">
          <section aria-labelledby="study-details-heading">
            <h2 id="study-details-heading" className="sr-only">
              Study Details
            </h2>
            <p>{study.details[part - 1]}</p>
            <p>{study.studyDesign}</p>
          </section>

          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <p>
              {study.references.map((ref, index) => (
                <span key={index}>
                  {ref}
                  {index < study.references.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
