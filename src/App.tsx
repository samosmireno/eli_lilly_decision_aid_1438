import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { EndocrineTherapyPros } from "./pages/endocrine-therapy-pros";
import { EndocrineTherapySideEffects } from "./pages/endocrine-therapy-side-effects";
import { BrcaMutationStatus } from "./pages/brca-mutation-status";
import { EndocrineTherapyBenefits } from "./pages/endocrine-therapy-benefits";
import { BaselineRiskRecurrence } from "./pages/baseline-risk-recurrence";
import { RiskAssessmentOutcome } from "./pages/risk-assessment-outcome";
import { ElevatedRiskRecurrence } from "./pages/elevated-risk-recurrence";
import { RoleCDK46Inhibitors } from "./pages/role-cdk46-inhibitors";
import { CharacteristicsElevatedRisk } from "./pages/characteristics-elevated-risk";
import { Study } from "./pages/study";
import TreatmentDurations from "./pages/treatment-durations";
import CDK46InhibitorEligibility from "./pages/cdk46-inhibitor-eligibility";
import { MedicationEligibility } from "./pages/medication-eligibility";
import { MedicationPrecautions } from "./pages/medication-precautions";
import { StudyResults } from "./pages/study-results";

const GA_MEASUREMENT_ID = import.meta.env.VITE_REACT_APP_GA_MEASUREMENT_ID;

function App() {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        testMode: import.meta.env.NODE_ENV === "development",
        gaOptions: {
          send_page_view: false, // We'll handle page views manually
        },
      });
    }
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<EndocrineTherapyPros />} />
        <Route
          path="/endocrine-therapy-pros"
          element={<EndocrineTherapyPros />}
        />
        <Route
          path="/endocrine-therapy-effects"
          element={<EndocrineTherapySideEffects />}
        />
        <Route path="/brca-mutation-status" element={<BrcaMutationStatus />} />
        <Route
          path="/endocrine-therapy-benefits"
          element={<EndocrineTherapyBenefits />}
        />
        <Route
          path="/baseline-risk-recurrence"
          element={<BaselineRiskRecurrence />}
        />
        <Route
          path="/risk-assessment-outcome"
          element={<RiskAssessmentOutcome />}
        />
        <Route
          path="/elevated-risk-recurrence"
          element={<ElevatedRiskRecurrence />}
        />
        <Route
          path="/role-cdk46-inhibitors"
          element={<RoleCDK46Inhibitors />}
        />
        <Route
          path="/characteristics-elevated-risk"
          element={<CharacteristicsElevatedRisk />}
        />
        <Route path="/monarche-study" element={<Study studyKey="monarche" />} />
        <Route path="/natalee-study" element={<Study studyKey="natalee" />} />
        <Route path="/treatment-durations" element={<TreatmentDurations />} />
        <Route
          path="/cdk46-inhibitor-eligibility"
          element={<CDK46InhibitorEligibility />}
        />
        <Route
          path="/abemaciclib-eligibility"
          element={<MedicationEligibility medicationKey="abemaciclib" />}
        />
        <Route
          path="/ribociclib-eligibility"
          element={<MedicationEligibility medicationKey="ribociclib" />}
        />
        <Route
          path="/abemaciclib-precautions"
          element={<MedicationPrecautions medicationKey="abemaciclib" />}
        />
        <Route
          path="/ribociclib-precautions"
          element={<MedicationPrecautions medicationKey="ribociclib" />}
        />
        <Route
          path="/monarche-study-results"
          element={<StudyResults medicationKey="abemaciclib" part={1} />}
        />
        <Route
          path="/monarche-study-results/part-2"
          element={<StudyResults medicationKey="abemaciclib" part={2} />}
        />
        <Route
          path="/natalee-study-results"
          element={<StudyResults medicationKey="ribociclib" part={1} />}
        />
        <Route
          path="/natalee-study-results/part-2"
          element={<StudyResults medicationKey="ribociclib" part={2} />}
        />
        <Route path="*" element={<EndocrineTherapyPros />} />
      </Routes>
    </>
  );
}

export default App;
