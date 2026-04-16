import React from "react";
import { GhostButton } from "../ui/ui";

export default function Footer({ setActivePage }) {
  return (
    <footer className="border-t border-white/80 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-medium text-slate-900">EternaPet</p>
          <p className="mt-1">Help pets live longer through better nutrition.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <GhostButton onClick={() => setActivePage("home")}>Home</GhostButton>
          <GhostButton onClick={() => setActivePage("quiz")}>Pet Quiz</GhostButton>
          <GhostButton onClick={() => setActivePage("dashboard")}>Dashboard</GhostButton>
          <GhostButton onClick={() => setActivePage("mission")}>Mission</GhostButton>
        </div>
      </div>
    </footer>
  );
}
