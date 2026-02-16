import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

// Data array for different eligibility scenarios
export const eligibilityScenarios = [
  {
    id: 1,
    trial: "monarchE",
    characteristics:
      "Based on your characteristics, defined by the monarchE trial.",
    eligibleFor: "abemaciclib",
    fullText: "You are eligible for the CDK4/6 inhibitor: abemaciclib.",
  },
  {
    id: 2,
    trial: "NATALEE",
    characteristics:
      "Based on your characteristics, defined by the NATALEE trial.",
    eligibleFor: "ribociclib",
    fullText: "You are eligible for the CDK4/6 inhibitor: ribociclib.",
  },
  {
    id: 3,
    trial: "NATALEE and monarchE",
    characteristics:
      "Based on your characteristics, defined by the NATALEE and monarchE clinical trials.",
    eligibleFor: "ribociclib or abemaciclib",
    fullText:
      "You are eligible for the CDK4/6 inhibitors: ribociclib or abemaciclib.",
  },
];

interface CDK46InhibitorEligibilityProps {
  scenarioId?: number;
}

export default function CDK46InhibitorEligibility({
  scenarioId = 1,
}: CDK46InhibitorEligibilityProps) {
  // Get the selected scenario (default to first one)
  const scenario =
    eligibilityScenarios.find((s) => s.id === scenarioId) ||
    eligibilityScenarios[0];

  return (
    <PageLayout title="CDK4/6 inhibitor eligibility">
      <div className="mt-20 flex w-full items-center justify-center">
        <main className="flex h-120 w-80 flex-col justify-center border border-black bg-white px-3">
          <div className="text-center">
            <p className="mb-6 text-2xl font-semibold">
              {scenario.characteristics}
            </p>

            <p className="mb-28 text-2xl font-semibold">{scenario.fullText}</p>

            <Button className="bg-white text-xl text-gray-900 italic hover:cursor-pointer hover:bg-inherit hover:underline">
              click to learn more
            </Button>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
