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
    title:"Ping-Pong",
    description:
      "Ping-Pong is a basic score-keeper created using Javascript and Bulma",
    cover:
      "https://i.imgur.com/WNdM8yr.png",
    id: uuidv4(),
    active: false,
    link:"https://wizardly-sinoussi-d41571.netlify.app/",
  },
  {
    author: "Gabriel",
    title:"TV Shows API",
    description:
      "Simple TV Shows API created using Javascript and Axios",
    cover:
      "https://i.imgur.com/etbJixG.png",
    id: uuidv4(),
    active: false,
    link:"https://xenodochial-khorana-781515.netlify.app/",
  },
];
