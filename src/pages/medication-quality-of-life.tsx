import { PageLayout } from "../components/page-layout";

const qualityOfLifeData = {
  abemaciclib: {
    medication: "abemaciclib (Verzenio)",
    studyName: "monarchE",
    title:
      "How abemaciclib (Verzenio) helped people maintain their quality of life in the monarchE study",
    studySummary: {
      whoStudied:
        "People with HR-positive, HER2-negative, node-positive early breast cancer at higher risk of coming back.",
      followUp: "5 years after starting treatment.",
    },
    qualityOfLifeIntro: undefined,
    results: [
      {
        text: "The overall quality of life stayed stable",
        detail:
          "compared with hormone therapy alone with no meaningful decline in physical, emotional, or social well-being.",
      },
      {
        text: "Most people continued their normal daily activities",
        detail: "while on treatment.",
      },
      {
        text: "The most common side effects were diarrhea and tiredness (fatigue),",
        detail:
          "which usually occurred early and were manageable with dose adjustments or supportive care.",
      },
      {
        text: "No new or unexpected safety issues",
        detail: "were seen with longer follow-up.",
      },
    ],
    summaryBox:
      "Most people were able to stay on treatment and continue their daily activities, with manageable side effects.",
    footer: {
      details:
        "MonarchE study design: Phase 3, randomized, open-label trial of 5,637 adults with HR-positive, HER2-negative, node-positive, high-risk early breast cancer. Participants received abemaciclib (150 mg twice daily for 2 years) + standard adjuvant endocrine therapy or endocrine therapy alone. Primary endpoint: Invasive Disease-Free Survival (IDFS). Median follow-up: 5 years (60 months). Results: 5-year IDFS rate = 83.6% with abemaciclib + ET vs 76% with ET alone; HR 0.68 (95% CI 0.60-0.77; p < 0.001). Efficacy was consistent across prespecified subgroups (age, menopausal status, region, tumour size, grade). Overall Survival data remain immature but show a favourable trend (HR 0.93; 95% CI 0.79–1.10). Quality-of-life outcomes were maintained, with no new safety findings at 5 years.\n1. Johnston SRD, Toi M, et al. Lancet Oncol. 2023;24(1):77–90. 2. Johnston SRD, Toi M, et al. J Clin Oncol. 2023;41(31):5563–5574. 3. Eli Lilly Canada Inc. VERZENIO (abemaciclib) Product Monograph – Including Patient Medication Information. Toronto (ON); 2025 Jul 24. Submission Control No. 293494. 4. Pavlovic M, et al. Ther Adv Med Oncol. 2023;15:17588359231209521. 5. Denduluri N, et al. J Clin Oncol. 2020;38(33):3774–3787.",
      references: [
        "1. Johnston SRD, Toi M, et al. Lancet Oncol. 2023;24(1):77–90. ",
        "2. Johnston SRD, Toi M, et al. J Clin Oncol. 2023;41(31):5563–5574. ",
        "3. Eli Lilly Canada Inc. VERZENIO (abemaciclib) Product Monograph – Including Patient Medication Information. Toronto (ON); 2025 Jul 24. Submission Control No. 293494. ",
        "4. Pavlovic M, et al. Ther Adv Med Oncol. 2023;15:17588359231209521. ",
        "5. Denduluri N, et al. J Clin Oncol. 2020;38(33):3774–3787.",
      ],
    },
  },
  ribociclib: {
    medication: "ribociclib (Kisqali)",
    studyName: "NATALEE",
    title:
      "How ribociclib (Kisqali) helped people maintain their quality of life in the NATALEE study",
    studySummary: {
      whoStudied:
        "People with HR-positive, HER2-negative, stage II–III early breast cancer, including some with node-negative disease at higher risk of recurrence.",
      followUp: "Median follow-up of 44 months (nearly 4 years).",
    },
    qualityOfLifeIntro:
      "Researchers followed people to understand whether taking ribociclib with hormone therapy affected their daily lives, what side effects occurred, and whether any new long-term safety issues appeared.",
    results: [
      {
        text: "Most people continued their normal daily activities",
        detail: "while taking ribociclib.",
      },
      {
        text: "The most common side effects were manageable",
        detail: "with routine monitoring and dose adjustments.",
      },
      {
        text: "Heart rhythm checks (ECGs) were performed",
        detail: "before and during treatment as standard practice.",
      },
      {
        text: "After 5 years of follow-up, no new or unexpected long-term safety concerns were identified,",
        detail:
          "and the overall safety profile remained consistent with earlier results.",
      },
      {
        text: "Long-term follow-up showed no cumulative toxicities and no new safety signals after treatment completion.",
        detail: "",
      },
    ],
    summaryBox:
      "Ribociclib helped people stay cancer-free with a manageable safety profile, with no new safety concerns seen after 5 years of follow-up.",
    footer: {
      details:
        "NATALEE Trial Design: Phase III, randomized, open-label trial of 6,101 patients with HR+/HER2− early breast cancer (stages II–III); randomization to ribociclib 400 mg daily (3 wk on / 1 wk off) for 3 years + NSAI vs NSAI alone. Primary endpoint: invasive disease-free survival (iDFS). Median follow-up 44 months. Results: No new safety signals with extended follow-up; most AEs manageable with monitoring and dose adjustment (Fasching PA et al., JAMA Oncol. 2025; e253700).",
      references: [
        "1. Slamon D et al. N Engl J Med. 2024; 390:1080–1091 (NATALEE primary report). ",
        "2. Novartis Pharmaceuticals Canada Inc. KISQALI (ribociclib) Product Monograph – Including Patient Medication Information. Montreal (QC); 2025 Jun 12. Submission Control No. 283993. ",
        "3. ClinicalTrials.gov NCT03701334. ",
        "4. Loibl S et al. Ann Oncol. 2024. ",
        " 5. Crown J, et al. ESMO Open. 2025;10(11):105858.",
      ],
    },
  },
};

