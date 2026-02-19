import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function EndocrineTherapyBenefitsDesktop() {
  return (
    <div className="hidden md:block">
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
                  In ER+ early breast cancer, ~5 years of tamoxifen reduces the
                  risk of breast cancer recurrence.
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
                  Compared with tamoxifen, AIs are associated with a lower risk
                  of recurrence.
                </li>
                <li>
                  Large patient-level analyses show a ~30% relative reduction in
                  recurrence with AIs versus tamoxifen.
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
                  with tamoxifen or AI)
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
                  Benefits are more evident in younger and higher-risk patients.
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
