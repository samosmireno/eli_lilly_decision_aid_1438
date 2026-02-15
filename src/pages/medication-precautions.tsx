import { PageLayout } from "../components/page-layout";

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
      "Eli Lilly Canada Inc. VERZENIO (abemaciclib) Product Monograph – Including Patient Medication Information. Toronto (ON): Eli Lilly Canada Inc.; 2025 Jul 24. Submission Control No. 293494.",
      "Health Canada. Product Monograph Guidance for Marketed Pharmaceuticals. Ottawa (ON): Health Canada; 2023.",
      "Pavlovic M, et al. Ther Adv Med Oncol. 2023;15:17588359231205621.",
      "Denduluri N, et al. J Clin Oncol. 2020;38(33):3774–3787.",
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
      "Novartis Pharmaceuticals Canada Inc. KISQALI (ribociclib) Product Monograph – Including Patient Medication Information. Montreal (QC): Novartis Pharmaceuticals Canada Inc.; 2025 Jun 12. Submission Control No. 283993. ",
      "Health Canada. Product Monograph Guidance for Marketed Pharmaceuticals. Ottawa (ON): Health Canada; 2023. ",
      "Loibl S et al. Ann Oncol. 2023;34(5):437-450. ",
      "Pavlovic M et al. Ther Adv Med Oncol. 2023;15:17588359231205621. ",
      "Denduluri N et al. J Clin Oncol. 2020;38(33):3774-3787.",
    ],
  },
};

interface MedicationPrecautionsProps {
  medicationKey: keyof typeof medPrecautions;
}

export function MedicationPrecautions({
  medicationKey,
}: MedicationPrecautionsProps) {
  return (
    <PageLayout
      title={`Other medicines and foods to be careful with while taking ${medPrecautions[medicationKey].medication}`}
    >
      <article className="mr-16 space-y-4">
        <section aria-labelledby="care-team" className="relative">
          <h2 id="care-team" className="mb-3 text-2xl font-semibold">
            Tell your care team about everything you take
          </h2>
          <ul className="list-disc pl-6 text-lg">
            <li>
              Always share a list of all medicines, supplements, or herbal
              products you use, even vitamins or things bought without a
              prescription.
            </li>
            <li>
              This helps your care team make sure {medicationKey} stays safe and
              effective for you.
            </li>
            <li>Bring your medication list to every visit</li>
          </ul>
        </section>
        <div className="flex flex-row gap-4 border-t-2 border-gray-900 pt-4">
          <section
            aria-labelledby="medicine-interactions"
            className="relative w-full max-w-3xl"
          >
            <div className="mb-4 flex items-start gap-3">
              <img
                src=" /interactions.png"
                alt="Medicine interactions"
                className="h-12 w-16 border border-gray-900"
              />
              <div>
                <h2
                  id="medicine-interactions"
                  className="mb-3 text-2xl font-semibold"
                >
                  Some medicines can affect how {medicationKey} works
                </h2>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-6 left-0"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
                <ul className="list-disc pl-6 text-lg">
                  {medPrecautions[medicationKey].effects.map(
                    (effect, index) => (
                      <li key={index}>{effect}</li>
                    ),
                  )}
                  <li>Examples include: +</li>
                </ul>
              </div>
            </div>
            <div className="border border-gray-900 bg-white p-4">
              <ul className="list-disc pl-6 text-lg">
                {medPrecautions[medicationKey].examples.map(
                  (example, index) => (
                    <li key={index}>{example}</li>
                  ),
                )}
              </ul>
            </div>
          </section>

          <section aria-labelledby="foods-to-avoid" className="relative">
            <div className="mb-4 flex items-start gap-4">
              <img
                src=" /interactions.png"
                alt="Medicine interactions"
                className="h-12 w-16 border border-gray-900"
              />
              <div>
                <h2 id="foods-to-avoid" className="text-2xl font-bold">
                  Foods to avoid
                </h2>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-6 left-0"
                >
                  <circle cx="6" cy="6" r="6" fill="black" />
                </svg>
                <ul className="list-disc pl-6 text-lg">
                  <li>
                    Avoid grapefruit and grapefruit juice (and foods containing
                    grapefruit).
                  </li>
                  <li>{medPrecautions[medicationKey].foods}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <footer
          className="mt-6"
          role="doc-bibliography"
          aria-labelledby="references-heading"
        >
          <p className="text-sm text-gray-700">
            This is not a complete list of medicines or foods that may interact
            with {medicationKey}. Always check with your healthcare provider or
            pharmacist before starting or stopping any medication or supplement.
          </p>
          <h2 id="references-heading" className="sr-only">
            References
          </h2>
          <ol className="gap-2 text-sm text-gray-700">
            <li id="ref1" tabIndex={-1} className="inline">
              <a href="#ref1-back">
                <span className="sr-only">Back to reference </span>1.
              </a>{" "}
              {medPrecautions[medicationKey].references[0]}
            </li>{" "}
            <li id="ref2" tabIndex={-1} className="inline">
              <a href="#ref2-back">
                <span className="sr-only">Back to reference </span>2.
              </a>{" "}
              {medPrecautions[medicationKey].references[1]}
            </li>{" "}
            <li id="ref3" tabIndex={-1} className="inline">
              <a href="#ref3-back">
                <span className="sr-only">Back to reference </span>3.
              </a>{" "}
              {medPrecautions[medicationKey].references[2]}
            </li>
            <li id="ref4" tabIndex={-1} className="inline">
              <a href="#ref4-back">
                <span className="sr-only">Back to reference </span>4.
              </a>{" "}
              {medPrecautions[medicationKey].references[3]}
            </li>
            {medPrecautions[medicationKey].references[4] && (
              <li id="ref5" tabIndex={-1} className="inline">
                <a href="#ref5-back">
                  <span className="sr-only">Back to reference </span>5.
                </a>{" "}
                {medPrecautions[medicationKey].references[4]}
              </li>
            )}
          </ol>
        </footer>
      </article>
    </PageLayout>
  );
}
