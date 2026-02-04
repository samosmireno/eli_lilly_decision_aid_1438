import { useEffect } from "react";
import ReactGA from "react-ga4";

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
  return <>Test</>;
}

export default App;
