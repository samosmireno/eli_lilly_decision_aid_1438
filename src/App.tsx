import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Button } from "./components/ui/button";

const GA_MEASUREMENT_ID = import.meta.env.VITE_REACT_APP_GA_MEASUREMENT_ID;

function App() {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        testMode: import.meta.env.NODE_ENV === "development",
        gaOptions: {
          send_page_view: false, // We'll handle page views manually
        },
      });

      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);
  return (
    <>
      <Button className="bg-amber-300">Test</Button>
    </>
  );
}

export default App;
