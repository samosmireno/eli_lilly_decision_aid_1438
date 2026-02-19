import { PageLayout } from "../components/page-layout";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import {
  usePatientCharacteristics,
  type TimingOfDataCollection,
  type Histology,
  type MenopausalStatus,
  type OncotypeScore,
  type GenomicProfiling,
  type CancerGrade,
  type TumorInvolvement,
  type TumorSize,
  type NodalInvolvement,
  type Ki67Marker,
} from "@/contexts/patient-characteristics-context";

export function PatientCharacteristicsInput() {
  const {
    timingOfDataCollection,
    setTimingOfDataCollection,
    histology,
    setHistology,
    menopausalStatus,
    setMenopausalStatus,
    oncotypeScore,
    setOncotypeScore,
    genomicProfiling,
    setGenomicProfiling,
    cancerGrade,
    setCancerGrade,
    tumorInvolvement,
    setTumorInvolvement,
    tumorSize,
    setTumorSize,
    nodalInvolvement,
    setNodalInvolvement,
    ki67Marker,
    setKi67Marker,
    brcaVariant,
    setBrcaVariant,
    stage,
    medicationEligibility,
    tnCombination,
    clearAllData,
  } = usePatientCharacteristics();

  console.log("Patient Characteristics:", {
    stage,
    medicationEligibility,
    tnCombination,
  });

  return (
    <PageLayout title="Patient Characteristics Input Screen">
      <div className="grid grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Timing of Data Collection */}
          <section className="space-y-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Timing of Data Collection
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="w-full flex-col"
              spacing={2}
              value={timingOfDataCollection || undefined}
              onValueChange={(value) =>
                setTimingOfDataCollection(value as TimingOfDataCollection)
              }
            >
              <ToggleGroupItem
                value="at-diagnosis"
                aria-label="At diagnosis"
                className="min-h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
              >
                At diagnosis
              </ToggleGroupItem>
              <ToggleGroupItem
                value="prior-neoadjuvant"
                aria-label="Prior to neoadjuvant treatment"
                className="min-h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Prior to neoadjuvant treatment
              </ToggleGroupItem>
              <ToggleGroupItem
                value="after-neoadjuvant"
                aria-label="After receiving neoadjuvant treatment"
                className="min-h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
              >
                After receiving neoadjuvant treatment
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Histology */}
          <section className="space-y-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Histology
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3"
              spacing={2}
              value={histology || undefined}
              onValueChange={(value) => setHistology(value as Histology)}
            >
              <ToggleGroupItem
                value="ductal-nst"
                aria-label="Ductal/NST"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Ductal/NST
              </ToggleGroupItem>
              <ToggleGroupItem
                value="lobular"
                aria-label="Lobular"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Lobular
              </ToggleGroupItem>
              <ToggleGroupItem
                value="other"
                aria-label="Other"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Other
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Menopausal Status */}
          <section className="space-y-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Menopausal Status
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2"
              spacing={2}
              value={menopausalStatus || undefined}
              onValueChange={(value) =>
                setMenopausalStatus(value as MenopausalStatus)
              }
            >
              <ToggleGroupItem
                value="premenopausal"
                aria-label="Premenopausal"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Premenopausal
              </ToggleGroupItem>
              <ToggleGroupItem
                value="postmenopausal"
                aria-label="Postmenopausal"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Postmenopausal
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Oncotype DX Recurrence Score */}
          <section className="space-y-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Oncotype DX Recurrence Score
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-4"
              spacing={2}
              value={oncotypeScore || undefined}
              onValueChange={(value) =>
                setOncotypeScore(value as OncotypeScore)
              }
            >
              <ToggleGroupItem
                value="16-20"
                aria-label="16-20"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                16-20
              </ToggleGroupItem>
              <ToggleGroupItem
                value="21-25"
                aria-label="21-25"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                21-25
              </ToggleGroupItem>
              <ToggleGroupItem
                value="25-plus"
                aria-label="≥25"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                ≥25
              </ToggleGroupItem>
              <ToggleGroupItem
                value="unknown"
                aria-label="Unknown"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Unknown
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Other Genomic Profiling */}
          <section className="space-y-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Other Genomic Profiling
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2"
              spacing={2}
              value={genomicProfiling || undefined}
              onValueChange={(value) =>
                setGenomicProfiling(value as GenomicProfiling)
              }
            >
              <ToggleGroupItem
                value="not-high-risk"
                aria-label="Not considered high-risk"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Not considered high-risk
              </ToggleGroupItem>
              <ToggleGroupItem
                value="high-risk"
                aria-label="High-risk"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                High-risk
              </ToggleGroupItem>
            </ToggleGroup>
          </section>
        </div>

        {/* Right Column */}
        <div>
          {/* Cancer Grade */}
          <section className="space-y-2 pb-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Cancer Grade
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3"
              spacing={2}
              value={cancerGrade || undefined}
              onValueChange={(value) => setCancerGrade(value as CancerGrade)}
            >
              <ToggleGroupItem
                value="grade-1"
                aria-label="Grade 1"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Grade 1
              </ToggleGroupItem>
              <ToggleGroupItem
                value="grade-2"
                aria-label="Grade 2"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Grade 2
              </ToggleGroupItem>
              <ToggleGroupItem
                value="grade-3"
                aria-label="Grade 3"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Grade 3
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Tumor involvement */}
          <section className="space-y-2 pb-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Tumor involvement
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-5"
              spacing={2}
              value={tumorInvolvement || undefined}
              onValueChange={(value) =>
                setTumorInvolvement(value as TumorInvolvement)
              }
            >
              <ToggleGroupItem
                value="t0"
                aria-label="T0"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T0
              </ToggleGroupItem>
              <ToggleGroupItem
                value="t1"
                aria-label="T1"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T1
              </ToggleGroupItem>
              <ToggleGroupItem
                value="t2"
                aria-label="T2"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T2
              </ToggleGroupItem>
              <ToggleGroupItem
                value="t3"
                aria-label="T3"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T3
              </ToggleGroupItem>
              <ToggleGroupItem
                value="t4"
                aria-label="T4"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T4
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Histology (Tumor Size) */}
          <section className="space-y-2 py-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Histology
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2"
              spacing={2}
              value={tumorSize || undefined}
              onValueChange={(value) => setTumorSize(value as TumorSize)}
            >
              <ToggleGroupItem
                value="less-5cm"
                aria-label="Less than 5 cm"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                &lt;5 cm
              </ToggleGroupItem>
              <ToggleGroupItem
                value="5cm-plus"
                aria-label="5 cm or more"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                ≥5 cm
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Nodal Involvement */}
          <section className="space-y-2 py-2">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Nodal Involvement
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-4"
              spacing={2}
              value={nodalInvolvement || undefined}
              onValueChange={(value) =>
                setNodalInvolvement(value as NodalInvolvement)
              }
            >
              <ToggleGroupItem
                value="n0"
                aria-label="N0"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N0
              </ToggleGroupItem>
              <ToggleGroupItem
                value="n1"
                aria-label="N1"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N1
              </ToggleGroupItem>
              <ToggleGroupItem
                value="n2"
                aria-label="N2"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N2
              </ToggleGroupItem>
              <ToggleGroupItem
                value="n3-plus"
                aria-label="N3+"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N3+
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* Ki-67 Proliferation Marker */}
          <section className="space-y-2 py-3">
            <h3 className="flex min-h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Ki-67 Proliferation Marker
            </h3>
            <ToggleGroup
              type="single"
              variant="outline"
              className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3"
              spacing={2}
              value={ki67Marker || undefined}
              onValueChange={(value) => setKi67Marker(value as Ki67Marker)}
            >
              <ToggleGroupItem
                value="less-20"
                aria-label="Less than 20%"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                &lt;20%
              </ToggleGroupItem>
              <ToggleGroupItem
                value="20-plus"
                aria-label="20% or more"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                ≥20%
              </ToggleGroupItem>
              <ToggleGroupItem
                value="unknown"
                aria-label="Unknown"
                className="min-h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Unknown
              </ToggleGroupItem>
            </ToggleGroup>
          </section>

          {/* BRCA 1/2 variant */}
          <section>
            <Toggle
              variant="outline"
              aria-label="BRCA 1/2 variant"
              className="min-h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
              pressed={brcaVariant}
              onPressedChange={setBrcaVariant}
            >
              BRCA 1/2 variant
            </Toggle>
          </section>

          {/* Action buttons */}
          <div className="flex justify-between gap-2 pt-2">
            <Button
              variant="outline"
              onClick={clearAllData}
              className="min-h-10 items-center justify-center rounded-none border border-gray-900 px-8 text-base font-semibold"
            >
              Reset Inputs
            </Button>
            <Button
              variant="outline"
              className="min-h-10 items-center justify-center rounded-none border border-gray-900 px-8 text-base font-semibold"
              onClick={() => {}}
            >
              View stage classification
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
