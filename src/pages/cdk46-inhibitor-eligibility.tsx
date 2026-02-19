import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";
import { usePatientCharacteristics } from "@/contexts/patient-characteristics-context";

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

export default function CDK46InhibitorEligibility() {
  const { medicationEligibility } = usePatientCharacteristics();

  const scenario = eligibilityScenarios.find((s) => {
    if (medicationEligibility === "abemaciclib") {
      return s.eligibleFor === "abemaciclib";
    } else if (medicationEligibility === "ribociclib") {
      return s.eligibleFor === "ribociclib";
    } else if (medicationEligibility === "both") {
      return s.eligibleFor === "ribociclib or abemaciclib";
    }
    return false;
  }) || {
    characteristics:
      "Based on your characteristics, you are not eligible for a CDK4/6 inhibitor.",
    fullText:
      "You are not eligible for a CDK4/6 inhibitor based on the current clinical trial criteria.",
  };

  return (
    <PageLayout title="CDK4/6 inhibitor eligibility">
      <div className="flex w-full items-center justify-center lg:mt-20">
        <main className="flex h-120 w-80 flex-col justify-center border border-black bg-white px-3">
          <div className="text-center">
            <p className="mb-6 text-xl font-semibold md:text-2xl">
              {scenario.characteristics}
            </p>

            <p className="mb-26 text-xl font-semibold md:mb-28 md:text-2xl">
              {scenario.fullText}
            </p>

            <Button className="bg-white text-base text-gray-900 italic hover:cursor-pointer hover:bg-inherit hover:underline sm:text-lg md:text-xl">
              click to learn more
            </Button>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
