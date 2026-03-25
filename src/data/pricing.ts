export interface PricingTier {
  tier: string;
  amount: string;
  period: string;
  features: string[];
  featured: boolean;
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    tier: "Basic",
    amount: "$59",
    period: "One-time purchase \u00b7 Lifetime access",
    features: [
      "Run open-source models locally",
      "Hardware-aware recommendations",
      "Projects & organization",
      "Web search & image generation",
      "Artifacts & connectors",
      "Deep research mode",
      "All future core updates",
    ],
    featured: false,
    ctaLabel: "Get Basic",
  },
  {
    tier: "Pro",
    amount: "$199",
    period: "Per year \u00b7 Everything in Basic, plus:",
    features: [
      "Voice-to-voice mode enabled",
      "Access to Fine-Tune Studio",
      "Access to Dataset Studio",
      "Access to MacLLMs private models",
      "Build your own small language models",
      "Priority team support",
      "Priority access to new features",
    ],
    featured: true,
    ctaLabel: "Get Pro",
  },
];
