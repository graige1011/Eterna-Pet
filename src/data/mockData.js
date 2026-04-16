import {
  BadgeCheck,
  HeartPulse,
  PawPrint,
  Salad,
  ShieldCheck,
  Sparkles,
  Truck,
  Utensils,
  Weight,
  Leaf,
  TrendingUp,
  Clock3,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "quiz", label: "Pet Quiz" },
  { id: "plan", label: "Plan" },
  { id: "dashboard", label: "Dashboard" },
  { id: "mission", label: "Mission" },
];

export const trustIndicators = [
  "Personalized for dogs and cats",
  "Science-backed nutrition guidance",
  "Built for longevity-focused pet owners",
  "Premium subscription-ready experience",
];

export const problems = [
  {
    title: "Wrong portions",
    text: "Many pets are fed too much or too little, which affects weight, energy, and long-term health.",
    icon: Weight,
  },
  {
    title: "Low-quality food",
    text: "Generic feeding routines often ignore ingredient quality, life stage, and real health needs.",
    icon: Salad,
  },
  {
    title: "Allergies and sensitivities",
    text: "Digestive discomfort and skin issues are often linked to poor food fit.",
    icon: ShieldCheck,
  },
  {
    title: "Low energy and digestive issues",
    text: "Daily wellbeing is closely tied to nutrient balance, meal timing, and consistency.",
    icon: HeartPulse,
  },
];

export const solutionPoints = [
  "Personalized meal and portion recommendations",
  "Health-goal based guidance for daily feeding",
  "Support for allergies, digestion, and weight management",
  "An easier routine that reduces guesswork",
];

export const howItWorks = [
  {
    title: "Tell us about your pet",
    text: "Share species, breed, age, weight, activity, sensitivities, and goals.",
    icon: PawPrint,
  },
  {
    title: "Get a personalized plan",
    text: "Receive a nutrition recommendation tailored to your pet profile.",
    icon: Sparkles,
  },
  {
    title: "Follow meals and support",
    text: "Use your plan, schedule, and guidance to build a healthier routine.",
    icon: Truck,
  },
];

export const benefits = [
  {
    title: "Personalized meal plans",
    description: "Built around species, size, life stage, and goals.",
    icon: Utensils,
  },
  {
    title: "Health-focused recommendations",
    description: "Nutrition support for digestion, weight, and energy.",
    icon: HeartPulse,
  },
  {
    title: "Longevity support",
    description: "Designed to help pets live healthier for longer.",
    icon: BadgeCheck,
  },
  {
    title: "Portion control",
    description: "Reduce overfeeding with simple, measurable guidance.",
    icon: Weight,
  },
  {
    title: "Allergy-conscious guidance",
    description: "Better visibility into sensitivities and food fit.",
    icon: ShieldCheck,
  },
  {
    title: "Simpler daily routine",
    description: "Clear feeding schedules with less guesswork.",
    icon: Clock3,
  },
];

export const goals = [
  { title: "Weight management", text: "Better portion balance and healthy body condition.", icon: Weight },
  { title: "Sensitive stomach", text: "Gentler nutrition and calmer digestion support.", icon: ShieldCheck },
  { title: "Senior support", text: "Thoughtful routines for older pets and daily wellness.", icon: HeartPulse },
  { title: "Puppy or kitten growth", text: "Nutrition structure for healthy early development.", icon: TrendingUp },
  { title: "Allergy-friendly nutrition", text: "Ingredient-conscious recommendations for sensitive pets.", icon: Leaf },
  { title: "Daily wellness", text: "Simple habits that support energy and comfort.", icon: Sparkles },
];

export const testimonials = [
  {
    name: "Sophie van Dijk",
    location: "Amsterdam, NL",
    pet: "Milo, Mini Labradoodle",
    quote:
      "EternaPet made feeding feel calm again. The portion guidance and digestion-focused plan gave us structure almost immediately.",
  },
  {
    name: "Lucas Moreau",
    location: "Lyon, FR",
    pet: "Nala, British Shorthair",
    quote:
      "It feels like a premium wellness app for my cat. The recommendations were thoughtful and easy to follow.",
  },
  {
    name: "Emma Rossi",
    location: "Milan, IT",
    pet: "Leo, Senior Golden Retriever",
    quote:
      "We wanted proactive support as Leo got older. EternaPet helped us make better daily nutrition decisions.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "€19",
    subtitle: "For pet owners who want a smarter routine",
    features: [
      "Personalized nutrition profile",
      "Portion guidance",
      "Basic feeding schedule",
      "Monthly plan refresh",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Balanced",
    price: "€39",
    subtitle: "For daily support and better consistency",
    features: [
      "Everything in Starter",
      "Health-goal based plan",
      "Allergy and sensitivity guidance",
      "Weekly nutrition tips",
    ],
    cta: "Choose Balanced",
    featured: true,
  },
  {
    name: "Longevity+",
    price: "€69",
    subtitle: "For premium proactive pet wellness",
    features: [
      "Everything in Balanced",
      "Longevity-focused support",
      "Advanced meal recommendations",
      "Priority plan updates",
    ],
    cta: "Upgrade to Longevity+",
    featured: false,
  },
];

export const defaultQuizData = {
  species: "Dog",
  name: "Milo",
  breed: "Mini Labradoodle",
  age: "6",
  weight: "14",
  activity: "Moderate",
  allergies: "Chicken sensitivity",
  goal: "Sensitive stomach",
  foodType: "Dry kibble",
};

export const quizSteps = [
  { key: "species", title: "Is your pet a dog or a cat?" },
  { key: "name", title: "What is your pet’s name?" },
  { key: "breed", title: "What breed are they?" },
  { key: "age", title: "How old is your pet?" },
  { key: "weight", title: "What is their current weight?" },
  { key: "activity", title: "How active are they?" },
  { key: "allergies", title: "Any allergies or sensitivities?" },
  { key: "goal", title: "What is your main health goal?" },
  { key: "foodType", title: "What do they currently eat?" },
];

export const samplePlan = {
  calories: "540 kcal / day",
  portion: "2 meals per day, 135g each",
  focus: ["Digestive comfort", "Lean body maintenance", "Consistent energy"],
  mealType: "Fresh, high-protein, limited-ingredient nutrition",
  explanation:
    "This plan prioritizes digestibility, controlled portions, and nutrient density to support daily comfort and long-term wellness.",
  whyItFits:
    "Because this pet has moderate activity and a sensitive stomach, the recommendation focuses on routine consistency, digestibility, and balanced portions.",
};

export const dashboardData = {
  nextDelivery: "April 18",
  boxSummary: "14-day fresh plan, digestion support blend, two daily portions",
  healthProgress: [
    { label: "Weight routine", value: 78 },
    { label: "Digestive stability", value: 84 },
    { label: "Feeding consistency", value: 91 },
  ],
  feedingSchedule: [
    { time: "07:30", meal: "Morning meal", detail: "135g fresh turkey blend" },
    { time: "18:30", meal: "Evening meal", detail: "135g fresh turkey blend" },
  ],
  tips: [
    "Keep mealtimes consistent to support digestion and appetite regulation.",
    "Transition food gradually over 7 to 10 days when updating the plan.",
    "Track stool quality and energy levels to spot improvements early.",
  ],
};
