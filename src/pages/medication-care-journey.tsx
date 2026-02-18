import { PageLayout } from "../components/page-layout";
import { Image } from "lucide-react";

const careJourneyData = {
  abemaciclib: {
    title: "The care journey: for patients taking abemaciclib (Verzenio)",
    medicationName: "Abemaciclib",
    steps: [
      {
        title: "Start",
        icon: true,
        content: [
          {
            bold: "150 mg twice daily;",
            text: "take both doses at about the same time each day.",
            bullet: true,
          },
          { bold: "With or without food.", text: "", bullet: true },
        ],
      },
      {
        title: "Take",
        icon: true,
        content: [
          {
            text: "Dose reductions in stepwise manner to:",
            bullet: false,
          },
          { text: "100 mg twice daily", bullet: true },
          { text: "50 mg twice daily", bullet: true },
          { text: "stop", bullet: true },
        ],
      },
      {
        title: "Check",
        icon: true,
        content: [
          {
            bold: "Blood counts and liver tests:",
            text: "before you start, every 2 weeks for 2 months; monthly for 2 months, then as needed.",
            bullet: true,
          },
          {
            text: "Your team may add extra checks if you are feeling unwell.",
            bullet: true,
          },
        ],
      },
      {
        title: "Call",
        icon: true,
        content: [
          {
            text: "Call your doctor if you notice:",
            bullet: false,
          },
          {
            bold: "Watery stools/diarrhea",
            text: "",
            bullet: true,
          },
          {
            bold: "Signs of blood clots:",
            text: "leg swelling/pain, sudden chest pain, shortness of breath.",
            bullet: true,
          },
          {
            bold: "Fever (≥38°C),",
            text: "chills, cough, burning with urination.",
            bullet: true,
          },
          {
            bold: "New/worsening cough or shortness of breath",
            text: "(possible lung irritation).",
            bullet: true,
          },
          {
            text: "Dose interruptions, reductions, and/or permanent discontinuation are possible, as needed.",
            bullet: true,
          },
        ],
      },
      {
        title: "How long",
        icon: true,
        content: [
          {
            bold: "Up to 2 years,",
            text: "or stop sooner if cancer returns or side effects are not manageable.",
            bullet: true,
          },
          {
            text: "",
            bullet: false,
          },
          {
            text: "Hormone therapy continues to ≤5 years total.",
            bullet: false,
          },
        ],
      },
    ],
    disclaimer: "This guide does not replace your care team's advice.",
    footer: {
      abbreviations:
        "BC, breast cancer; ECG, electrocardiogram; ET, endocrine therapy; mg, milligram; °C, degrees Celsius.",
      references: [
        "1. Eli Lilly Canada Inc. VERZENIO® (abemaciclib) Product Monograph – Including Patient Medication Information. Toronto (ON); 2025 Jul 24. Submission Control No. 293494. See Warnings and Precautions (early diarrhea management; neutropenia/infection; hepatotoxicity; venous thromboembolism; interstitial lung disease/pneumonitis; embryo-fetal risk) and Monitoring and Laboratory Tests (CBC and LFTs before treatment, every 2 weeks for the first 2 months, monthly for the next 2 months, then as clinically indicated; dose modifications per PM). ",
        "2. Johnston SRD, et al. Lancet Oncol. 2023;24(1):77–90. (monarchE 5-year analysis; protocol-defined timing and efficacy). ",
        "3. Johnston SRD, et al. J Clin Oncol. 2023;41(31):5563–5574. (monarchE final efficacy/safety update). ",
        "4. Pavlovic M, et al. Ther Adv Med Oncol. 2023;15:17588359231209521. (Quality-of-life maintained; no new long-term safety signals). ",
        "5. Denduluri N, et al. J Clin Oncol. 2020;38(33):3774–3787. (Clinician guidance on CDK4/6 inhibitor AE recognition and management).",
      ],
    },
  },
  ribociclib: {
    title: "The care journey: for patients eligible for ribociclib",
    medicationName: "Ribociclib",
    steps: [
      {
        title: "Start",
        icon: true,
        content: [
          {
            bold: "400 mg once daily for 21 days, then 7 days off",
            text: "(this is one 28-day cycle)",
            bullet: true,
          },
          { bold: "With or without food.", text: "", bullet: true },
        ],
      },
      {
        title: "Take",
        icon: true,
        content: [
          {
            text: "Dose reductions in stepwise manner to:",
            bullet: false,
          },
          { text: "200 mg once daily", bullet: true },
          { text: "stop", bullet: true },
        ],
      },
      {
        title: "Check",
        icon: true,
        content: [
          {
            bold: "Labs:",
            text: "",
            bullet: false,
          },
          {
            bold: "Blood counts and liver tests:",
            text: "before you start, every 2 weeks for cycles 1-2; monthly for cycles 3-6, then as needed.",
            bullet: true,
          },
          {
            bold: "ECG:",
            text: "before you start, at day 14 of cycle 1, then needed.",
            bullet: true,
          },
        ],
      },
      {
        title: "Call",
        icon: true,
        content: [
          {
            text: "Call your doctor if you notice:",
            bullet: false,
          },
          {
            bold: "Fainting, fast/irregular heartbeat, dizziness",
            text: "(possible heart rhythm issue)",
            bullet: true,
          },
          {
            bold: "Fever (≥38°C),",
            text: "chills, cough, burning with urination.",
            bullet: true,
          },
          {
            bold: "New/worsening cough or shortness of breath",
            text: "(possible lung irritation).",
            bullet: true,
          },
          {
            text: "Dose interruptions, reductions, and/or permanent discontinuation are possible, as needed.",
            bullet: true,
          },
        ],
      },
      {
        title: "How long",
        icon: true,
        content: [
          {
            bold: "Treat for 3 years or",
            text: "until recurrence or unacceptable toxicity occurs.",
            bullet: true,
          },
          {
            text: "",
            bullet: false,
          },
          {
            text: "Hormone therapy (± ovarian suppression) continues to ≤5 years.",
            bullet: false,
          },
        ],
      },
    ],
    disclaimer: "This guide does not replace your care team's advice.",
    footer: {
      abbreviations:
        "BC, breast cancer; ECG, electrocardiogram; ET, endocrine therapy; mg, milligram; °C, degrees Celsius.",
      references: [
        "1. Novartis Pharmaceuticals Canada Inc. KISQALI® (ribociclib) Product Monograph – Including Patient Medication Information. Montreal (QC); 2025 Jun 12. Submission Control No. 283993. Refer to Sections 3 (Serious Warnings and Precautions Box) and 7 (Warnings and Precautions) for details on QT prolongation, hepatotoxicity, interstitial lung disease/pneumonitis, and hematologic monitoring. CBC, liver function tests, and ECG should be performed at baseline, Day 14 of Cycle 1, every 2 weeks for the first 2 cycles, and monthly for cycles 3–6, then as clinically indicated. ",
        "2. Hussain M, et al. Ther Adv Med Oncol. 2025; 20:17588359251326710. (NATALEE safety and monitoring summary). ",
        "3. Slamon D, et al. N Engl J Med. 2024; 390:1080–1091. (NATALEE primary analysis).",
      ],
    },
  },
};

