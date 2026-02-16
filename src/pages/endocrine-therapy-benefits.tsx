import { PageLayout } from "../components/page-layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Link } from "react-router-dom";

export function EndocrineTherapyBenefits() {
  return (
    <PageLayout title="Clinical Benefits of Endocrine Therapy">
      <div className="mt-4 mr-16 space-y-4">
        <h2 className="mb-8 text-2xl font-semibold">
          Ask your doctor about what these findings mean to you.
        </h2>

        <Table className="overflow-hidden border-t-2 border-b-2 border-black">
          <caption className="sr-only">
            Endocrine Therapy Options and Clinical Trial Benefits
          </caption>
          <TableHeader>
            <TableRow className="h-10 border-b-2 border-black">
              <TableHead className="w-56 text-xl font-semibold">
                Endocrine Therapy
                <sup>
                  <a href="#ref1" id="ref1-back">
                    <span className="sr-only">Reference </span>1
                  </a>
                </sup>
              </TableHead>
              <TableHead className="px-4 text-xl font-semibold">
                Key Trial Benefits (Evidence Summary)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="h-32 border-y-2 border-black">
              <TableCell className="align-center">
                <div className="text-center text-xl">
                  <div className="font-semibold">1.</div>
                  <div className="font-semibold">
                    Tamoxifen
                    <sup>
                      <a href="#ref2" id="ref2-back">
                        <span className="sr-only">Reference </span>2
                      </a>
                    </sup>
                  </div>
                </div>
              </TableCell>
              <TableCell className="align-center">
                <ul className="ml-5 max-w-225 list-disc px-4 text-xl text-wrap">
                  <li>
                    In ER+ early breast cancer, ~5 years of tamoxifen reduces
                    the risk of breast cancer recurrence.
                  </li>
                  <li>
                    Long-term follow-up shows sustained improvements in survival
                    outcomes over at least 15 years.
                  </li>
                  <li>
                    Benefits have been observed across age groups and tumor
                    characteristics.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow className="h-32 border-b-2 border-black">
              <TableCell className="align-center">
                <div className="text-center text-xl">
                  <div className="font-semibold">2.</div>
                  <div className="font-semibold">
                    Aromatase
                    <br />
                    Inhibitors (AIs)
                    <sup>
                      <a href="#ref3" id="ref3-back">
                        <span className="sr-only">Reference </span>3
                      </a>
                    </sup>
                  </div>
                </div>
              </TableCell>
              <TableCell className="align-center">
                <ul className="ml-5 max-w-225 list-disc px-4 text-xl text-wrap">
                  <li>
                    Compared with tamoxifen, AIs are associated with a lower
                    risk of recurrence.
                  </li>
                  <li>
                    Large patient-level analyses show a ~30% relative reduction
                    in recurrence with AIs versus tamoxifen.
                  </li>
                  <li>
                    Long-term follow-up shows fewer breast cancer-related events
                    with AI therapy.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow className="h-32 border-b-2 border-black">
              <TableCell className="align-center">
                <div className="text-center text-xl">
                  <div className="font-semibold">3.</div>
                  <div className="font-semibold">
                    Ovarian Function
                    <br />
                    Suppression (OFS)
                    <sup>
                      <a href="#ref4" id="ref4-back">
                        <span className="sr-only">Reference </span>4
                      </a>
                    </sup>
                  </div>
                  <div className="mt-1 text-base italic">
                    (typically combined
                    <br />
                    with Tam or AI)
                  </div>
                </div>
              </TableCell>
              <TableCell className="align-center">
                <ul className="ml-5 max-w-225 list-disc px-4 text-xl text-wrap">
                  <li>
                    Adding OFS to endocrine therapy has been shown to improve
                    disease-free survival.
                  </li>
                  <li>
                    At long-term follow-up, OFS-containing regimens also showed
                    modest improvements in freedom from distant recurrence.
                  </li>
                  <li>
                    Benefits are more evident in younger and higher-risk
                    patients.
                  </li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex items-center justify-end gap-2 text-xl font-semibold">
          Skip ahead to:{" "}
          <Link
            to="/endocrine-therapy-effects"
            className="inline-block border border-black px-3 py-3 text-xl font-semibold transition-colors hover:bg-gray-100"
          >
            Endocrine Therapy: Side Effects and Why Consistency Matters
          </Link>
        </div>

        <footer
          className=""
          role="doc-bibliography"
          aria-labelledby="references-heading"
        >
          <h2 id="references-heading" className="sr-only">
            References
          </h2>
          <ol className="text-sm text-gray-700">
            <li id="ref1" tabIndex={-1} className="inline">
              <a href="#ref1-back">
                <span className="sr-only">Back to reference </span>1.
              </a>{" "}
              NCCN Guidelines for Patients®: Ductal Carcinoma In Situ. Version
              1. 2025. National Comprehensive Cancer Network (NCCN).
            </li>{" "}
            <li id="ref2" tabIndex={-1} className="inline">
              <a href="#ref2-back">
                <span className="sr-only">Back to reference </span>2.
              </a>{" "}
              Early Breast Cancer Trialists' Collaborative Group (EBCTCG).
              Lancet. 2005;365:1687-1717.
            </li>{" "}
            <li id="ref3" tabIndex={-1} className="inline">
              <a href="#ref3-back">
                <span className="sr-only">Back to reference </span>3.
              </a>{" "}
              Early Breast Cancer Trialists' Collaborative Group (EBCTCG).
              Lancet. 2005;365:1687-1717.
            </li>{" "}
            <li id="ref4" tabIndex={-1} className="inline">
              <a href="#ref4-back">
                <span className="sr-only">Back to reference </span>4.
              </a>{" "}
              Pagani O, et al. J Clin Oncol. 2023;41:1376-1382.
            </li>
          </ol>
        </footer>
      </div>
    </PageLayout>
  );
}
