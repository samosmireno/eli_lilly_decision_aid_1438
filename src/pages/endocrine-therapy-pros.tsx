import { PageLayout } from "../components/page-layout";

export function EndocrineTherapyPros() {
  return (
    <PageLayout title="Why Endocrine Therapy Alone is Right for You">
      <article className="mt-27 mr-16 space-y-3">
        <section>
          <p className="text-2xl leading-relaxed">
            For patients with hormone receptor-positive (HR+) early breast
            cancer who have a lower risk of recurrence, the main goal of
            endocrine therapy is to further reduce that small risk over the long
            term.
          </p>
        </section>

        <section aria-labelledby="why-endocrine-therapy">
          <h2 id="why-endocrine-therapy" className="mb-4 text-2xl font-bold">
            Why do you still need endocrine therapy?
          </h2>
          <p className="text-2xl leading-relaxed">
            Endocrine therapy acts like an insurance policy. It lowers the
            chance of breast cancer coming back. Even after surgery or
            radiation, tiny cancer cells may remain and can grow if exposed to
            estrogen. This treatment blocks estrogen's effects, helping to keep
            you cancer-free for longer.
          </p>
        </section>

        <section aria-labelledby="why-not-cdk">
          <h2 id="why-not-cdk" className="mb-4 text-2xl font-bold">
            Why do I not need additional CDK4/6 inhibitors?
          </h2>
          <p className="text-2xl leading-relaxed">
            Because the risk of recurrence of your cancer is lower, endocrine
            therapy alone works very well. Adding these medicines would not
            provide extra benefit and could cause unnecessary side effects.
          </p>
        </section>

        <footer className="mt-30">
          <p className="text-sm text-gray-700">
            Cucciniello L, et al. Cancer Treat Rev. 2023;120:102624.
          </p>
        </footer>
      </article>
    </PageLayout>
  );
}
