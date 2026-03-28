export interface Therapist {
  id: number;
  name: string;
  specialty: string;
  insurance: string[];
  bio: string;
  rate: string;
  isLive: boolean;
  verified: boolean;
  photo?: string; // Optional: URL to therapist's photo
  tags?: string[]; // Optional: List of tags for filtering
  rating?: number | string;
  reviewSource?: string;
  languages?: string[];
}

export const MOCK_THERAPISTS: Therapist[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen, PsyD",
    specialty: "Anxiety & Career Burnout",
    insurance: ["Blue Cross", "Aetna", "Cigna"],
    rate: "$150/session",
    isLive: true, // This triggers the Pulse
    bio: "Specializing in the unique pressures of the SF tech ecosystem. I help founders and engineers rebuild their 'Zen' using evidence-based CBT and mindfulness.",
    verified: true,
    photo: "/images/therapists/sarah.jpg",
    tags: ["Cognitive Behavioral", "Mindfulness", "LGBTQ+ Affirming"],
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    name: "Marcus Rivera, LMFT",
    specialty: "Grief & Life Transitions",
    insurance: ["Kaiser", "United", "Medi-Cal"],
    rate: "$120/session",
    isLive: true,
    bio: "I focus on the 'Granola' side of healing—helping you reconnect with your core self after profound loss. Let's work through the layers together.",
    verified: true,
    photo: "/images/therapists/marcus.jpg",
    tags: ["Grief Counseling", "Holistic", "Trauma-Informed"],
    languages: ["English"]
  },
  {
    id: 3,
    name: "Elena Petrov, LCSW",
    specialty: "Depression & Mood Disorders",
    insurance: ["Blue Shield", "Cash Only"],
    rate: "$175/session",
    isLive: false, // No pulse, but still searchable
    bio: "If you feel like you've been 'gone' for a while, I provide a structured path back. We'll use active learning and cognitive challenges to rebuild your focus.",
    verified: true,
    photo: "/images/therapists/elena.jpg",
    tags: ["DBT", "Neuroplasticity", "Solution-Focused"],
    languages: ["English", "Russian"]
  },
  {
    id: 4,
    name: "Alex Johnson, LCSW",
    specialty: "Depression & Mood Disorders",
    insurance: ["Blue Shield", "Cash Only"],
    rate: "$175/session",
    isLive: false, // No pulse, but still searchable
    bio: "If you feel like you've been 'gone' for a while, I provide a structured path back. We'll use active learning and cognitive challenges to rebuild your focus.",
    verified: true,
    photo: "/images/therapists/alex.jpg",
    tags: ["DBT", "Neuroplasticity", "Solution-Focused"],
    languages: ["English"]
  }, 
  {
    id: 5,
    name: "Priya Singh, PsyD",
    specialty: "Anxiety & Career Burnout",
    insurance: ["Blue Cross", "Aetna", "Cigna"],
    rate: "$150/session",
    isLive: true, // This triggers the Pulse
    bio: "Specializing in the unique pressures of the SF tech ecosystem. I help founders and engineers rebuild their 'Zen' using evidence-based CBT and mindfulness.",
    verified: true,
    photo: "/images/therapists/priya.jpg",
    tags: ["Cognitive Behavioral", "Mindfulness", "LGBTQ+ Affirming"],
    languages: ["English", "Hindi"]
  },
  {
    id: 6,
    name: "David Lee, LMFT",
    specialty: "Grief & Life Transitions",    

    insurance: ["Kaiser", "United", "Medi-Cal"],
    rate: "$120/session",
    isLive: true,
    bio: "I focus on the 'Granola' side of healing—helping you reconnect with your core self after profound loss. Let's work through the layers together.",
    verified: true,
    photo: "/images/therapists/david.jpg",
    tags: ["Grief Counseling", "Holistic", "Trauma-Informed"],
    languages: ["English", "Chinese"]
  },
  {
    id: 7,
    name: "Sophia Martinez, LCSW",
    specialty: "Depression & Mood Disorders",
    insurance: ["Blue Shield", "Cash Only"],
    rate: "$175/session",
    isLive: false, // No pulse, but still searchable,
    bio: "I will help you find your way back from the 'gone' state. Using a blend of DBT and neuroplasticity techniques, we will work together to rebuild your focus and joy.",
    verified: true,
    photo: "/images/therapists/sophia.jpg",
    tags: ["DBT", "Neuroplasticity", "Solution-Focused"],
    languages: ["English", "Spanish"]
  }
];
