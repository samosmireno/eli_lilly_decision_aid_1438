import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
} from "@/components/ui/popover";
import { PageLayout } from "../components/page-layout";

export function CharacteristicsElevatedRisk() {
  return (
    <PageLayout title="Characteristics of Patients who have Elevated Risk of Recurrence">
      <div className="mt-4 mr-16 flex min-h-[calc(100vh-136px)] flex-col">
        <main className="space-y-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">
              How was higher risk defined in these studies?
            </h2>

            <ul className="list-disc text-2xl">
              <li className="ml-6">
                Researchers from two major studies, monarchE (abemaciclib) and
                NATALEE (ribociclib), identified which patients face this higher
                risk and may benefit from extra treatment.
              </li>
            </ul>
          </section>
          <div className="flex items-center">
            <div className="flex items-center gap-16">
              <img
                src="/elevated-risk-diagram.png"
                alt="Diagram of elevated risk criteria"
                className="h-96 w-96 border border-gray-900"
              />

              <div className="flex flex-col gap-50">
                <Popover>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold">MonarchE+</span>
                    <PopoverTrigger asChild>
                      <Button className="h-8 w-8 rounded-full border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100">
                        +
                      </Button>
                    </PopoverTrigger>
                  </div>
                  <PopoverContent
                    className="w-150 rounded-none border border-gray-900 px-3 py-3 shadow-none"
                    side="right"
                  >
                    <PopoverHeader>
                      <PopoverTitle className="text-lg font-normal">
                        This study looked at people whose cancer had spread to
                        nearby lymph nodes. The risk was higher if they had:
                      </PopoverTitle>
                      <ul className="list-disc text-lg">
                        <li className="ml-6">
                          4 or more positive lymph nodes, or
                        </li>
                        <li className="ml-6">
                          1-3 lymph nodes plus at least one of these features:
                          <ul className="ml-6 list-disc text-lg">
                            <li className="ml-6">A large tumour (≥ 5 cm)</li>
                            <li className="ml-6">
                              A high tumour grade (Grade 3) - meaning
                              faster-growing cells
                            </li>
                            <li className="ml-6">
                              A Ki-67 score ≥ 20%, showing many cancer cells
                              dividing
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </PopoverHeader>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold">NATALEE+</span>
                    <PopoverTrigger asChild>
                      <Button className="h-8 w-8 rounded-full border border-gray-900 bg-white text-gray-900 hover:cursor-pointer hover:bg-gray-100">
                        +
                      </Button>
                    </PopoverTrigger>
                  </div>
                  <PopoverContent
                    className="w-150 rounded-none border border-gray-900 px-3 py-3 shadow-none"
                    side="right"
                  >
                    <PopoverHeader>
                      <PopoverTitle className="text-lg font-normal">
                        This study considered patients higher-risk if they had:
                      </PopoverTitle>
                      <ul className="list-disc text-lg">
                        <li className="ml-6">
                          <strong>Stage III</strong> or{" "}
                          <strong>Stage IIB</strong> breast cancer, or
                        </li>
                        <li className="ml-6">
                          <strong>Stage IIA</strong> disease{" "}
                          <strong>with any of these:</strong>
                          <ul className="ml-6 list-disc text-lg">
                            <li className="ml-6">
                              Lymph-node involvement (N1), meaning that the
                              cancer had spread to one or a few nearby lymph
                              node(s)
                            </li>
                            <li className="ml-6">
                              No node involvement but <strong>Grade 3</strong>,{" "}
                              <strong>Ki-67 ≥ 20%</strong>, or a{" "}
                              <strong>high-risk genomic test result</strong>{" "}
                              (e.g., Oncotype DX or MammaPrint)
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </PopoverHeader>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-auto text-sm leading-5 text-gray-700">
          <p>
            <span className="sr-only">Reference: </span>
            Cucciniello L, et al. Cancer Treat Rev. 2023;120:102624.
          </p>
        </footer>
      </div>
    </PageLayout>
  );
}