interface MedicationQualityOfLifeProps {
  medicationKey: keyof typeof qualityOfLifeData;
}

export function MedicationQualityOfLife({
  medicationKey,
}: MedicationQualityOfLifeProps) {
  const data = qualityOfLifeData[medicationKey];

  return (
    <PageLayout title={data.title}>
      <div className="flex min-h-[calc(100vh-120px)] flex-col">
        <main className="flex-1">
          <section className="mb-4">
            <div className="relative">
              <h2 className="mb-3 border-b-2 border-gray-900 pb-2 pl-5 text-2xl font-semibold">
                {data.studyName.toUpperCase()} Study Summary:
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
              <ul className="list-disc pl-6 text-lg leading-5">
                <li>
                  <span className="font-semibold">Who was studied:</span>{" "}
                  {data.studySummary.whoStudied}
                </li>
                <li>
                  <span className="font-semibold">Follow-up:</span>{" "}
                  {data.studySummary.followUp}
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-10 pl-5">
            <h2 className="mb-3 text-xl font-semibold">
              Quality of Life and Tolerability
            </h2>

            {data.qualityOfLifeIntro && (
              <p className="mb-3 text-lg">{data.qualityOfLifeIntro}</p>
            )}

            <div className="space-y-2">
              <h3 className="pl-6 text-xl font-semibold">
                {medicationKey === "ribociclib"
                  ? "Results (5-year analysis):"
                  : "Results:"}
              </h3>
              <ul className="list-disc pl-12 text-lg leading-5 font-semibold">
                {data.results.map((result, index) => (
                  <li key={index}>
                    {result.text}{" "}
                    {result.detail && (
                      <span className="font-normal">{result.detail}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="mb-6 flex items-center justify-center">
            <div className="border border-black p-4">
              <p className="text-center text-xl font-semibold">
                {data.summaryBox}
              </p>
            </div>
          </div>
        </main>
        <footer className="mt-auto text-sm text-gray-700">
          <section aria-labelledby="study-design-heading">
            <h2 id="study-design-heading" className="sr-only">
              Study Design
            </h2>
            <p>{data.footer.details}</p>
          </section>

          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <p>
              {data.footer.references.map((ref, index) => (
                <span key={index}>
                  {ref}
                  {index < data.footer.references.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
