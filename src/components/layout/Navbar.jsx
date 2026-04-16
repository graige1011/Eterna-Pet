import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PawPrint, X } from "lucide-react";
import { navItems } from "../../data/mockData";
import { cn, PrimaryButton } from "../ui/ui";

export default function Navbar({ activePage, setActivePage, mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f7f6f2]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => setActivePage("home")} className="flex items-center gap-3 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
            <PawPrint className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">EternaPet</p>
            <p className="text-xs text-slate-500">Nutrition for longer, healthier pet lives</p>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                activePage === item.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex">
          <PrimaryButton onClick={() => setActivePage("quiz")}>Get My Pet’s Plan</PrimaryButton>
        </div>

        <button className="rounded-xl border border-slate-200 bg-white p-2 md:hidden" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-[#f7f6f2] md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition",
                    activePage === item.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:bg-white"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <PrimaryButton
                className="w-full justify-center"
                onClick={() => {
                  setActivePage("quiz");
                  setMobileOpen(false);
                }}
              >
                Get My Pet’s Plan
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
