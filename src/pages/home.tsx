import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8">
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-2">
        <img
          src="/images/homepage-graphic.png"
          alt="Homepage Graphic"
          className="h-full w-full max-w-lg border border-gray-900"
        />

        {/* Right side - Content */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="w-full max-w-lg border border-black px-12 py-4">
            <h1 className="text-4xl font-bold">TDA</h1>
          </div>

          <div className="w-full max-w-lg space-y-4 border border-black px-6 pt-6 pb-4">
            <h2 className="text-2xl font-semibold">
              HR + HER2 - Treatment Decision Aid
            </h2>
            <p className="text-lg">
              This tool is designed to support conversations between you and
              your patient with HR+/HER2− early breast cancer. By entering key
              clinicopathologic characteristics, the tool stratifies recurrence
              risk and presents evidence-based treatment pathways aligned with
              the patient's individual profile. The information provided is
              intended to facilitate clear, balanced discussions about potential
              benefits, risks, and patient preferences so that treatment
              decisions can be made collaboratively and tailored to what matters
              most to each patient.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg">click to</p>
            <button
              onClick={() => navigate("/patient-characteristics-input")}
              className="border border-black px-12 py-3 text-2xl font-bold transition-colors hover:bg-black hover:text-white"
            >
              BEGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
