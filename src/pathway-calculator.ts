// import type { PathwayDecision, PatientCharacteristics } from "./types";

// const RISK_WEIGHTS: Record<string, Partial<Record<string, number>>> = {
//   tumourInvolvement: {
//     t0: 0,
//     t1: 1,
//     t2: 2,
//     t3: 3,
//     t4: 4,
//   },
//   nodalInvolvement: {
//     n0: 0,
//     n1: 2,
//     n2: 3,
//     "n3+": 4,
//   },
//   cancerGrade: {
//     "grade-1": 0,
//     "grade-2": 1,
//     "grade-3": 2,
//   },
//   oncotypeDxScore: {
//     "16-20": 1,
//     "21-25": 2,
//     ">=26": 3,
//     unknown: 0,
//   },
//   ki67: {
//     "<20%": 0,
//     ">=20%": 2,
//     unknown: 0,
//   },
//   genomicProfiling: {
//     "not-high-risk": 0,
//     "high-risk": 3,
//   },
//   // Add more factors...
// };

// export function determinePathway(
//   characteristics: PatientCharacteristics,
// ): PathwayDecision {
//   // Calculate risk score
//   let riskScore = 0;

//   Object.entries(characteristics).forEach(([factor, value]) => {
//     const weights = RISK_WEIGHTS[factor];
//     if (weights && value !== undefined) {
//       riskScore += weights[value as string] || 0;
//     }
//   });

//   // Determine risk level
//   const riskLevel = riskScore >= 5 ? "elevated" : "no-elevated";

//   // Map to pathway
//   if (riskLevel === "no-elevated") {
//     return {
//       pathway: "both", // Can show ET Alone pathway
//       riskLevel,
//       recommendedSlides: ["why-et-alone"],
//     };
//   }

//   // For elevated risk, determine specific CDK4/6 inhibitor
//   const pathway = determineInhibitor(characteristics);

//   return {
//     pathway,
//     riskLevel,
//     recommendedSlides: getRelevantSlides(pathway, characteristics),
//   };
// }

// function determineInhibitor(
//   chars: PatientCharacteristics,
// ): "abemaciclib" | "ribociclib" | "both" {
//   // Eligibility logic based on clinical criteria
//   const abemacicilib_eligible = checkAbemaciciclibEligibility(chars);
//   const ribociclib_eligible = checkRibociclibEligibility(chars);

//   if (abemacicilib_eligible && ribociclib_eligible) return "both";
//   if (abemacicilib_eligible) return "abemaciclib";
//   if (ribociclib_eligible) return "ribociclib";
//   return "both"; // Default fallback
// }
