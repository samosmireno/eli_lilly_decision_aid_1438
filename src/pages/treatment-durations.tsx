import { PageLayout } from "../components/page-layout";

const references = [
  "1. NCCN Guidelines for Patients®: Ductal Carcinoma In Situ, Version 1. 2025 (Invasive Ductal Carcinoma version cited as per NCCN).",
  "2. Johnston S, et al. ESMO 2025; Abstract LBA13.",
  "3. Johnston S, et al. Ann Oncol. 2025 (in press).",
  "4. Eli Lilly Canada Inc., VERZENIO Product Monograph, 2025.",
  "5. Crown J, et al., Ann Oncol. 2025; LBA14.",
  "6. KISQALI Product Monograph, Novartis Pharmaceuticals Canada Inc., June 2025.",
  "7. McGee S, et al. J Bone Oncol. 2021;27:100351.",
];
const footnotes = [
  "*Endocrine therapy is typically administered for at least 5 years and may be extended to up to 10 years based on recurrence risk and tolerability.",
  "†CDK4/6 inhibitors are used in combination with endocrine therapy for a defined duration in selected patients.",
  "‡Bone-modifying therapy may be considered for 2-3 years in appropriate patients. Treatment decisions should be individualized.",
];

export default function TreatmentDurations() {
  return (
    <PageLayout title="Treatment Durations">
      <div className="mt-5 flex min-h-[calc(100vh-140px)] flex-col">
        <main>
          <img
            src="/placeholder-image.jpg"
            alt="Treatment duration visualization"
            className="h-120 w-full border border-gray-900"
          />
        </main>
        <footer className="mt-auto text-sm leading-5 whitespace-pre-line text-gray-700">
          <h2 className="sr-only">Footnotes</h2>
          <ol>
            {footnotes.map((note, index) => (
              <li key={index} className="inline">
                {note}
              </li>
            ))}
          </ol>
          <h2 className="sr-only">References</h2>
          <ol>
            {references.map((ref, index) => (
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
