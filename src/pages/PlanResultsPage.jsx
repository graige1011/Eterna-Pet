import React from "react";
import { Brain, Cat, Dog, HeartPulse, Target } from "lucide-react";
import { samplePlan } from "../data/mockData";
import { Card, ChecklistLine, IconWrap, InfoChip, InfoRow, PrimaryButton, SectionIntro, SecondaryButton } from "../components/ui/ui";

export default function PlanResultsPage({ quizData, setActivePage }) {
  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Nutrition plan"
        title={`A personalized plan for ${quizData.name}`}
        text="A premium results page that explains the recommendation clearly and helps move the user toward subscription."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <div className="flex items-center gap-4">
            <IconWrap>{quizData.species === "Dog" ? <Dog className="h-6 w-6" /> : <Cat className="h-6 w-6" />}</IconWrap>
            <div>
              <p className="text-sm text-slate-500">Pet summary</p>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{quizData.name}</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoChip label="Breed" value={quizData.breed} />
            <InfoChip label="Age" value={`${quizData.age} years`} />
            <InfoChip label="Weight" value={`${quizData.weight} kg`} />
            <InfoChip label="Goal" value={quizData.goal} />
          </div>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">Recommended guidance</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Gentle longevity plan</h3>
          <div className="mt-5 space-y-3">
            <InfoRow label="Recommended calories" value={samplePlan.calories} />
            <InfoRow label="Portion guidance" value={samplePlan.portion} />
            <InfoRow label="Suggested meal type" value={samplePlan.mealType} />
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-emerald-700" />
            <h4 className="font-semibold text-slate-900">Nutrition focus</h4>
          </div>
          <div className="mt-4 space-y-3">
            {samplePlan.focus.map((item) => (
              <ChecklistLine key={item} text={item} darkText />
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <Brain className="h-5 w-5 text-emerald-700" />
            <h4 className="font-semibold text-slate-900">Why this plan fits</h4>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">{samplePlan.whyItFits}</p>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <HeartPulse className="h-5 w-5 text-emerald-700" />
            <h4 className="font-semibold text-slate-900">Health goal support</h4>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">{samplePlan.explanation}</p>
        </Card>
      </div>

      <Card className="bg-slate-900 text-white">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-slate-300">Ready to get started?</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">Subscribe to your pet’s personalized plan</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Turn this recommendation into a subscription-ready feeding routine with ongoing updates and premium support.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900">Subscribe Now</button>
            <SecondaryButton onClick={() => setActivePage("quiz")} className="border-white/15 bg-transparent text-white hover:bg-white/5 hover:text-white">Edit Profile</SecondaryButton>
          </div>
        </div>
      </Card>
    </section>
  );
}
