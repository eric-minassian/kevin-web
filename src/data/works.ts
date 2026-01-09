export interface Work {
  id: string;
  title: string;
  description: string;
  category: "short-form" | "motion-graphics" | "long-form" | "ui-animation";
  driveId: string;
}

export const categories = {
  "short-form": { label: "Short Form", color: "primary" },
  "motion-graphics": { label: "Motion Graphics", color: "accent" },
  "long-form": { label: "Long Form", color: "primary" },
  "ui-animation": { label: "UI Animation", color: "accent" },
};

export const works: Work[] = [
  {
    id: "work-1",
    title: "Dynamic Brand Intro",
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
    title: "Product Showcase",
    description: "Sleek product reveal with smooth transitions",
    category: "motion-graphics",
    driveId: "1KpNG1aZODvaEkGCoZ4w3x_SNK0gzyTvo",
  },
  {
    id: "work-4",
    title: "YouTube Highlight Edit",
    description: "Fast-paced gaming content with dynamic effects",
    category: "short-form",
    driveId: "1A_SWLjpZyBAdw5s2MldA_I1B_Dw3rPJ2",
  },
  {
    id: "work-5",
    title: "App UI Animation",
    description: "Smooth micro-interactions and screen transitions",
    category: "ui-animation",
    driveId: "1Hc6NFKvx3x6SaHsuHpnxpAf2T99gj6L1",
  },
  {
    id: "work-6",
    title: "Corporate Explainer",
    description: "Professional motion graphics for business presentation",
    category: "long-form",
    driveId: "10I-auVp7of1mJjHXOEW7L4MGEeKVKZ7C",
  },
  {
    id: "work-7",
    title: "Podcast Visual Edit",
    description: "Engaging visual treatment for audio content",
    category: "long-form",
    driveId: "1R5yZX-RnquPAyY3cljbOQTAi2066_OWz",
  },
  {
    id: "work-8",
    title: "Logo Animation",
    description: "Memorable brand identity animation",
    category: "motion-graphics",
    driveId: "1gyjVKFZMjNCovO199Fiemx5TZzdX3y8J",
  },
];
