import { PageLayout } from "../components/page-layout";

const medEligibility = {
  abemaciclib: {
    medication: "Abemaciclib (Verzenio)",
    who: [
      "Abemaciclib is used together with hormone therapy to help lower the risk of breast cancer coming back in adults with HR-positive, HER2-negative, node-positive early breast cancer who have a higher risk of recurrence after surgery.",
      "Treatment duration: 150 mg twice daily for 2 years, alongside endocrine therapy.",
    ],
    when: [
      "Abemaciclib should not be taken by anyone who is allergic to this medicine or any of its ingredients.",
    ],
    precautions: [
      "Blood clots, including pulmonary embolism, can occur with abemaciclib.",
      "Get medical help right away if you have sudden shortness of breath, chest pain, leg swelling or pain.",
    ],
    specialConsiderations: [
      "Pregnancy: There is not enough information to know if abemaciclib is safe during pregnancy. Birth control is recommended during treatment and for 3 weeks after your last dose.",
      "Breastfeeding: It is not known if abemaciclib passes into breast milk, so breastfeeding is not recommended during treatment and for 3 weeks after the last dose.",
    ],
    footer:
      "Abemaciclib is indicated in combination with endocrine therapy for the adjuvant treatment of adult patients with hormone receptor (HR)-positive, human epidermal growth factor receptor 2 (HER2)-negative, node-positive, early breast cancer at high risk of disease recurrence based on clinicopathological features. Eli Lilly Canada Inc. VERZENIO (abemaciclib) Product Monograph – Including Patient Medication Information. Toronto (ON): Eli Lilly Canada Inc.; 2025 Jul 24. Submission Control No. 293494.",
  },
  ribociclib: {
    medication: "ribociclib (Kisqali)",
    who: [
      "Ribociclib is used together with hormone therapy to help lower the risk of breast cancer coming back in adults with HR-positive, HER2-negative early breast cancer who are at risk of recurrence after surgery.",
      "Treatment duration: 400 mg daily (3 weeks on / 1 week off) for 3 years, alongside endocrine therapy",
    ],
    when: [
      "Ribociclib should not be taken by anyone who is allergic to this medicine or any of its ingredients.",
      "It should also not be used if you have certain heart rhythm problems (QT prolongation) that haven’t been evaluated by your doctor.",
    ],
    precautions: [
      "Ribociclib can sometimes cause changes in heart rhythm (QT prolongation) or liver test abnormalities.",
      "Get medical help right away if you have sudden shortness of breath, chest pain, leg swelling or pain.",
    ],
    specialConsiderations: [
      "Pregnancy: There isn’t enough information to know if ribociclib is safe during pregnancy. Birth control is recommended during treatment and for at least 3 weeks after your last dose.",
      "Breastfeeding: It isn’t known if ribociclib passes into breast milk. Breastfeeding is not recommended during treatment and for at least 3 weeks after the last dose.",
    ],
    footer:
      "In combination with an aromatase inhibitor for the adjuvant treatment of adult patients with hormone receptor (HR)-positive, human epidermal growth factor receptor 2 (HER2)-negative stage II-III early breast cancer at high risk of recurrence. In pre- or perimenopausal women, or men, the aromatase inhibitor should be combined with a luteinizing hormone-releasing hormone (LHRH) agonist. 1. Novartis Pharmaceuticals Canada Inc. KISQALI (ribociclib) Product Monograph – Including Patient Medication Information. Montreal (QC): Novartis Pharmaceuticals Canada Inc.; 2025 Jun 12. Submission Control No. 283993. 2. Slamon DJ et al. N Engl J Med. 2024;390(10):1080–1092.",
  },
};

interface medicationEligibilityProps {
  medicationKey: keyof typeof medEligibility;
}

export function MedicationEligibility({
  medicationKey,
}: medicationEligibilityProps) {
  return (
    <PageLayout title="Who can take abemaciclib (Verzenio), and when is it not recommended?">
      <div className="mt-4 mr-16 flex min-h-[calc(100vh-136px)] flex-col">
        <main className="flex gap-6">
          <img
            src="/abemaciclib-eligibility.png"
            alt="Abemaciclib eligibility"
            className="h-135 w-96 border border-black"
          />

          <div className="flex flex-1 flex-col items-start space-y-1 border-l-2 border-gray-900 pl-7">
            <section className="relative -translate-y-2">
              <h2 className="mb-1 text-2xl font-semibold">
                Who should take it
              </h2>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2 -left-8.75"
              >
                <circle cx="6" cy="6" r="6" fill="black" />
              </svg>
              <ul className="list-disc pl-6 text-lg">
                {medEligibility[medicationKey].who.map((item, index) => (
                  <li key={index} className="leading-5">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="relative">
              <h2 className="mb-1 text-2xl font-semibold">When not to take</h2>{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2 -left-8.75"
              >
                <circle cx="6" cy="6" r="6" fill="black" />
              </svg>
              <ul className="list-disc pl-6 text-lg">
                {medEligibility[medicationKey].when.map((item, index) => (
                  <li key={index} className="leading-5">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="relative">
              <h2 className="mb-1 text-2xl font-semibold">Precautions</h2>{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2 -left-8.75"
              >
                <circle cx="6" cy="6" r="6" fill="black" />
              </svg>
              <ul className="list-disc pl-6 text-lg">
                {medEligibility[medicationKey].precautions.map(
                  (item, index) => (
                    <li key={index} className="leading-5">
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-2 text-lg italic">
                ⚠️ Do not wait for your next oncology visit.
              </p>
            </section>

            <section className="relative">
              <h2 className="mb-1 text-2xl font-semibold">
                Special considerations
              </h2>{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2 -left-8.75"
              >
                <circle cx="6" cy="6" r="6" fill="black" />
              </svg>
              <ul className="list-disc pl-6 text-lg">
                {medEligibility[medicationKey].specialConsiderations.map(
                  (item, index) => (
                    <li key={index} className="leading-5">
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </section>
          </div>
        </main>

        <footer className="mt-auto text-sm leading-5 whitespace-pre-line text-gray-700">
          <p>{medEligibility[medicationKey].footer}</p>
        </footer>
      </div>
    </PageLayout>
  );
}
