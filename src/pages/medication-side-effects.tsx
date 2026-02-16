import { PageLayout } from "../components/page-layout";

const medSideEffects = {
  abemaciclib: {
    title: "Common Side Effects (abemaciclib)",
    subtitle:
      "The most common severe (grade 3 or higher) side effects seen in people receiving abemaciclib + ET in the monarchE trial were:",
    image: {
      src: "/abemaciclib-side-effects.png",
      alt: "Abemaciclib side effects illustration",
    },
    sideEffects: [
      {
        category: "Infections:",
        items: ["Serious infections occurred in about 5 our of 10 people"],
      },
      {
        category: "Blood-related changes:*",
        items: [
          "Low white blood cells (neutropenia) in about 20 out of 100 people",
          "Can increase the risk of infection",
          "Blood counts are checked regularly",
        ],
      },
      {
        category: "Diarrhea:*",
        items: [
          "In about 80 out of 100 people (any severity)",
          "Usually begins early in treatment",
          "Most cases are mild to moderate",
          "Early use of loperamide and fluids helps prevent worsening",
        ],
      },
      {
        category: "Other commonly reported symptoms",
        items: ["Fatigue (feeling tired or low energy)"],
      },
    ],
    importantSymptoms: [
      "Persistent diarrhea, signs of dehydration",
      "Fever, chills, sore throat (possible infection)",
      "Shortness of breath, chest pain, leg swelling (possible blood clot)",
      "New or worsening cough or breathing problems (possible lung inflammation)",
    ],
    bottomMessage:
      "Most side effects were manageable, reversible, and improved with early reporting, helping many people stay on treatment.",
    footer: {
      abbreviations: "ET, endocrine therapy",
      footnote:
        "*Reported grade ≥3 infections were ~5% in the abemaciclib + ET arm vs 3% in ET alone. †Reported grade ≥3 hematologic and GI events were < 1% in the ET alone group. Eli Lilly Canada Inc. VERZENIO (abemaciclib) Product Monograph. Section 7 – Warnings and Precautions (diarrhea/early management; neutropenia & infection risk; hepatotoxicity; venous thromboembolism; interstitial lung disease/pneumonitis; embryo-fetal risk). Section 8 – Adverse Reactions (frequency and severity of common and serious AEs). Safety profile remained consistent with longer-term follow-up, with no new or delayed safety concerns reported; side effects were manageable with early intervention.",
      references: [
        "Johnston S, et al. ESMO 2025; Abstract LBA13. Johnston S, et al. Ann Oncol. 2025 (in press). Eli Lilly Canada Inc., VERZENIO Product Monograph – Including Patient Medication Information. Toronto (ON); 2025 Jul 24. Submission Control No. 293494.",
      ],
    },
  },
  ribociclib: {
    title: "Common Side Effects (ribociclib)",
    subtitle:
      "The most common severe (grade 3 or higher) side effects seen in people receiving ribociclib + aromatase inhibitor (AI) in the NATALEE trial were:",
    image: {
      src: "/ribociclib-side-effects.png",
      alt: "Ribociclib side effects illustration",
    },
    sideEffects: [
      {
        category: "Blood counts:*",
        items: [
          "Low white blood cells (neutropenia) in about 42 out 100 people",
          "Can increase the risk of infection",
          "Blood counts are checked regularly",
        ],
      },
      {
        category: "Liver changes:*",
        items: [
          "higher ALT in about 6 out of 100 of people",
          "higher AST in about 4 out of 100 people",
          "Usually found on blood tests before symptoms occur",
        ],
      },
    ],
    importantSymptoms: [
      "Fever, chills, sore throat (possible infection)",
      "Yellowing of skin or eyes, dark urine, severe nausea (possible liver problem)",
      "Shortness of breath, chest pain, leg swelling (possible blood clot)",
      "Dizziness, fainting, or irregular heartbeat.",
    ],
    bottomMessage:
      "No new safety concerns were identified after 5 years of follow-up.*",
    footer: {
      abbreviations:
        "AI, aromatase inhibitor; ALT, alanine aminotransferase; AST, aspartate transaminase.",
      footnote:
        "*Reported Grade ≥ 3 adverse events occurred in 58 % of patients receiving ribociclib + endocrine therapy and 18 % of those receiving endocrine therapy alone NATALEE trial design: Phase III, randomized, open-label study of 5,101 adults with HR+/HER2− stage II–III early breast cancer, including some with node-negative disease at higher risk of recurrence. Participants received ribociclib 400 mg daily (3 weeks on / 1 week off) for 3 years + NSAI. Most common grade ≥3 AEs were neutropenia (42%), ALT increase (6%), AST increase (4%). Serious AEs occurred in 14.8%; treatment discontinuation due to AEs was 20%. At ~5-year follow-up, no new safety concerns were identified.",
      references: [
        "Fasching PA et al. JAMA Oncol. 2025; ",
        "Slamon D et al. N Engl J Med. 2024; ",
        "Loibl S et al. Ann Oncol. 2024; ",
        "KISQALI Product Monograph, Novartis Pharmaceuticals Canada Inc., 2025; NCT03701334.",
      ],
    },
  },
};

interface MedicationSideEffectsProps {
  medicationKey: keyof typeof medSideEffects;
}

export function MedicationSideEffects({
  medicationKey,
}: MedicationSideEffectsProps) {
  const data = medSideEffects[medicationKey];

  return (
    <PageLayout title={data.title}>
      <div className="mr-16 flex min-h-[calc(100vh-120px)] flex-col space-y-3">
        <main>
          <h2 className="text-2xl font-semibold">{data.subtitle}</h2>

          <div className="flex flex-row gap-4">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="h-96 w-60 border border-black"
            />

            {/* Middle: Side effects list */}
            <div className="flex-1 space-y-2 p-4">
              {data.sideEffects.map((effect, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{effect.category}</h3>
                  <ul className="list-disc pl-6 text-lg leading-5">
                    {effect.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-2 border border-gray-900 p-4">
                <div>
                  <h3 className="mb-2 text-xl leading-6 font-semibold">
                    <span className="text-xl">⚠</span> Important symptoms - seek
                    medical care right away
                  </h3>
                  <ul className="list-disc border border-gray-900 p-2 pl-6 text-lg leading-5">
                    {data.importantSymptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>

                <div className="border border-gray-900 p-2">
                  <p className="text-lg leading-5 font-semibold">
                    Do not wait for your next oncology visit. Contact your
                    clinic or go to the ER.
                  </p>
                </div>
              </div>
              <div className="border border-gray-900 p-4">
                <p className="text-lg leading-5">{data.bottomMessage}</p>
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-auto text-sm leading-5 whitespace-pre-line text-gray-700">
          <p>{data.footer.abbreviations}</p>
          <p>{data.footer.footnote}</p>
          <ol>
            {data.footer.references.map((ref, index) => (
              <li key={index} className="inline">
                {ref}
              </li>
            ))}
          </ol>
        </footer>
      </div>
    </PageLayout>
  );
}
