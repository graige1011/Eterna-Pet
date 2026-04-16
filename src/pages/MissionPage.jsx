import React from "react";
import { Card, ChecklistLine, PrimaryButton, SectionIntro } from "../components/ui/ui";

export default function MissionPage({ setActivePage }) {
  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Our mission"
        title="Helping pets live longer and healthier through better feeding decisions"
        text="EternaPet exists to make nutrition feel more personal, more trustworthy, and easier to follow for pet owners who care deeply about wellbeing and longevity."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">A premium wellness approach for modern pet care</h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We believe that better nutrition is one of the most important ways pet owners can support daily comfort, weight balance, digestion, and long-term quality of life. EternaPet combines warm design, practical guidance, and science-backed logic into a digital experience that feels calm and reassuring.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our goal is not only to recommend food, but to create a smarter system around portions, routines, health goals, and personalized meal planning so owners feel more confident every day.
          </p>
        </Card>

        <Card className="bg-slate-900 text-white">
          <h3 className="text-2xl font-semibold tracking-tight">What EternaPet stands for</h3>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <ChecklistLine text="Warm, premium, and trustworthy experience" />
            <ChecklistLine text="Personalized guidance for dogs and cats" />
            <ChecklistLine text="Better health through better daily habits" />
            <ChecklistLine text="Designed to grow into a full startup MVP" />
          </div>
          <div className="mt-8">
            <PrimaryButton onClick={() => setActivePage("quiz")} className="bg-white text-slate-900 hover:text-slate-900">
              Start Your Pet Profile
            </PrimaryButton>
          </div>
        </Card>
      </div>
    </section>
  );
}
