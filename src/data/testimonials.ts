export interface Testimonial {
  id: string;
  driveId: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    driveId: "1Wws7eAop2Du3dWbDD9VJegbeF1jIfYN9",
    name: "Kevin Minassian",
    role: "Businessman",
  },
  {
    id: "testimonial-2",
    driveId: "1smz3LCBYz1XMpzkCl_uyvA0MZ3Fthzvh",
    name: "Ahn Min Tran",
    role: "Gamer",
  },
  {
    id: "testimonial-3",
    driveId: "15oWFe8yoXTIOItRkDbUgzu5wvRbmiQ7U",
    name: "Happy Client",
    role: "Business Owner",
  },
];
