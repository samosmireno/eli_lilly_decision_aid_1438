import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";
import { useState } from "react";

const medPrecautions = {
  abemaciclib: {
    medication: "abemaciclib (Verzenio)",
    effects: [
      "Certain drugs can raise or lower abemaciclib levels in your body. Your doctor or pharmacist will check for these and adjust your treatment if needed.",
    ],
    examples: [
      "Antifungals (ketoconazole, itraconazole, posaconazole, voriconazole)",
      "Antibiotics (clarithromycin, ciprofloxacin, rifampin)",
      "Heart and blood-pressure medicines (verapamil, diltiazem, digoxin)",
      "HIV medicines (ritonavir, saquinavir, nelfinavir)",
      "Seizure medicines (carbamazepine, phenytoin)",
      "Diabetes medicine (metformin)",
      "Stomach-acid medicines (ranitidine)",
      "Cholesterol medicines (statins such as rosuvastatin, atorvastatin)",
      "Herbal products (St. John's wort; do not use)",
    ],
    foods:
      "These can increase abemaciclib levels and the risk of side effects.",
    references: [
      "1. Eli Lilly Canada Inc. VERZENIO (abemaciclib) Product Monograph – Including Patient Medication Information. Toronto (ON): Eli Lilly Canada Inc.; 2025 Jul 24. Submission Control No. 293494. ",
      "2. Health Canada. Product Monograph Guidance for Marketed Pharmaceuticals. Ottawa (ON): Health Canada; 2023. ",
      "3. Pavlovic M, et al. Ther Adv Med Oncol. 2023;15:17588359231205621. ",
      "4. Denduluri N, et al. J Clin Oncol. 2020;38(33):3774–3787.",
    ],
  },

  ribociclib: {
    medication: "ribociclib (Kisqali)",
    effects: [
      "Certain drugs can raise or lower ribociclib levels in your body or affect your heart rhythm (QT interval).",
      "Your doctor or pharmacist will check for these and adjust your treatment if needed.",
    ],
    examples: [
      "CYP3A4 inhibitors (e.g., clarithromycin, ketoconazole, itraconazole, ritonavir, verapamil, voriconazole)",
      "CYP3A4 inducers (e.g., rifampin, carbamazepine, phenytoin, St. John's wort, do not use)",
      "Medicines that slow the heart rate (e.g., beta-blockers, digoxin)",
      "Medicines that prolong QT interval (e.g., certain antiarrhythmics, antibiotics, antipsychotics)",
      "Electrolyte-altering drugs (e.g., diuretics, laxatives, amphotericin B, corticosteroids)",
    ],
    foods:
      "These can raise ribociclib levels in your blood and increase the chance of side effects.",
    references: [
      "1. Novartis Pharmaceuticals Canada Inc. KISQALI (ribociclib) Product Monograph – Including Patient Medication Information. Montreal (QC): Novartis Pharmaceuticals Canada Inc.; 2025 Jun 12. Submission Control No. 283993. ",
      "2. Health Canada. Product Monograph Guidance for Marketed Pharmaceuticals. Ottawa (ON): Health Canada; 2023. ",
      "3. Loibl S et al. Ann Oncol. 2023;34(5):437-450. ",
      "4. Pavlovic M et al. Ther Adv Med Oncol. 2023;15:17588359231205621. ",
      "5. Denduluri N et al. J Clin Oncol. 2020;38(33):3774-3787.",
    ],
  },
};

interface MedicationPrecautionsProps {
  medicationKey: keyof typeof medPrecautions;
}

