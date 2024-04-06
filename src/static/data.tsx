export interface PortfolioItem {
  link: string;
  images?: string[];
  isVideo?: boolean;
}

export interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  items: PortfolioItem[];
}

export type Portfolio = PortfolioCategory[];

export const portfolio: PortfolioCategory[] = [
  {
    id: "mobileApps",
    title: "Mobile Apps",
    description: "These are the mobile applications I've developed.",
    items: [
      {
        link: "https://apps.apple.com/us/app/sacis-studio/id644",
        images: [
          "https://play-lh.googleusercontent.com/kEiaZw5yMxuqnUpqSOAzEMmImhlF7Dw01Xdlx3sZDGOP74ImV_dsWSdAkLhCQqujNOw=w526-h296-rw",
          "https://play-lh.googleusercontent.com/iUpVYDxD6TFOvbHEXsuopDQ2HigeeIrWRKpXRLM-TwYyWtiXm4pRT9FALn0c_ozXx60=w526-h296-rw",
          "https://play-lh.googleusercontent.com/BnWqaaZPOM3qr8JLRcfinWtYMxoaRDNte3fKIYl5tRAm0spPqey1Uco02FtC63aBgQPF=w526-h296-rw",
          "https://play-lh.googleusercontent.com/I0zl0y4H1i8uJRUy4KLv9G2m1lRkqzb9lLFyeYyr2m7nRcCGb8nCiP3DwicpBv2R1g=w526-h296-rw",
        ],
      },
      // Add other mobile apps portfolio items here
    ],
  },
  {
    id: "mobileGames",
    title: "Mobile Games",
    description: "These are the mobile games I've developed.",
    items: [
      {
        link: "https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame",
        images: [
          "https://play-lh.googleusercontent.com/fSk5Assdc6kdjk7s8DS34Q87pa1N8HrklYe6AFYdQjLCWp8GaSi2ZZKrdwAZzJthyg=w526-h296-rw",
        ],
      },
      // Add other mobile games portfolio items here
    ],
  },
  {
    id: "webApps",
    title: "Web Apps",
    description: "These are the web applications I've developed.",
    items: [
      {
        link: "https://stream-world.vercel.app/",
        images: [],
      },
      // Add other web app portfolio items here
    ],
  },
  {
    id: "websites",
    title: "Websites",
    description: "These are the websites I've developed.",
    items: [
      // Add website portfolio items here
    ],
  },
  {
    id: "vr",
    title: "VR Experiences",
    description: "These are the VR experiences I've developed.",
    items: [
      {
        link: "https://www.meta.com/experiences/7159569204093541/#?",
        images: ["https://i.imgur.com/KUxHOVS.png"],
      },
      // Add other VR portfolio items here
    ],
  },
  {
    id: "characterDesign",
    title: "Character Design",
    description: "These are the character designs I've created.",
    items: [
      {
        link: "https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame",
      },
      // Add other character design portfolio items here
    ],
  },
  {
    id: "modelling",
    title: "3D Modelling",
    description: "These are the 3D models I've created.",
    items: [
      {
        link: "https://youtu.be/5mHIdHsT7AE",
        isVideo: true,
      },
      // Add other modelling portfolio items here
    ],
  },
  {
    id: "uiUx",
    title: "UI/UX Design",
    description: "These are the UI/UX designs I've created.",
    items: [
      {
        link: "https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame",
      },
      // Add other UI/UX portfolio items here
    ],
  },
];
