import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={cn("rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900", className)}
    >
      {children}
    </button>
  );
}

export function Badge({ children, dark = false }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm",
        dark ? "bg-white/10 text-white/90" : "border border-emerald-200 bg-white/90 text-emerald-800"
      )}
    >
      {children}
    </div>
  );
}

export function SectionIntro({ eyebrow, title, text, center = false }) {
  return (
    <div className={cn(center && "mx-auto max-w-3xl text-center")}>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export function Card({ children, className = "" }) {
  return <div className={cn("rounded-[32px] border border-white/80 bg-white p-6 shadow-sm", className)}>{children}</div>;
}

export function FeatureCard({ title, text, description, icon: Icon }) {
  return (
    <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef5ea] text-slate-900">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text || description}</p>
    </div>
  );
}

export function PricingCard({ plan, onClick }) {
  return (
    <div
      className={cn(
        "rounded-[32px] border p-7 shadow-sm transition hover:-translate-y-1",
        plan.featured ? "border-emerald-200 bg-[#f4faf2] shadow-lg" : "border-white/80 bg-white"
      )}
    >
      {plan.featured && <div className="mb-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">Most popular</div>}
      <p className="text-lg font-semibold tracking-tight">{plan.name}</p>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
        <span className="pb-1 text-sm text-slate-500">/ month</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{plan.subtitle}</p>
      <div className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
            <div className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-800">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <PrimaryButton onClick={onClick} className={cn("mt-7 w-full justify-center", !plan.featured && "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:shadow-sm")}>{plan.cta}</PrimaryButton>
    </div>
  );
}

export function TrustPill({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
      <Check className="h-4 w-4 text-emerald-700" />
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}

export function ChecklistCard({ text }) {
  return (
    <div className="rounded-3xl border border-white/80 bg-white px-5 py-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-2xl bg-emerald-50 p-2 text-emerald-800">
          <Check className="h-4 w-4" />
        </div>
        <p className="text-sm leading-6 text-slate-700">{text}</p>
      </div>
    </div>
  );
}

export function ChecklistLine({ text, darkText = false }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
      <span className={cn("text-sm leading-6", darkText ? "text-slate-700" : "text-white/80")}>{text}</span>
    </div>
  );
}

export function GlassMetric({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{value}</h3>
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        </div>
        <div className="rounded-2xl bg-[#eef5ea] p-3 text-slate-900">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

export function MiniTimeline({ time, title, subtitle, dark = false }) {
  return (
    <div className={cn("flex items-start gap-4 rounded-2xl px-4 py-4", dark ? "bg-white/6" : "bg-slate-50")}>
      <div className={cn("rounded-xl px-3 py-2 text-sm font-medium", dark ? "bg-white/10 text-white" : "bg-white text-slate-900 shadow-sm")}>{time}</div>
      <div>
        <p className={cn("text-sm font-medium", dark ? "text-white" : "text-slate-900")}>{title}</p>
        <p className={cn("mt-1 text-sm", dark ? "text-slate-300" : "text-slate-500")}>{subtitle}</p>
      </div>
    </div>
  );
}

export function IconWrap({ children }) {
  return <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef5ea] text-slate-900">{children}</div>;
}

export function ProgressBar({ value }) {
  return (
    <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
      <motion.div className="h-full rounded-full bg-slate-900" animate={{ width: `${value}%` }} transition={{ duration: 0.35 }} />
    </div>
  );
}

export function InfoChip({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-4 py-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

export function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-4">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium text-slate-900 text-right">{value}</span>
    </div>
  );
}

export function ProgressMetric({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="font-medium text-slate-900">{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-slate-900" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
