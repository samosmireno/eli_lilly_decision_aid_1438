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

export default function TreatmentDurations() {
  return (
    <PageLayout title="Understanding Treatment Durations">
      <div className="flex min-h-[calc(100vh-140px)] flex-col lg:mt-5">
        <main>
          <img
            src="/placeholder-image.jpg"
            alt="Treatment duration visualization"
            className="h-96 w-full border border-gray-900"
          />
          <div className="mt-4 text-base md:mt-8 md:text-xl">
            <ul className="list-disc pl-6">
              <li>
                <span className="font-semibold">Endocrine therapy:</span> is
                usually given for at least 5 (and sometimes up to 10 years)
              </li>
              <li>
                <span className="font-semibold">CDK4/6 inhibitors:</span> are
                used along with endocrine therapy for a specific period of time,
                if indicated
              </li>
              <li>
                <span className="font-semibold">Bone-marrow therapy:</span>{" "}
                Bone-marrow therapy may be used for 2-3 years to help protect
                bones
              </li>
            </ul>
            <p>Treatment plans should be personalized to each patient.</p>
          </div>
        </main>
        <footer className="mt-auto pt-4 text-sm leading-5 text-gray-700">
          <section aria-labelledby="references-heading">
            <h2 id="references-heading" className="sr-only">
              References
            </h2>
            <p>
              {references.map((ref, index) => (
                <span key={index}>
                  {ref}
                  {index < references.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </section>
        </footer>
      </div>
    </PageLayout>
  );
}
