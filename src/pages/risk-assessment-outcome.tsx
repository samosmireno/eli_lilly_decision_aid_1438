import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";
import { usePatientCharacteristics } from "@/contexts/patient-characteristics-context";

const outcomes = [
  {
    title: "Intermediate/high elevated risk of recurrence",
    description:
      "Based on the information you entered, your patient's features suggest an intermediate/high elevated risk of recurrence*",
    note: "*As defined by the monarchE and/or NATALEE clinical trials.",
    action:
      "Click here to learn how adding a CDK4/6 inhibitor to endocrine therapy may help reduce your risk.",
  },
  {
    title: "Low risk of recurrence",
    description:
      "Based on the information you entered, your patient's features suggests a low elevated risk of recurrence*",
    note: "*As defined by the monarchE and/or NATALEE clinical trials.",
    action:
      "Click here to learn why continuing endocrine therapy is recommended for you.",
  },
];

export function RiskAssessmentOutcome() {
  const { stage } = usePatientCharacteristics();
  const outcome = outcomes[stage === "unknown" || !stage ? 1 : 0];

  return (
    <PageLayout title="Risk Assessment Outcome">
      <div className="flex items-center justify-center md:mr-16 md:pt-24">
        <main className="max-w-2xl">
          <div className="flex flex-col items-center px-8">
            <h2 className="mb-3 text-center text-xl font-bold sm:text-2xl md:text-3xl">
              {outcome.title}
            </h2>
            <div className="flex w-full flex-col items-center justify-center gap-8 border border-black p-4 md:p-8">
              <div>
                <p className="text-center text-lg sm:text-xl md:text-2xl">
                  <span className="font-semibold">{outcome.description}</span>
                </p>
                <p className="text-center text-base sm:text-lg md:text-xl">
                  {outcome.note}
                </p>
              </div>
              <Button className="h-full bg-transparent text-center text-lg whitespace-normal text-gray-900 italic hover:cursor-pointer hover:bg-inherit hover:underline sm:text-xl md:text-2xl">
                {outcome.action}
              </Button>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