export function MedicationPrecautions({
  medicationKey,
}: MedicationPrecautionsProps) {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <PageLayout
      title={`Other medicines and foods to be careful with while taking ${medPrecautions[medicationKey].medication}`}
    >
      <div className="flex min-h-[calc(100vh-120px)] flex-col md:mr-16">
        <main className="space-y-4">
          <section aria-labelledby="care-team" className="relative">
            <h2
              id="care-team"
              className="mb-3 text-center text-xl font-semibold md:text-left md:text-2xl"
            >
              Tell your care team about everything you take
            </h2>
            <ul className="list-disc pl-6 text-base sm:text-lg">
              <li>
                Always share a list of all medicines, supplements, or herbal
                products you use, even vitamins or things bought without a
                prescription.
              </li>
              <li>
                This helps your care team make sure {medicationKey} stays safe
                and effective for you.
              </li>
              <li>Bring your medication list to every visit</li>
            </ul>
          </section>
          <div className="flex flex-col gap-4 border-gray-900 pt-4 md:flex-row md:border-t-2">
            <section
              aria-labelledby="medicine-interactions"
              className="relative w-full max-w-3xl"
            >
              <div className="flex items-start gap-3">
                <img
                  src=" /interactions.png"
                  alt="Medicine interactions"
                  className="hidden h-12 w-16 border border-gray-900 lg:block"
                />
                <div>
                  <h2
                    id="medicine-interactions"
                    className="mb-3 text-center text-xl font-semibold md:text-left md:text-2xl"
                  >
                    Some medicines can affect how {medicationKey} works
                  </h2>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-6 left-0 hidden md:block"
                  >
                    <circle cx="6" cy="6" r="6" fill="black" />
                  </svg>
                  <ul className="mb-4 list-disc pl-6 text-base sm:text-lg">
                    {medPrecautions[medicationKey].effects.map(
                      (effect, index) => (
                        <li key={index}>{effect}</li>
                      ),
                    )}
                  </ul>
                  <div className="hidden flex-col gap-2 md:flex">
                    <p className="text-base sm:text-lg">Examples include: +</p>
                    <div className="border border-gray-900 bg-white p-2 md:p-4">
                      <ul className="list-disc pl-6 text-base sm:text-lg">
                        {medPrecautions[medicationKey].examples.map(
                          (example, index) => (
                            <li key={index}>{example}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="md:hidden">
                    <Button
                      onClick={() => setShowExamples(!showExamples)}
                      className="flex w-full rounded-none border border-gray-900 bg-white text-xl font-semibold text-gray-900 hover:cursor-pointer hover:bg-gray-300 md:hidden"
                    >
                      Examples include +
                    </Button>
                    {showExamples && (
                      <div className="border border-gray-900 bg-white p-2 md:p-4">
                        <ul className="list-disc pl-6 text-base sm:text-lg">
                          {medPrecautions[medicationKey].examples.map(
                            (example, index) => (
                              <li key={index}>{example}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="foods-to-avoid" className="relative">
              <div className="mb-4 flex items-start gap-4">
                <img
                  src=" /interactions.png"
                  alt="Medicine interactions"
                  className="hidden h-12 w-16 border border-gray-900 lg:block"
                />
                <div>
                  <h2
                    id="foods-to-avoid"
                    className="mb-3 text-center text-xl font-semibold md:text-left md:text-2xl"
                  >
                    Foods to avoid
                  </h2>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-6 left-0 hidden md:block"
                  >
                    <circle cx="6" cy="6" r="6" fill="black" />
                  </svg>
                  <ul className="list-disc pl-6 text-base sm:text-lg">
                    <li>
                      Avoid grapefruit and grapefruit juice (and foods
                      containing grapefruit).
                    </li>
                    <li>{medPrecautions[medicationKey].foods}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="mt-auto pt-4 text-sm leading-5 text-gray-700">
          <section aria-labelledby="disclaimer-heading">
            <h2 id="disclaimer-heading" className="sr-only">
              Important Notice
            </h2>
            <p>
              This is not a complete list of medicines or foods that may
              interact with {medicationKey}. Always check with your healthcare
              provider or pharmacist before starting or stopping any medication
              or supplement.
            </p>
          </section>

          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <p>
              {medPrecautions[medicationKey].references.map((ref, index) => (
                <span key={index}>
                  {ref}
                  {index < medPrecautions[medicationKey].references.length - 1
                    ? " "
                    : ""}
                </span>
              ))}
            </p>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
