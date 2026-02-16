import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

const outcomes = [
  {
    title: "Intermediate/high elevated risk of recurrence",
    description:
      "Based on the information you entered, your patient's features suggest an intermediate/ high elevated chance of recurrence*",
    note: "*As defined by the monarchE and/or NATALEE clinical trials.",
    action:
      "Click here to learn how adding a CDK4/6 inhibitor to endocrine therapy may help reduce your risk.",
  },
  {
    title: "Low elevated risk of recurrence",
    description:
      "Based on the information you entered, your patient's features suggests a low elevated chance of recurrence*",
    note: "*As defined by the monarchE and/or NATALEE clinical trials.",
    action:
      "Click here to learn why continuing endocrine therapy is recommended for you.",
  },
];

export function RiskAssessmentOutcome() {
  const outcome = outcomes[0];
  return (
    <PageLayout title="Risk Assessment Outcome">
      <div className="mr-16 flex items-center justify-center pt-24">
        <main className="max-w-2xl">
          <div className="flex flex-col items-center p-8">
            <h2 className="mb-3 text-center text-3xl font-bold">
              {outcome.title}
            </h2>
            <div className="flex w-full flex-col items-center justify-center border border-black p-8">
              <p className="text-center text-2xl">
                <strong>{outcome.description}</strong>
              </p>
              <p className="mb-16 text-center text-xl">{outcome.note}</p>
              <Button className="mb-8 bg-transparent text-center text-2xl whitespace-normal text-gray-900 italic hover:cursor-pointer hover:bg-inherit hover:underline">
                {outcome.action}
              </Button>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
