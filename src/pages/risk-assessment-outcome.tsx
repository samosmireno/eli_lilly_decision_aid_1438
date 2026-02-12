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
      <article className="mr-16 flex items-center justify-center pt-20">
        <div className="max-w-2xl">
          <div className="flex flex-col items-center p-8">
            <h2 className="mb-3 text-center text-3xl font-bold">
              {outcome.title}
            </h2>
            <div className="flex h-full w-full flex-col items-center justify-center border border-black p-8">
              <p className="text-center text-2xl">
                <strong>{outcome.description}</strong>
              </p>
              <p className="mb-5 text-center">{outcome.note}</p>
              <p className="text-center text-2xl italic">{outcome.action}</p>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
