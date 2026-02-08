
export interface Profile {
  id: number;
  gender: 'male' | 'female';
  dob: string;
  education: string;
  star: string;
  image: string;
}

export const profiles: Profile[] = [
  {
    id: 3001,
    gender: "male",
    dob: "07-07-1992",
    education: "MHM.,",
    star: "சித்திரை",
    image: "https://picsum.photos/seed/male1/400/500"
  },
  {
    id: 3002,
    gender: "male",
    dob: "12-05-1990",
    education: "B.E. (Mechanical)",
    star: "அஸ்வினி",
    image: "https://picsum.photos/seed/male2/400/500"
  },
  {
    id: 3003,
    gender: "male",
    dob: "21-08-1994",
    education: "MBA",
    star: "பரணி",
    image: "https://picsum.photos/seed/male3/400/500"
  },
  {
    id: 3004,
    gender: "male",
    dob: "15-03-1991",
    education: "M.Tech",
    star: "கார்த்திகை",
    image: "https://picsum.photos/seed/male4/400/500"
  },
  {
    id: 4001,
    gender: "female",
    dob: "10-10-1995",
    education: "M.Sc (Maths)",
    star: "ரோகிணி",
    image: "https://picsum.photos/seed/female1/400/500"
  },
  {
    id: 4002,
    gender: "female",
    dob: "04-02-1996",
    education: "MBBS",
    star: "மிருகசீரிஷம்",
    image: "https://picsum.photos/seed/female2/400/500"
  },
  {
    id: 4003,
    gender: "female",
    dob: "30-12-1997",
    education: "B.Arch",
    star: "திருவாதிரை",
    image: "https://picsum.photos/seed/female3/400/500"
  },
  {
    id: 4004,
    gender: "female",
    dob: "18-06-1994",
    education: "Ph.D",
    star: "புனர்பூசம்",
    image: "https://picsum.photos/seed/female4/400/500"
  }
];
