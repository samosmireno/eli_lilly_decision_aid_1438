export interface PatientCharacteristics {
  timingOfDataCollection?:
    | "diagnosis"
    | "prior-neoadjuvant"
    | "after-neoadjuvant";
  histology?: "ductal-nst" | "lobular" | "other";
  menopausalStatus?: "premenopausal" | "postmenopausal";
  oncotypeDxScore?: "16-20" | "21-25" | ">=26" | "unknown";
  genomicProfiling?: "not-high-risk" | "high-risk";
  cancerGrade?: "grade-1" | "grade-2" | "grade-3";
  tumourInvolvement?: "t0" | "t1" | "t2" | "t3" | "t4";
  tumourSize?: "<5cm" | ">=5cm";
  nodalInvolvement?: "n0" | "n1" | "n2" | "n3+";
  ki67?: "<20%" | ">=20%" | "unknown";
  brca?: boolean;
}

export interface RiskFactors {
  factor: keyof PatientCharacteristics;
  value: string | boolean;
  riskWeight: number; // Points contributing to risk score
}

export interface PathwayDecision {
  pathway: "abemaciclib" | "ribociclib" | "both";
  riskLevel: "elevated" | "no-elevated";
  recommendedSlides: string[];
}
