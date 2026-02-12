import { PageLayout } from "../components/page-layout";

export function RoleCDK46Inhibitors() {
  return (
    <PageLayout title="Role of CDK4/6 inhibitors in HR+ Early Breast Cancer">
      <article className="mr-16 space-y-8">
        <ul className="list-disc text-2xl">
          <li className="ml-6">
            Cancer cells grow by dividing controlled by proteins called CDK4 and
            CDK6*.
          </li>
          <li className="ml-6">
            CDK4/6 inhibitors prevent cancer cells from moving through the cell
            cycle.
          </li>
          <li className="ml-6">
            This helps keep cancer cells from multiplying.
          </li>
        </ul>

        <img
          src="/cdk4-6-inhibitors.png"
          alt="CDK4/6 inhibitors mechanism of action"
          className="mx-auto h-96 max-w-2xl border border-gray-900"
        />

        <footer className="text-sm text-gray-700">
          <p>
            *CDK4/6 inhibitors are targeted therapies that block
            cyclin-dependent kinases 4 and 6, key regulators of cell-cycle
            progression, thereby slowing or stopping cancer cell division.
            CDK4/6 inhibitors are used in combination with endocrine therapy in
            selected patients with HR+ early breast cancer to further reduce the
            risk of disease recurrence.
          </p>
          <p>
            CDK, cyclin-dependent kinase; ET, endocrine therapy; HR+, hormone
            receptor-positive.
          </p>
          <p>
            1. Finn RS, et al. New England Journal of Medicine.
            2016;375:1925-1936. 2. Johnston SRD, et al. Journal of Clinical
            Oncology. 2023;41:1376-1387. 3. Slamon DJ, et al. New England
            Journal of Medicine. 2024;390:943-955.
          </p>
        </footer>
      </article>
    </PageLayout>
  );
}
