import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

export type TimingOfDataCollection =
  | "at-diagnosis"
  | "prior-neoadjuvant"
  | "after-neoadjuvant"
  | null;

export type Histology = "ductal-nst" | "lobular" | "other" | null;

export type MenopausalStatus = "premenopausal" | "postmenopausal" | null;

export type OncotypeScore = "16-20" | "21-25" | "25-plus" | "unknown" | null;

export type GenomicProfiling = "not-high-risk" | "high-risk" | null;

export type CancerGrade = "grade-1" | "grade-2" | "grade-3" | null;

export type TumorInvolvement = "t0" | "t1" | "t2" | "t3" | "t4" | null;

export type TumorSize = "less-5cm" | "5cm-plus" | null;

export type NodalInvolvement = "n0" | "n1" | "n2" | "n3-plus" | null;

export type Ki67Marker = "less-20" | "20-plus" | "unknown" | null;

export type MedicationEligibility =
  | "abemaciclib"
  | "ribociclib"
  | "both"
  | "none";

export type Stage = "IIA" | "IIB" | "IIIA" | "IIIB" | "IIIC" | "unknown" | null;

interface PatientCharacteristics {
  timingOfDataCollection: TimingOfDataCollection;
  histology: Histology;
  menopausalStatus: MenopausalStatus;
  oncotypeScore: OncotypeScore;
  genomicProfiling: GenomicProfiling;
  cancerGrade: CancerGrade;
  tumorInvolvement: TumorInvolvement;
  tumorSize: TumorSize;
  nodalInvolvement: NodalInvolvement;
  ki67Marker: Ki67Marker;
  brcaVariant: boolean;
}

interface PatientCharacteristicsContextType extends PatientCharacteristics {
  setTimingOfDataCollection: (value: TimingOfDataCollection) => void;
  setHistology: (value: Histology) => void;
  setMenopausalStatus: (value: MenopausalStatus) => void;
  setOncotypeScore: (value: OncotypeScore) => void;
  setGenomicProfiling: (value: GenomicProfiling) => void;
  setCancerGrade: (value: CancerGrade) => void;
  setTumorInvolvement: (value: TumorInvolvement) => void;
  setTumorSize: (value: TumorSize) => void;
  setNodalInvolvement: (value: NodalInvolvement) => void;
  setKi67Marker: (value: Ki67Marker) => void;
  setBrcaVariant: (value: boolean) => void;
  // Computed values
  stage: Stage;
  medicationEligibility: MedicationEligibility;
  tnCombination: string | null;
  // Utility functions
  clearAllData: () => void;
}

const PatientCharacteristicsContext = createContext<
  PatientCharacteristicsContextType | undefined
>(undefined);

const STORAGE_KEY = "patient-characteristics";

// Helper function to load from session storage
function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return data[key] !== undefined ? data[key] : defaultValue;
    }
  } catch (error) {
    console.error("Error loading from session storage:", error);
  }
  return defaultValue;
}

// Helper function to save to session storage
function saveToStorage(key: string, value: unknown) {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const data = stored ? JSON.parse(stored) : {};
    data[key] = value;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to session storage:", error);
  }
}

