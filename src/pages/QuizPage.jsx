import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Cat, Dog, Sparkles } from "lucide-react";
import { quizSteps } from "../data/mockData";
import {
  Badge,
  IconWrap,
  InfoChip,
  InfoRow,
  PrimaryButton,
  ProgressBar,
  SecondaryButton,
} from "../components/ui/ui";

export default function QuizPage({ quizData, setQuizData, setActivePage }) {
  const [step, setStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const progress = ((step + 1) / quizSteps.length) * 100;
  const current = quizSteps[step];

  const updateField = (key, value) => {
    setQuizData((prev) => ({ ...prev, [key]: value }));
  };

  const next = () => {
    if (step < quizSteps.length - 1) {
      setStep((s) => s + 1);
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsComplete(true);
    }, 1800);
  };

  const prev = () => setStep((s) => Math.max(0, s - 1));

  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-8">
        <Badge>Personalized pet profile builder</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900">Build your pet’s nutrition profile</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          A clean onboarding flow designed to feel simple, thoughtful, and premium from the very first step.
        </p>
      </div>

      <div className="overflow-hidden rounded-[36px] border border-white/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-100 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Step {Math.min(step + 1, quizSteps.length)} of {quizSteps.length}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                {isGenerating ? "Generating your plan" : isComplete ? "Your sample plan is ready" : current.title}
              </h2>
            </div>
            <div className="hidden rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 sm:block">
              Profile preview: {quizData.name || "Your pet"}
            </div>
          </div>
          <ProgressBar value={isComplete ? 100 : progress} />
        </div>

        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <GeneratingState />
            ) : isComplete ? (
              <CompleteState quizData={quizData} setActivePage={setActivePage} />
            ) : (
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="min-h-[320px]"
              >
                <QuizInput current={current} quizData={quizData} updateField={updateField} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isGenerating && !isComplete && (
          <div className="flex items-center justify-between border-t border-slate-100 p-6 sm:px-8">
            <SecondaryButton onClick={prev} disabled={step === 0}>Back</SecondaryButton>
            <PrimaryButton onClick={next}>
              {step === quizSteps.length - 1 ? "Generate Plan" : "Continue"}
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

function GeneratingState() {
  return (
    <motion.div
      key="generating"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex min-h-[320px] flex-col items-center justify-center text-center"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#eef5ea]">
        <Sparkles className="h-9 w-9 text-slate-900" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight">Analyzing profile and building recommendations</h3>
      <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
        Matching life stage, activity, feeding patterns, and wellness priorities to a calmer, more personalized routine.
      </p>
    </motion.div>
  );
}

function CompleteState({ quizData, setActivePage }) {
  return (
    <motion.div
      key="complete"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid gap-6 lg:grid-cols-[1fr_0.95fr]"
    >
      <div className="rounded-[28px] bg-[#f4faf2] p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            {quizData.species === "Dog" ? <Dog className="h-6 w-6" /> : <Cat className="h-6 w-6" />}
          </div>
          <div>
            <p className="text-sm text-slate-500">Pet summary</p>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">{quizData.name}</h3>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <InfoChip label="Breed" value={quizData.breed} />
          <InfoChip label="Age" value={`${quizData.age} years`} />
          <InfoChip label="Weight" value={`${quizData.weight} kg`} />
          <InfoChip label="Goal" value={quizData.goal} />
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">Sample recommendation</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Gentle longevity plan</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Based on this profile, we would recommend a measured fresh-food routine with digestive support, portion control, and a consistency-first feeding schedule.
        </p>
        <div className="mt-5 space-y-3">
          <InfoRow label="Calories" value="540 kcal/day" />
          <InfoRow label="Meal structure" value="2 meals daily" />
          <InfoRow label="Nutrition focus" value="Digestive comfort and healthy weight" />
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-3 sm:flex-row">
        <PrimaryButton onClick={() => setActivePage("plan")}>View Full Plan</PrimaryButton>
        <SecondaryButton onClick={() => setActivePage("dashboard")}>Open Dashboard Demo</SecondaryButton>
      </div>
    </motion.div>
  );
}

function QuizInput({ current, quizData, updateField }) {
  const value = quizData[current.key] || "";

  if (current.key === "species") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { label: "Dog", icon: Dog },
          { label: "Cat", icon: Cat },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => updateField("species", item.label)}
            className={value === item.label ? "rounded-[28px] border border-slate-900 bg-slate-50 p-6 text-left shadow-sm transition" : "rounded-[28px] border border-slate-200 bg-white p-6 text-left transition hover:border-slate-300"}
          >
            <IconWrap>
              <item.icon className="h-7 w-7" />
            </IconWrap>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Build a profile and receive a tailored nutrition recommendation.</p>
          </button>
        ))}
      </div>
    );
  }

  if (["activity", "goal", "foodType"].includes(current.key)) {
    const options = {
      activity: ["Low", "Moderate", "High"],
      goal: ["Weight management", "Sensitive stomach", "Senior support", "Growth support", "Allergy-friendly nutrition", "Daily wellness"],
      foodType: ["Dry kibble", "Wet food", "Fresh food", "Mixed feeding"],
    };

    return (
      <div className="grid gap-4 md:grid-cols-2">
        {options[current.key].map((option) => (
          <button
            key={option}
            onClick={() => updateField(current.key, option)}
            className={value === option ? "rounded-[24px] border border-slate-900 bg-slate-50 px-5 py-5 text-left text-sm shadow-sm transition" : "rounded-[24px] border border-slate-200 bg-white px-5 py-5 text-left text-sm transition hover:border-slate-300"}
          >
            <span className="font-medium text-slate-900">{option}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <label className="mb-3 block text-sm font-medium text-slate-700">Enter details</label>
      <input
        value={value}
        onChange={(e) => updateField(current.key, e.target.value)}
        placeholder={`Enter ${current.title.toLowerCase().replace("?", "")}`}
        className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-100"
      />
      <p className="mt-3 text-sm text-slate-500">This helps us build a more thoughtful and relevant recommendation.</p>
    </div>
  );
}
