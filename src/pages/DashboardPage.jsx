import React from "react";
import { Activity, CalendarDays, Cat, Dog, Package, Sparkles, Target, Utensils } from "lucide-react";
import { dashboardData, samplePlan } from "../data/mockData";
import {
  Card,
  ChecklistLine,
  IconWrap,
  InfoChip,
  InfoRow,
  MiniTimeline,
  PrimaryButton,
  ProgressMetric,
  SecondaryButton,
  SectionIntro,
} from "../components/ui/ui";

export default function DashboardPage({ quizData, setActivePage }) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          eyebrow="Owner dashboard"
          title="Your pet’s nutrition dashboard"
          text="A premium, app-like home for daily feeding guidance, progress tracking, and plan management."
        />
        <div className="flex gap-3">
          <PrimaryButton onClick={() => setActivePage("quiz")}>Update Plan</PrimaryButton>
          <SecondaryButton>Order Again</SecondaryButton>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr_1fr]">
        <Card>
          <div className="flex items-center gap-4">
            <IconWrap>{quizData.species === "Dog" ? <Dog className="h-6 w-6" /> : <Cat className="h-6 w-6" />}</IconWrap>
            <div>
              <p className="text-sm text-slate-500">Pet profile</p>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">{quizData.name}</h3>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <InfoChip label="Breed" value={quizData.breed} />
            <InfoChip label="Age" value={`${quizData.age} years`} />
            <InfoChip label="Weight" value={`${quizData.weight} kg`} />
            <InfoChip label="Goal" value={quizData.goal} />
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <Utensils className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Daily nutrition summary</h3>
          </div>
          <div className="mt-5 space-y-3">
            <InfoRow label="Calories" value={samplePlan.calories} />
            <InfoRow label="Portions" value={samplePlan.portion} />
            <InfoRow label="Meal type" value={samplePlan.mealType} />
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Subscription box</h3>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">{dashboardData.boxSummary}</p>
          <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
            Next delivery: <span className="font-medium text-slate-900">{dashboardData.nextDelivery}</span>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Feeding schedule</h3>
          </div>
          <div className="mt-5 space-y-3">
            {dashboardData.feedingSchedule.map((item) => (
              <MiniTimeline key={item.time} time={item.time} title={item.meal} subtitle={item.detail} />
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Health goals progress</h3>
          </div>
          <div className="mt-5 space-y-5">
            {dashboardData.healthProgress.map((item) => (
              <ProgressMetric key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Recommended meal plan</h3>
          </div>
          <div className="mt-5 space-y-3">
            {samplePlan.focus.map((item) => (
              <ChecklistLine key={item} text={item} darkText />
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Longevity tips</h3>
          </div>
          <div className="mt-5 space-y-3">
            {dashboardData.tips.map((tip) => (
              <ChecklistLine key={tip} text={tip} darkText />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
