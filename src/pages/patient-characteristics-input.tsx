import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/page-layout";

export function PatientCharacteristicsInput() {
  return (
    <PageLayout title="Patient Characteristics Input Screen">
      <div className="grid grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Timing of Data Collection */}
          <section className="space-y-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Timing of Data Collection
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
              >
                At diagnosis
              </Button>
              <Button
                variant="outline"
                className="h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Prior to neoadjuvant treatment*
              </Button>
              <Button
                variant="outline"
                className="h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
              >
                After receiving neoadjuvant treatment*
              </Button>
            </div>
          </section>

          {/* Histology */}
          <section className="space-y-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Histology
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Ductal/NST
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Lobular
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Other*
              </Button>
            </div>
          </section>

          {/* Menopausal Status */}
          <section className="space-y-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Menopausal Status
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Premenopausal
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Postmenopausal
              </Button>
            </div>
          </section>

          {/* Oncotype DX Recurrence Score */}
          <section className="space-y-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Oncotype DX Recurrence Score
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                16-20
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                21-25
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                ≥25
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Unknown
              </Button>
            </div>
          </section>

          {/* Other Genomic Profiling */}
          <section className="space-y-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Other Genomic Profiling
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Not considered high-risk
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                High-risk
              </Button>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          {/* Cancer Grade */}
          <section className="space-y-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Cancer Grade
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Grade 1
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Grade 2
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Grade 3
              </Button>
            </div>
          </section>

          {/* Tumor involvement */}
          <section className="space-y-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Tumor involvement
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T0
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T1
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T2
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T3
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                T4
              </Button>
            </div>
          </section>

          {/* Histology (Tumor Size) */}
          <section className="space-y-2 pt-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Histology
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                &lt;5 cm
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                ≥5 cm
              </Button>
            </div>
          </section>

          {/* Nodal Involvement */}
          <section className="space-y-2 pt-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Nodal Involvement
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N0
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N1
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N2
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                N3+
              </Button>
            </div>
          </section>

          {/* Ki-67 Proliferation Marker */}
          <section className="space-y-2 pt-2">
            <h3 className="flex h-10 items-center justify-center border-2 border-gray-900 text-lg font-semibold">
              Ki-67 Proliferation Marker**
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                &lt;20%
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                ≥20%
              </Button>
              <Button
                variant="outline"
                className="h-10 items-center justify-center rounded-none border border-gray-900 text-base"
              >
                Unknown
              </Button>
            </div>
          </section>

          {/* Notes */}
          <div className="pt-2 text-sm">
            <p>*Clinical trial eligibility was based on surgical pathology.</p>
            <p>
              **Ki-67 is commonly assessed using core biopsy specimens. All
              patients assumed M0 in eBC.
            </p>
          </div>

          {/* BRCA 1/2 variant */}
          <section>
            <Button
              variant="outline"
              className="h-10 w-full items-center justify-center rounded-none border border-gray-900 text-base"
            >
              BRCA 1/2 variant
            </Button>
          </section>

          {/* View stage classification button */}
          <div className="flex justify-end pt-4">
            <Button
              variant="outline"
              className="h-10 items-center justify-center rounded-none border border-gray-900 px-8 text-base font-semibold"
            >
              View stage classification
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
