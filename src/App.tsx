import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Layout } from "./components/layout";
import { EndocrineTherapyPros } from "./pages/endocrine-therapy-pros";

const GA_MEASUREMENT_ID = import.meta.env.VITE_REACT_APP_GA_MEASUREMENT_ID;

function App() {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        testMode: import.meta.env.NODE_ENV === "development",
        gaOptions: {
          send_page_view: false, // We'll handle page views manually
        },
      });
    }
  }, []);

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header title="Why Endocrine Therapy Alone is Right for You" />
      <Layout>
        <Routes>
          <Route path="/" element={<EndocrineTherapyPros />} />
          <Route path="/endocrine-therapy" element={<EndocrineTherapyPros />} />
          <Route path="*" element={<EndocrineTherapyPros />} />
        </Routes>
      </Layout>
      <Sidebar />
    </>
  );
}

export default App;
