export default function EndocrineTherapyBenefitsMobile() {
  return (
    <div className="md:hidden">
      <h3 className="mb-2 text-center text-xl font-semibold sm:text-2xl">
        Endocrine Therapy
        <sup>
          <a href="#ref1" id="ref1-back-mobile">
            <span className="sr-only">Reference </span>1
          </a>
        </sup>
      </h3>

      {/* Card 1: Tamoxifen */}
      <div className="border-t border-b border-black py-2">
        <div className="mb-4 text-center">
          <div className="text-xl font-semibold">
            1. Tamoxifen
            <sup>
              <a href="#ref2" id="ref2-back-mobile">
                <span className="sr-only">Reference </span>2
              </a>
            </sup>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-center text-base font-semibold sm:text-xl">
            Key Trial Benefits (Evidence Summary)
          </h4>
        </div>
        <ul className="list-disc pl-5 text-base sm:text-lg">
          <li>
            In ER+ early breast cancer, ~5 years of tamoxifen reduces the risk
            of breast cancer recurrence.
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
      </div>

      {/* Card 2: Aromatase Inhibitors */}
      <div className="border-b border-black py-2">
        <div className="mb-4 text-center">
          <div className="text-xl font-semibold">
            2. Aromatase Inhibitors (AIs)
            <sup>
              <a href="#ref3" id="ref3-back-mobile">
                <span className="sr-only">Reference </span>3
              </a>
            </sup>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-center text-base font-semibold sm:text-lg">
            Key Trial Benefits (Evidence Summary)
          </h4>
        </div>
        <ul className="list-disc pl-5 text-base sm:text-lg">
          <li>
            Compared with tamoxifen, AIs are associated with a lower risk of
            recurrence.
          </li>
          <li>
            Large patient-level analyses show a ~30% relative reduction in
            recurrence with AIs versus tamoxifen.
          </li>
          <li>
            Long-term follow-up shows fewer breast cancer-related events with AI
            therapy.
          </li>
        </ul>
      </div>

      {/* Card 3: Ovarian Function Suppression */}
      <div className="border-b border-black py-2">
        <div className="mb-4 text-center">
          <div className="text-xl font-semibold">
            3. Ovarian Function Suppression (OFS)
            <sup>
              <a href="#ref4" id="ref4-back-mobile">
                <span className="sr-only">Reference </span>4
              </a>
            </sup>
          </div>
          <div className="text-sm italic">
            (typically combined with Tam or AI)
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-center text-base font-semibold sm:text-lg">
            Key Trial Benefits (Evidence Summary)
          </h4>
        </div>
        <ul className="list-disc pl-5 text-base sm:text-lg">
          <li>
            Adding OFS to endocrine therapy has been shown to improve
            disease-free survival.
          </li>
          <li>
            At long-term follow-up, OFS-containing regimens also showed modest
            improvements in freedom from distant recurrence.
          </li>
          <li>
            Benefits are more evident in younger and higher-risk patients.
          </li>
        </ul>
      </div>
    </div>
  );
}
