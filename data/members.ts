
export interface Member {
  id: number;
  name: string;
  gender: 'male' | 'female';
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
    name: "Arun Kumar",
    gender: "male",
    dob: "07-07-1992",
    education: "MHM.,",
    occupation: "Manager",
    rasi: "Mesham",
    star: "சித்திரை",
    lagnam: "Dhanusu",
    email: "arun@example.com",
    mobile: "9876543210",
    town: "Pattukkottai",
    image: "https://picsum.photos/seed/male1/400/500"
  },
  {
    id: 3002,
    name: "Siva",
    gender: "male",
    dob: "12-05-1990",
    education: "B.E. (Mechanical)",
    occupation: "Engineer",
    rasi: "Rishabam",
    star: "அஸ்வினி",
    lagnam: "Kanni",
    email: "siva@example.com",
    mobile: "9876543211",
    town: "Thanjavur",
    image: "https://picsum.photos/seed/male2/400/500"
  },
  {
    id: 4001,
    name: "Priya",
    gender: "female",
    dob: "10-10-1995",
    education: "M.Sc (Maths)",
    occupation: "Professor",
    rasi: "Midhunam",
    star: "ரோகிணி",
    lagnam: "Simmam",
    email: "priya@example.com",
    mobile: "9876543212",
    town: "Chennai",
    image: "https://picsum.photos/seed/female1/400/500"
  }
];
