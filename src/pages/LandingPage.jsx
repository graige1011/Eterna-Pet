import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Dog, HeartPulse, Stars, Utensils } from "lucide-react";
import {
  benefits,
  goals,
  howItWorks,
  pricingPlans,
  problems,
  samplePlan,
  solutionPoints,
  testimonials,
  trustIndicators,
} from "../data/mockData";
import {
  Badge,
  Card,
  ChecklistCard,
  ChecklistLine,
  FeatureCard,
  GlassMetric,
  IconWrap,
  MiniTimeline,
  PricingCard,
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
  StatPill,
  TrustPill,
} from "../components/ui/ui";

export default function LandingPage({ setActivePage }) {
  return (
    <div className="space-y-20">
      <HeroSection setActivePage={setActivePage} />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <GoalsSection />
      <TestimonialsSection />
      <PricingSection setActivePage={setActivePage} />
      <FinalCTA setActivePage={setActivePage} />
    </div>
  );
}

function HeroSection({ setActivePage }) {
  return (
    <section className="grid items-center gap-10 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:pt-10">
      <div>
        <Badge>Personalized pet nutrition, designed for longevity</Badge>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Personalized nutrition for a longer, healthier pet life
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          EternaPet helps owners feed with more intention through personalized meal guidance,
          smarter portions, wellness goals, and a calmer daily routine for dogs and cats.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton onClick={() => setActivePage("quiz")}>
            Get My Pet’s Plan
            <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
          <SecondaryButton onClick={() => setActivePage("mission")}>How It Works</SecondaryButton>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {trustIndicators.map((item) => (
            <TrustPill key={item} text={item} />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(173,213,178,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(231,217,199,0.45),transparent_35%)]" />
        <div className="relative space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <GlassMetric title="Longevity focus" value="Daily" subtitle="Better nutrition decisions" icon={HeartPulse} />
            <GlassMetric title="Meal guidance" value="Personalized" subtitle="By pet profile and goals" icon={Utensils} />
          </div>
          <div className="rounded-[28px] border border-emerald-100 bg-[#f6fbf5] p-5 shadow-inner">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-900">Today’s nutrition summary</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Milo’s digestion-friendly plan</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Fresh high-protein meals, portion guidance, and calm routine support for better comfort, weight balance, and energy.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-sm">
                <Dog className="h-8 w-8 text-slate-900" />
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <StatPill label="Calories" value="540/day" />
              <StatPill label="Meals" value="2 per day" />
              <StatPill label="Goal" value="Gentle digestion" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] bg-slate-900 p-5 text-white shadow-xl">
              <p className="text-sm text-slate-300">Feeding routine</p>
              <div className="mt-4 space-y-3">
                <MiniTimeline time="07:30" title="Morning meal" subtitle="135g fresh turkey blend" dark />
                <MiniTimeline time="18:30" title="Evening meal" subtitle="135g fresh turkey blend" dark />
              </div>
            </div>
            <div className="rounded-[28px] border border-white/80 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-700">Plan health focus</p>
              <div className="mt-4 space-y-3">
                {samplePlan.focus.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                    <BadgeCheck className="h-4 w-4 text-emerald-700" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <SectionIntro
        eyebrow="Why EternaPet"
        title="Most pet feeding routines were never designed around the individual pet"
        text="Too many owners are left guessing portions, ingredients, and what actually supports long-term health. EternaPet brings clarity to the daily decisions that shape a pet’s future wellbeing."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {problems.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>

      <div className="rounded-[32px] border border-emerald-100 bg-[#f4faf2] p-8 shadow-sm lg:col-span-2">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge>The EternaPet approach</Badge>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
              A simpler, more intentional path to better pet health
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              We combine pet profile data, practical routine design, and wellness-oriented nutrition guidance into one premium experience.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {solutionPoints.map((item) => (
              <ChecklistCard key={item} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section>
      <SectionIntro
        eyebrow="How it works"
        title="From pet profile to personalized routine in three simple steps"
        text="Designed to feel as easy as a modern consumer app, with the depth of a premium wellness platform."
        center
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {howItWorks.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white p-6 shadow-sm"
          >
            <div className="absolute right-5 top-5 text-6xl font-semibold tracking-tight text-slate-100">0{index + 1}</div>
            <div className="relative">
              <IconWrap>
                <step.icon className="h-6 w-6" />
              </IconWrap>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section>
      <SectionIntro
        eyebrow="Benefits"
        title="Everything designed to make healthy feeding decisions easier"
        text="Premium tools and guidance that reduce guesswork while helping your pet feel better, stay balanced, and build healthier habits over time."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function GoalsSection() {
  return (
    <section>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          eyebrow="Personalized goals"
          title="Plans built around what your pet needs most right now"
          text="Whether the focus is daily comfort, healthy weight, growth, or senior support, EternaPet makes it easier to feed with purpose."
        />
        <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
          Goal-aware plans for dogs and cats across different life stages
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {goals.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="rounded-[36px] border border-white/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          eyebrow="Loved by pet owners"
          title="A calmer, more confident feeding routine"
          text="Premium guidance that feels practical from day one."
        />
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={i === index ? "h-2.5 w-8 rounded-full bg-slate-900 transition-all" : "h-2.5 w-2.5 rounded-full bg-slate-300 transition-all"}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
            className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl"
          >
            <div className="flex items-center gap-2 text-amber-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Stars key={i} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-6 text-2xl font-medium leading-10 tracking-tight">“{active.quote}”</p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="font-medium">{active.name}</p>
              <p className="mt-1 text-sm text-slate-300">{active.location}</p>
              <p className="mt-2 text-sm text-emerald-300">Pet: {active.pet}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid gap-4">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setIndex(i)}
              className={i === index ? "rounded-[28px] border border-slate-900 bg-slate-50 p-5 text-left shadow-sm transition" : "rounded-[28px] border border-slate-200 bg-white p-5 text-left transition hover:border-slate-300"}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.pet}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{item.quote}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ setActivePage }) {
  return (
    <section>
      <SectionIntro
        eyebrow="Pricing"
        title="Choose the level of support that fits your feeding routine"
        text="Start simple or go deeper with more personalized support over time."
        center
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} onClick={() => setActivePage("quiz")} />
        ))}
      </div>
    </section>
  );
}

function FinalCTA({ setActivePage }) {
  return (
    <section className="overflow-hidden rounded-[40px] bg-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <Badge dark>Start your pet’s health profile today</Badge>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Better feeding decisions can shape a better, longer pet life
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Build your pet’s profile, get a personalized plan, and turn nutrition into a more confident part of your daily routine.
          </p>
        </div>
        <div className="rounded-[32px] bg-white/6 p-5 backdrop-blur">
          <div className="grid gap-3 sm:grid-cols-2">
            <button onClick={() => setActivePage("quiz")} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5">
              Get My Pet’s Plan
            </button>
            <button onClick={() => setActivePage("dashboard")} className="rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5">
              View Dashboard Demo
            </button>
          </div>
          <div className="mt-5 grid gap-3 text-sm text-white/80">
            <ChecklistLine text="Personalized in minutes" />
            <ChecklistLine text="Designed for dogs and cats" />
            <ChecklistLine text="Subscription-ready product experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