export function PatientCharacteristicsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [timingOfDataCollection, setTimingOfDataCollection] =
    useState<TimingOfDataCollection>(() =>
      loadFromStorage("timingOfDataCollection", null),
    );
  const [histology, setHistology] = useState<Histology>(() =>
    loadFromStorage("histology", null),
  );
  const [menopausalStatus, setMenopausalStatus] = useState<MenopausalStatus>(
    () => loadFromStorage("menopausalStatus", null),
  );
  const [oncotypeScore, setOncotypeScore] = useState<OncotypeScore>(() =>
    loadFromStorage("oncotypeScore", null),
  );
  const [genomicProfiling, setGenomicProfiling] = useState<GenomicProfiling>(
    () => loadFromStorage("genomicProfiling", null),
  );
  const [cancerGrade, setCancerGrade] = useState<CancerGrade>(() =>
    loadFromStorage("cancerGrade", null),
  );
  const [tumorInvolvement, setTumorInvolvement] = useState<TumorInvolvement>(
    () => loadFromStorage("tumorInvolvement", null),
  );
  const [tumorSize, setTumorSize] = useState<TumorSize>(() =>
    loadFromStorage("tumorSize", null),
  );
  const [nodalInvolvement, setNodalInvolvement] = useState<NodalInvolvement>(
    () => loadFromStorage("nodalInvolvement", null),
  );
  const [ki67Marker, setKi67Marker] = useState<Ki67Marker>(() =>
    loadFromStorage("ki67Marker", null),
  );
  const [brcaVariant, setBrcaVariant] = useState<boolean>(() =>
    loadFromStorage("brcaVariant", false),
  );

  // Persist timingOfDataCollection to session storage
  useEffect(() => {
    saveToStorage("timingOfDataCollection", timingOfDataCollection);
  }, [timingOfDataCollection]);

  // Persist histology to session storage
  useEffect(() => {
    saveToStorage("histology", histology);
  }, [histology]);

  // Persist menopausalStatus to session storage
  useEffect(() => {
    saveToStorage("menopausalStatus", menopausalStatus);
  }, [menopausalStatus]);

  // Persist oncotypeScore to session storage
  useEffect(() => {
    saveToStorage("oncotypeScore", oncotypeScore);
  }, [oncotypeScore]);

  // Persist genomicProfiling to session storage
  useEffect(() => {
    saveToStorage("genomicProfiling", genomicProfiling);
  }, [genomicProfiling]);

  // Persist cancerGrade to session storage
  useEffect(() => {
    saveToStorage("cancerGrade", cancerGrade);
  }, [cancerGrade]);

  // Persist tumorInvolvement to session storage
  useEffect(() => {
    saveToStorage("tumorInvolvement", tumorInvolvement);
  }, [tumorInvolvement]);

  // Persist tumorSize to session storage
  useEffect(() => {
    saveToStorage("tumorSize", tumorSize);
  }, [tumorSize]);

  // Persist nodalInvolvement to session storage
  useEffect(() => {
    saveToStorage("nodalInvolvement", nodalInvolvement);
  }, [nodalInvolvement]);

  // Persist ki67Marker to session storage
  useEffect(() => {
    saveToStorage("ki67Marker", ki67Marker);
  }, [ki67Marker]);

  // Persist brcaVariant to session storage
  useEffect(() => {
    saveToStorage("brcaVariant", brcaVariant);
  }, [brcaVariant]);

  // Calculate TN combination
  const tnCombination = useMemo(() => {
    if (!tumorInvolvement || !nodalInvolvement) return null;
    const t = tumorInvolvement.toUpperCase();
    const n =
      nodalInvolvement === "n3-plus" ? "N3" : nodalInvolvement.toUpperCase();
    return `${t}${n}`;
  }, [tumorInvolvement, nodalInvolvement]);

  // Calculate stage based on TN combination
  const stage = useMemo((): Stage => {
    if (!tumorInvolvement || !nodalInvolvement) return null;

    const t = tumorInvolvement;
    const n = nodalInvolvement;

    // Stage IIA
    if (t === "t0" && n === "n1") return "IIA";
    if (t === "t1" && n === "n1") return "IIA";
    if (t === "t2" && n === "n0") return "IIA";

    // Stage IIB
    if (t === "t2" && n === "n1") return "IIB";
    if (t === "t3" && n === "n0") return "IIB";

    // Stage IIIA
    if (t === "t0" && n === "n2") return "IIIA";
    if (t === "t1" && n === "n2") return "IIIA";
    if (t === "t2" && n === "n2") return "IIIA";
    if (t === "t3" && n === "n1") return "IIIA";
    if (t === "t3" && n === "n2") return "IIIA";

    // Stage IIIB
    if (t === "t4" && n === "n0") return "IIIB";
    if (t === "t4" && n === "n1") return "IIIB";
    if (t === "t4" && n === "n2") return "IIIB";

    // Stage IIIC
    if (n === "n3-plus") return "IIIC";

    return "unknown";
  }, [tumorInvolvement, nodalInvolvement]);

  // Calculate medication eligibility based on the decision matrix
  const medicationEligibility = useMemo((): MedicationEligibility => {
    if (!stage || stage === "unknown" || !tnCombination) return "none";

    const isHighKi67 = ki67Marker === "20-plus";
    const isG3 = cancerGrade === "grade-3";
    const isG2 = cancerGrade === "grade-2";
    const isHighGenomicRisk = genomicProfiling === "high-risk";

    let abemaciclib = false;
    let ribociclib = false;

    // Stage IIA - T0N1, T1N1
    if (
      stage === "IIA" &&
      (tnCombination === "T0N1" || tnCombination === "T1N1")
    ) {
      abemaciclib = isG3 || isHighKi67;
      ribociclib = true;
    }

    // Stage IIA - T2N0
    if (stage === "IIA" && tnCombination === "T2N0") {
      abemaciclib = false; // X in matrix
      ribociclib = ((isG3 || isG2) && isHighKi67) || isHighGenomicRisk;
    }

    // Stage IIB - T2N1
    if (stage === "IIB" && tnCombination === "T2N1") {
      abemaciclib = isG3 || isHighKi67;
      ribociclib = true;
    }

    // Stage IIB - T3N0
    if (stage === "IIB" && tnCombination === "T3N0") {
      abemaciclib = true;
      ribociclib = true;
    }

    // Stage IIIA - T0N2, T1N2, T2N2, T3N1, T3N2
    if (stage === "IIIA") {
      abemaciclib = true;
      ribociclib = true;
    }

    // Stage IIIB - T4N0
    if (stage === "IIIB" && tnCombination === "T4N0") {
      abemaciclib = false; // X in matrix
      ribociclib = true;
    }

    // Stage IIIB - T4N1, T4N2
    if (
      stage === "IIIB" &&
      (tnCombination === "T4N1" || tnCombination === "T4N2")
    ) {
      const isTumorLarge = tumorSize === "5cm-plus";
      abemaciclib = isTumorLarge || isG3 || isHighKi67;
      ribociclib = true;
    }

    // Stage IIIC - Any TN3
    if (stage === "IIIC") {
      abemaciclib = true;
      ribociclib = true;
    }

    if (abemaciclib && ribociclib) return "both";
    if (abemaciclib) return "abemaciclib";
    if (ribociclib) return "ribociclib";
    return "none";
  }, [
    stage,
    tnCombination,
    ki67Marker,
    cancerGrade,
    genomicProfiling,
    tumorSize,
  ]);

  // Clear all data and reset to defaults
  const clearAllData = () => {
    setTimingOfDataCollection(null);
    setHistology(null);
    setMenopausalStatus(null);
    setOncotypeScore(null);
    setGenomicProfiling(null);
    setCancerGrade(null);
    setTumorInvolvement(null);
    setTumorSize(null);
    setNodalInvolvement(null);
    setKi67Marker(null);
    setBrcaVariant(false);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing session storage:", error);
    }
  };

  const value = {
    timingOfDataCollection,
    histology,
    menopausalStatus,
    oncotypeScore,
    genomicProfiling,
    cancerGrade,
    tumorInvolvement,
    tumorSize,
    nodalInvolvement,
    ki67Marker,
    brcaVariant,
    setTimingOfDataCollection,
    setHistology,
    setMenopausalStatus,
    setOncotypeScore,
    setGenomicProfiling,
    setCancerGrade,
    setTumorInvolvement,
    setTumorSize,
    setNodalInvolvement,
    setKi67Marker,
    setBrcaVariant,
    stage,
    medicationEligibility,
    tnCombination,
    clearAllData,
  };

  return (
    <PatientCharacteristicsContext.Provider value={value}>
      {children}
    </PatientCharacteristicsContext.Provider>
  );
}

export function usePatientCharacteristics() {
  const context = useContext(PatientCharacteristicsContext);
  if (context === undefined) {
    throw new Error(
      "usePatientCharacteristics must be used within a PatientCharacteristicsProvider",
    );
  }
  return context;
}
