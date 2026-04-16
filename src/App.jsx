import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import PlanResultsPage from "./pages/PlanResultsPage";
import DashboardPage from "./pages/DashboardPage";
import MissionPage from "./pages/MissionPage";
import { defaultQuizData } from "./data/mockData";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quizData, setQuizData] = useState(defaultQuizData);

  const currentPage = useMemo(() => {
    switch (activePage) {
      case "quiz":
        return <QuizPage quizData={quizData} setQuizData={setQuizData} setActivePage={setActivePage} />;
      case "plan":
        return <PlanResultsPage quizData={quizData} setActivePage={setActivePage} />;
      case "dashboard":
        return <DashboardPage quizData={quizData} setActivePage={setActivePage} />;
      case "mission":
        return <MissionPage setActivePage={setActivePage} />;
      default:
        return <LandingPage setActivePage={setActivePage} />;
    }
  }, [activePage, quizData]);

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-slate-900 antialiased">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top,#d9ead7_0%,#eef3e8_30%,#f7f6f2_65%)]" />

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {currentPage}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
