# Dynamic Page Navigation System

The application uses a dynamic page ordering system that adapts based on patient characteristics. This ensures users only see pages relevant to their specific case.

## How It Works

The page order is calculated dynamically based on two key factors from the patient characteristics context:

1. **BRCA Variant Status** - If the patient has a BRCA 1/2 variant, the BRCA mutation status page is included in the flow
2. **Medication Eligibility** - Based on abemaciclib, ribociclib, or both eligibility, different medication-specific pages are shown

## Page Flow Structure

### Part 1: Risk Assessment via Patient Characteristics

- Always includes the same pages
- Conditionally includes BRCA mutation status page if `brcaVariant === true`

### Part 2: CDK4/6 Inhibitor Selection Pathway

- Always the same pages for all users
- Covers general information about CDK4/6 inhibitors

### Part 3: CDK4/6 Inhibitor Eligibility Outputs

This section branches based on medication eligibility:

**If eligible for Abemaciclib only:**

- Shows only abemaciclib-specific pages
- MonarchE study results
- Abemaciclib precautions, side effects, quality of life, and care journey

**If eligible for Ribociclib only:**

- Shows only ribociclib-specific pages
- NATALEE study results
- Ribociclib precautions, side effects, quality of life, and care journey

**If eligible for Both medications:**

- Shows pages for both medications
- All study results, precautions, side effects, etc. for both drugs

**If not eligible:**

- Part 3 is empty (you may want to add alternative treatment pages)

## Usage

### 1. Using the Dynamic Page Order Hook

```tsx
import { useDynamicPageOrder } from "@/hooks/use-dynamic-page-order";

function MyComponent() {
  const pageOrder = useDynamicPageOrder();

  // pageOrder is an array of paths in the correct order
  console.log(pageOrder); // ["/patient-characteristics-input", ...]
}
```

### 2. Using the Page Navigation Hook

The recommended way to handle navigation:

```tsx
import { usePageNavigation } from "@/hooks/use-page-navigation";

function MyPage() {
  const {
    hasPrevious,
    hasNext,
    goToNext,
    goToPrevious,
    previousPage,
    nextPage,
    isPageInOrder,
  } = usePageNavigation();

  return (
    <div>
      <button onClick={goToPrevious} disabled={!hasPrevious}>
        Previous
      </button>

      <button onClick={goToNext} disabled={!hasNext}>
        Next
      </button>

      {/* Or check if a specific page should be accessible */}
      {isPageInOrder("/brca-mutation-status") && (
        <p>BRCA page is in the flow</p>
      )}
    </div>
  );
}
```

### 3. Using the Navigation Buttons Component

The easiest way - drop-in navigation buttons:

```tsx
import { PageNavigationButtons } from "@/components/page-navigation-buttons";

function MyPage() {
  return (
    <div>
      <h1>My Page Content</h1>

      {/* Simple navigation buttons */}
      <PageNavigationButtons />

      {/* With labels */}
      <PageNavigationButtons showLabels={true} />

      {/* With custom styling */}
      <PageNavigationButtons className="mt-8" showLabels={true} />
    </div>
  );
}
```

### 4. The Sidebar Automatically Uses Dynamic Order

The sidebar component already uses `useDynamicPageOrder()`, so it automatically shows the correct previous/next page buttons based on the current context.

## Example: Adding Conditional Logic

To check if a page should be shown or add conditional content:

```tsx
import { usePageNavigation } from "@/hooks/use-page-navigation";
import { usePatientCharacteristics } from "@/contexts/patient-characteristics-context";

function SomeInformationPage() {
  const { isPageInOrder } = usePageNavigation();
  const { medicationEligibility, brcaVariant } = usePatientCharacteristics();

  return (
    <div>
      {brcaVariant && (
        <div className="alert">
          <p>
            Since you have a BRCA variant, you'll also see genetic counseling
            information.
          </p>
          {isPageInOrder("/brca-mutation-status") && (
            <a href="/brca-mutation-status">View BRCA Information</a>
          )}
        </div>
      )}

      {medicationEligibility === "both" && (
        <p>You'll see information for both medications in your journey.</p>
      )}

      {medicationEligibility === "abemaciclib" && (
        <p>Your journey will focus on Abemaciclib (MonarchE study).</p>
      )}

      {medicationEligibility === "ribociclib" && (
        <p>Your journey will focus on Ribociclib (NATALEE study).</p>
      )}

      <PageNavigationButtons showLabels={true} className="mt-8" />
    </div>
  );
}
```

## Modifying the Page Order

To change the page order logic, edit the `useDynamicPageOrder` hook at:

```
src/hooks/use-dynamic-page-order.ts
```

The hook uses `useMemo` to efficiently recalculate the order only when `brcaVariant` or `medicationEligibility` changes.

## Benefits of This Approach

✅ **Context-Aware**: Navigation automatically adapts to patient characteristics
✅ **Type-Safe**: Full TypeScript support throughout
✅ **Reusable**: Multiple components can use the same navigation logic
✅ **Maintainable**: Page order logic is centralized in one place
✅ **Performant**: Uses React memoization to avoid unnecessary recalculations
✅ **No Route Protection Needed**: Pages are simply not in the navigation flow if not relevant

## Testing Different Flows

To test different navigation flows:

1. Go to the Patient Characteristics Input page
2. Select different combinations:
   - Toggle BRCA variant on/off
   - Select different tumor/nodal involvement to get different medication eligibility
3. Navigate through the app and observe how the page order changes
4. Use the "Reset Form" button to start over
