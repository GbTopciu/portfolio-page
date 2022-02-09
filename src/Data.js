import { v4 as uuidv4 } from "uuid";

export const Data = [
  {
    author: "Gabriel",
    title:"Waves",
    description:
      "Waves is a lovely Music Player that contains an impressive collection of Chillhop songs. Do you want to start a coding session? We've got you covered, so hop on and select a track. This project was completed using React and SASS.",
    cover:
      "https://i.imgur.com/MxVH4qT.png",
    id: uuidv4(),
    active: false,
    link: "https://vigorous-ride-016e50.netlify.app/",
  },
  {
    author: "Gabriel",
    title:"Diary",
    description:
      "Diary is a To-Do List aimed to help the user throughout the day",
    cover:
      "https://i.imgur.com/ZOeKzTy.png",
    id: uuidv4(),
    active: false,
    link:"www.google.com",
  },
];
