export type CategoryId = "short-form" | "motion-graphics" | "long-form" | "ui-animation";
export type ColorVariant = "primary" | "accent";

export interface Work {
  id: string;
  title: string;
  description: string;
  category: CategoryId;
  driveId: string;
}

export interface Category {
  label: string;
  color: ColorVariant;
}

export const categories: Record<CategoryId, Category> = {
  "short-form": { label: "Short Form", color: "primary" },
  "motion-graphics": { label: "Motion Graphics", color: "accent" },
  "long-form": { label: "Long Form", color: "primary" },
  "ui-animation": { label: "UI Animation", color: "accent" },
};

export const works: Work[] = [
  {
    id: "work-1",
    title: "The Viral Edit System",
    description: "High-energy brand introduction with kinetic typography",
    category: "motion-graphics",
    driveId: "16ksagWmAhZSVfGe4ymjh-8-PwSnIimqa",
  },
  {
    id: "work-2",
    title: "Social Media Reel",
    description: "Scroll-stopping content optimized for engagement",
    category: "short-form",
    driveId: "1i4Gpal0huoR5lN254zmh3Z1mDfJ04__c",
  },
  {
    id: "work-3",
    title: "The Engagement Formula",
    description: "Sleek product reveal with smooth transitions",
    category: "motion-graphics",
    driveId: "1KpNG1aZODvaEkGCoZ4w3x_SNK0gzyTvo",
  },
  {
    id: "work-4",
    title: "YouTube Highlight Edit",
    description: "Fast-paced gaming content with dynamic effects",
    category: "short-form",
    driveId: "1uyzPC0d_vl0KF3QjI5CYPNIFiiUkKQ4q",
  },
  {
    id: "work-9",
    title: "Real State Video",
    description: "Stunning property showcase with cinematic transitions",
    category: "short-form",
    driveId: "1ydwkJNYMfF-46CWFGuMt2Sfz8PGRbVJa",
  },
  {
    id: "work-10",
    title: "Ecom Audience Retention",
    description: "Attention-grabbing e-commerce content for maximum retention",
    category: "short-form",
    driveId: "1p9Ph1Bj2AOelKNHPm3yeq2_4gUrzcx25",
  },
  {
    id: "work-11",
    title: "Ecom Ai Video",
    description: "AI-enhanced e-commerce video production",
    category: "short-form",
    driveId: "1tJ02Fz1B8i78D3FB254kJaAIu59HMAEj",
  },
  {
    id: "work-12",
    title: "Grow your Business",
    description: "Compelling business growth content for social media",
    category: "short-form",
    driveId: "1weEL1SaSCnrdlED6kD2XdO5NrBF5nWMP",
  },
  {
    id: "work-13",
    title: "Stock Market Trading",
    description: "Dynamic trading content with engaging visuals",
    category: "short-form",
    driveId: "1YvvlyanTjC7kYeGK-qWRyf-kp3h_FPLa",
  },
  {
    id: "work-5",
    title: "Corporate Explainer",
    description: "Smooth micro-interactions and screen transitions",
    category: "ui-animation",
    driveId: "1Hc6NFKvx3x6SaHsuHpnxpAf2T99gj6L1",
  },
  {
    id: "work-6",
    title: "Engaging Q&A Flow",
    description: "Professional motion graphics for business presentation",
    category: "long-form",
    driveId: "10I-auVp7of1mJjHXOEW7L4MGEeKVKZ7C",
  },
  {
    id: "work-7",
    title: "Narrative & Storytelling Edits",
    description: "Engaging visual treatment for audio content",
    category: "long-form",
    driveId: "1R5yZX-RnquPAyY3cljbOQTAi2066_OWz",
  },
  {
    id: "work-8",
    title: "Game On: Chess Meme Video",
    description: "Memorable brand identity animation",
    category: "motion-graphics",
    driveId: "1gyjVKFZMjNCovO199Fiemx5TZzdX3y8J",
  },
  {
    id: "work-14",
    title: "Ecom VSLs",
    description: "High-converting video sales letter for e-commerce",
    category: "long-form",
    driveId: "1mHeAwJJ3MzroLWpy3mdTWgeH0K0Jp-t9",
  },
  {
    id: "work-15",
    title: "2D Ai Animated Video",
    description: "Creative 2D animation powered by AI technology",
    category: "motion-graphics",
    driveId: "1-7A3Abd6hDDs9O1Sp-zmP0grG1tqDafB",
  },
  {
    id: "work-16",
    title: "Podcast",
    description: "Professional podcast video production and editing",
    category: "long-form",
    driveId: "1WM2JGrc3HldEC828JcTK-B9mNUD9OUEB",
  },
  {
    id: "work-17",
    title: "Soccer Built Around a Story",
    description: "Story-driven soccer content with cinematic narrative",
    category: "long-form",
    driveId: "1c4ssThXbw2j2gPnMVgLPMuXXo1ub7Eeo",
  },
  {
    id: "work-18",
    title: "Travel Cinematic Flow",
    description: "Cinematic travel content with smooth transitions",
    category: "long-form",
    driveId: "1PnwypFYmObRtz1OhX81SNqRh3dXedvKT",
  },
  {
    id: "work-19",
    title: "YouTube Documentary Style",
    description: "Professional documentary-style YouTube content",
    category: "long-form",
    driveId: "17caoe4k8jgeugpOQvckbG6cx27sLxagU",
  },
];