interface MedicationCareJourneyProps {
  medicationKey: keyof typeof careJourneyData;
}

export function MedicationCareJourney({
  medicationKey,
}: MedicationCareJourneyProps) {
  const data = careJourneyData[medicationKey];

  return (
    <PageLayout title={data.title}>
      <div className="flex min-h-[calc(100vh-120px)] flex-col md:mr-16">
        <main className="flex-1">
          <h2 className="mb-3 text-center text-xl font-semibold lg:text-left">
            {data.medicationName}
          </h2>
          <div className="mb-4">
            <div className="relative mb-0 hidden items-center gap-2 lg:flex">
              {data.steps.map((step, index) => (
                <div key={index} className="relative flex-1">
                  <div
                    className={`relative z-10 -mr-11 flex h-14 items-center justify-center bg-fuchsia-400 text-white ${
                      index === data.steps.length - 1
                        ? "[clip-path:polygon(44px_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%)]"
                        : index !== 0
                          ? "[clip-path:polygon(44px_0,100%_0,calc(100%-44px)_100%,0_100%)]"
                          : "[clip-path:polygon(0_0,100%_0,calc(100%-44px)_100%,0_100%)]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold">
                        {step.title}
                      </span>
                      {step.icon && <Image className="h-9 w-11" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-2">
              {data.steps.map((step, index) => (
                <div
                  key={index}
                  className="w-full flex-1 border-black bg-white lg:min-h-96 lg:w-60 lg:border lg:p-2"
                >
                  <div className="mb-4 text-xl font-semibold lg:hidden">
                    {step.title}
                  </div>
                  <ul className="space-y-1">
                    {step.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`leading-tight ${
                          item.bullet ? "ml-6 list-disc" : "list-none"
                        }`}
                      >
                        {item.bold && (
                          <span className="font-semibold">{item.bold}</span>
                        )}
                        {item.bold && item.text && " "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">{data.disclaimer}</p>
          </div>
        </main>
        <footer className="mt-auto pt-4 text-sm text-gray-700">
          <section aria-labelledby="abbreviations-heading">
            <h2 id="abbreviations-heading" className="sr-only">
              Abbreviations
            </h2>
            <p>{data.footer.abbreviations}</p>
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
