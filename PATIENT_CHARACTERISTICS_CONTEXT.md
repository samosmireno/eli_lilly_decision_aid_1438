# Patient Characteristics Context

This context manages all patient characteristics data collected from the input form and calculates medication eligibility and staging based on the decision matrix.

**Data Persistence:** All patient characteristics are automatically saved to session storage and will persist across page refreshes during the same browser session. Data is cleared when the browser tab is closed or when the user explicitly resets the form.

## Usage

The context is already set up in `App.tsx` and wraps the entire application.

### Accessing the Context

To use the context in any component, import and use the `usePatientCharacteristics` hook:

````tsx
import { usePatientCharacteristics } from "@/contexts/patient-characteristics-context";

function MyComponent() {
  const {
    // Patient characteristics
    tumorInvolvement,
    nodalInvolvement,
    cancerGrade,
    ki67Marker,
    brcaVariant,

    // Setters (if you need to update values)
    setTumorInvolvement,
    setNodalInvolvement,

    // Computed values
    stage,
    medicationEligibility,
    tnCombination,

    // Utility functions
    clearAllData,
  } = usePatientCharacteristics();

  return (
    <div>
      <p>Current Stage: {stage}</p>
      <p>Medication Eligibility: {medicationEligibility}</p>
      <p>BRCA Variant: {brcaVariant ? "Yes" : "No"}</p>
      <button onClick={clearAllData}>Reset All Data</button>
### Computed Values (Read-Only)

These values are automatically calculated based on the input characteristics:

- `stage`: "IIA" | "IIB" | "IIIA" | "IIIB" | "IIIC" | "unknown" | null
  - Calculated based on tumor involvement (T) and nodal involvement (N) combination
- `medicationEligibility`: "abemaciclib" | "ribociclib" | "both" | "none"
  - Calculated based on the decision matrix considering:
    - Stage
    - TN combination
    - Ki-67 marker
    - Cancer grade
    - Genomic profiling
    - Tumor size (for specific cases)
- `tnCombination`: string | null
  - The combination of tumor and nodal involvement (e.g., "T2N1", "T3N0")

## Decision Matrix Implementation

The medication eligibility is calculated according to the MONARCHE (Abemaciclib) and NATALEE (Ribociclib) eligibility matrix:

### Stage IIA

- **T0N1, T1N1**: Abemaciclib requires G3 or Ki-67 >20%; Ribociclib eligible
- **T2N0**: Abemaciclib not eligible; Ribociclib requires (G3 or G2) and Ki-67 >20% or high genomic risk

### Stage IIB

- **T2N1**: Abemaciclib requires G3 or Ki-67 >20%; Ribociclib eligible
- **T3N0**: Both medications eligible

### Stage IIIA

- All combinations (T0N2, T1N2, T2N2, T3N1, T3N2): Both medications eligible

### Stage IIIB

- **T4N0**: Abemaciclib not eligible; Ribociclib eligible
- **T4N1, T4N2**: Abemaciclib requires tumor ≥5cm or G3 or Ki-67 >20%; Ribociclib eligible

### Stage IIIC

- **Any TN3**: Both medications eligible

## Example: Conditional Rendering Based on Eligibility

```tsx
function MedicationRecommendation() {
  const { medicationEligibility, stage, brcaVariant } =
    usePatientCharacteristics();

  return (
    <div>
      <h2>Recommended Treatment</h2>

      {medicationEligibility === "both" && (
        <p>Patient is eligible for both Abemaciclib and Ribociclib</p>
      )}

      {medicationEligibility === "abemaciclib" && (
        <p>Patient is eligible for Abemaciclib only</p>
      )}

      {medicationEligibility === "ribociclib" && (
        <p>Patient is eligible for Ribociclib only</p>
      )}

      {medicationEligibility === "none" && (
        <p>Patient does not meet eligibility criteria for CDK4/6 inhibitors</p>
      )}

      {brcaVariant && (
        <p className="text-red-600">
          ⚠️ BRCA 1/2 variant detected - consider additional genetic counseling
        </p>
      )}

      {stage && <p>Current staging: {stage}</p>}
    </div>
  );
}
````

## Example: Navigation Based on Eligibility

```tsx
function NavigationButtons() {
  const { medicationEligibility } = usePatientCharacteristics();
  const navigate = useNavigate();

  const handleNext = () => {
    if (medicationEligibility === "both") {
      navigate("/medication-selection");
    } else if (medicationEligibility === "abemaciclib") {
      navigate("/abemaciclib-eligibility");
    } else if (medicationEligibility === "ribociclib") {
      navigate("/ribociclib-eligibility");
    } else {
      navigate("/treatment-alternatives");
    }
  };

  return (
    <button onClick={handleNext} disabled={medicationEligibility === "none"}>
      Continue to Treatment Options
    </button>
  );
}
```

## Utility Functions

### `clearAllData()`

Resets all patient characteristics to their default values and clears session storage.

```tsx
function ResetButton() {
  const { clearAllData } = usePatientCharacteristics();

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all patient data?")) {
      clearAllData();
    }
  };

  return <button onClick={handleReset}>Clear All Data</button>;
}
```

## Session Storage

All patient characteristics are automatically persisted to session storage:

- **Automatic saving:** Data is saved whenever any value changes
- **Automatic loading:** Data is restored when the page loads
- **Session-based:** Data persists only for the current browser tab session
- **Manual clearing:** Use `clearAllData()` to manually clear all stored data

The session storage key is `"patient-characteristics"` and contains a JSON object with all patient data.

## Notes

- The context automatically recalculates `stage` and `medicationEligibility` whenever relevant input values change
- All calculations are memoized for performance using React's `useMemo` hook
- The context persists throughout the user's session as long as they stay on the application
- Refreshing the page will **restore** all values from session storage
- Closing the browser tab or calling `clearAllData()` will reset all values to their initial state
