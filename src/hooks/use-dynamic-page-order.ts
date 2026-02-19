import { useMemo } from "react";
import { usePatientCharacteristics } from "@/contexts/patient-characteristics-context";

/**
 * Hook that returns the dynamic page order based on patient characteristics
 */
export function useDynamicPageOrder() {
  const { brcaVariant, medicationEligibility } = usePatientCharacteristics();

  const pageOrder = useMemo(() => {
    // Part 1: Risk Assessment via Patient Characteristics
    const introductoryPages = [
      "/",
      "/patient-characteristics-input",
      // Conditionally include BRCA mutation status page
      ...(brcaVariant ? ["/brca-mutation-status"] : []),
      "/endocrine-therapy-benefits",
      "/baseline-risk-recurrence",
      "/risk-assessment-outcome",
    ];

    let riskOutcomePages: string[] = [];
    if (medicationEligibility === "none") {
      riskOutcomePages = [
        "/endocrine-therapy-pros",
        "/endocrine-therapy-effects",
      ];

      return [...introductoryPages, ...riskOutcomePages];
    }

    // Part 2: CDK4/6 inhibitor Selection Pathway
    riskOutcomePages = [
      "/elevated-risk-recurrence",
      "/role-cdk46-inhibitors",
      "/characteristics-elevated-risk",
      "/monarche-study",
      "/natalee-study",
      "/treatment-durations",
      "/cdk46-inhibitor-eligibility",
    ];

    // Part 3: CDK4/6 inhibitor Eligibility Outputs
    // This branches based on medication eligibility
    let studyPages: string[] = [];

    if (medicationEligibility === "abemaciclib") {
      // Abemaciclib only path
      studyPages = [
        "/abemaciclib-eligibility",
        "/monarche-study-results",
        "/monarche-study-results/part-2",
        "/abemaciclib-precautions",
        "/abemaciclib-side-effects",
        "/abemaciclib-quality-of-life",
        "/abemaciclib-care-journey",
      ];
    } else if (medicationEligibility === "ribociclib") {
      // Ribociclib only path
      studyPages = [
        "/ribociclib-eligibility",
        "/natalee-study-results",
        "/natalee-study-results/part-2",
        "/ribociclib-precautions",
        "/ribociclib-side-effects",
        "/ribociclib-quality-of-life",
        "/ribociclib-care-journey",
      ];
    } else if (medicationEligibility === "both") {
      // Both medications path
      studyPages = [
        "/abemaciclib-eligibility",
        "/ribociclib-eligibility",
        "/monarche-study-results",
        "/monarche-study-results/part-2",
        "/natalee-study-results",
        "/natalee-study-results/part-2",
        "/abemaciclib-precautions",
        "/ribociclib-precautions",
        "/abemaciclib-side-effects",
        "/ribociclib-side-effects",
        "/abemaciclib-quality-of-life",
        "/ribociclib-quality-of-life",
        "/abemaciclib-care-journey",
        "/ribociclib-care-journey",
      ];
    } else {
      // No eligibility - might want to show alternative treatment or end flow
      studyPages = [];
    }

    return [...introductoryPages, ...riskOutcomePages, ...studyPages];
  }, [brcaVariant, medicationEligibility]);

  return pageOrder;
}
