export interface Member {
  id: number;
  name: string;
  gender: "male" | "female";
  dob: string;
  education: string;
  occupation: string;
  rasi: string;
  star: string;
  lagnam: string;
  email: string;
  mobile: string;
  town: string;
  image: string;
  contactRequested?: boolean;
  requestedAt?: string;
}

export const initialMembers: Member[] = [
  {
    id: 3001,
    name: "கார்த்திக் ராஜ் (Karthik Raj)",
    gender: "male",
    dob: "07-07-1992",
    education: "B.E. (Mechanical)",
    occupation: "Senior Engineer",
    rasi: "மேஷம்",
    star: "சித்திரை",
    lagnam: "தனுசு",
    email: "karthik@example.com",
    mobile: "90803 89082",
    town: "பட்டுக்கோட்டை",
    image: "/assets/members_mock/groom/groom_1.jpeg",
  },
  {
    id: 3002,
    name: "விஜயகுமார் (Vijaykumar)",
    gender: "male",
    dob: "12-05-1990",
    education: "M.B.A (Finance)",
    occupation: "Bank Manager",
    rasi: "ரிஷபம்",
    star: "பரணி",
    lagnam: "கன்னி",
    email: "vijay@example.com",
    mobile: "99761 50545",
    town: "தஞ்சாவூர்",
    image: "/assets/members_mock/groom/groom_2.jpeg",
  },
  {
    id: 3003,
    name: "சூர்யா (Surya)",
    gender: "male",
    dob: "15-08-1994",
    education: "M.Sc (Agri)",
    occupation: "Business",
    rasi: "மிதுனம்",
    star: "ரோகிணி",
    lagnam: "சிம்மம்",
    email: "surya@example.com",
    mobile: "99446 68890",
    town: "மதுரை",
    image: "/assets/members_mock/groom/groom_3.jpeg",
  },
  {
    id: 4001,
    name: "மீனாட்சி (Meenakshi)",
    gender: "female",
    dob: "10-10-1995",
    education: "M.Sc (Comp Sci)",
    occupation: "Software Developer",
    rasi: "கடகம்",
    star: "புனர்பூசம்",
    lagnam: "விருச்சிகம்",
    email: "meena@example.com",
    mobile: "90803 89082",
    town: "திருச்சி",
    image: "/assets/members_mock/bride/bride_1.jpeg",
  },
  {
    id: 4002,
    name: "ஸ்வேதா (Swetha)",
    gender: "female",
    dob: "22-03-1997",
    education: "B.Com, C.A.",
    occupation: "Auditor",
    rasi: "சிம்மம்",
    star: "மகம்",
    lagnam: "கும்பம்",
    email: "swetha@example.com",
    mobile: "99761 50545",
    town: "சென்னை",
    image: "/assets/members_mock/bride/bride_2.jpeg",
  },
  {
    id: 4003,
    name: "தனலட்சுமி (Dhanalakshmi)",
    gender: "female",
    dob: "05-12-1993",
    education: "M.A. (Tamil)",
    occupation: "Teacher",
    rasi: "கன்னி",
    star: "உத்திரம்",
    lagnam: "மேஷம்",
    email: "dhana@example.com",
    mobile: "99446 68890",
    town: "கோவை",
    image: "/assets/members_mock/bride/bride_3.jpeg",
  },
];
