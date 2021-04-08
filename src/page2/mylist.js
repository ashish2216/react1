import React from "react";
import Listcard from "./listcard";

const licom = [
  {
    id: 1,
    img: "img/download15.jpg",
    title: "Lockout (2012)",
    link: "https://www.amazon.com/Lockout-Guy-Pearce/dp/B008JH5CVS",
    rank: "#15",
  },
  {
    id: 2,
    img: "img/download14.jpg",
    title: "The Giver (2014)",
    link: "https://www.amazon.com/Giver-Jeff-Bridges/dp/B00MQOQFPW",
    rank: "#14",
  },
  {
    id: 3,
    img: "img/download13.jpg",
    title: "Men In Black (1997)",
    link: "https://www.amazon.com/Men-Black-Tommy-Lee-Jones/dp/B0011E7JBW",
    rank: "#13",
  },
  {
    id: 4,
    img: "img/download12.jpg",
    title: "Tremors (1989)",
    link: "https://www.amazon.com/Tremors-Kevin-Bacon/dp/B001NFT3Z4",
    rank: "#12",
  },
  {
    id: 5,
    img: "img/download11.jpg",
    title: "Terminator 3 (2003)",
    link:
      "https://www.primevideo.com/detail/Terminator-3-Rise-of-the-Machines/0NPYK2H3N8YP12X2HLBYGNEBXL",
    rank: "#11",
  },
  {
    id: 6,
    img: "img/download10.jpg",
    title: "Annihilation (2018)",
    link: "https://www.amazon.com/Annihilation-Natalie-Portman/dp/B079YYHM9Z",
    rank: "#10",
  },
  {
    id: 7,
    img: "img/download09.jpg",
    title: "Starship Troopers (1997)",
    link:
      "https://www.amazon.com/Starship-Troopers-Casper-Van-Dien/dp/B000MF4O82",
    rank: "#9",
  },
  {
    id: 8,
    img: "img/download08.jpg",
    title: "Total Recall (2012)",
    link: "https://www.amazon.com/Total-Recall-Colin-Farrell/dp/B00A0SJWQU",
    rank: "#8",
  },
  {
    id: 9,
    img: "img/download07.jpg",
    title: "Underworld (2003)",
    link: "https://www.amazon.com/Underworld-Kate-Beckinsale/dp/B000O14VAU",
    rank: "#7",
  },
  {
    id: 10,
    img: "img/download06.jpg",
    title: "E.T.,The Extra-Terrestrial (1982)",
    link:
      "https://www.amazon.com/T-Extra-Terrestrial-Henry-Thomas/dp/B009GN6DT4",
    rank: "#6",
  },
  {
    id: 11,
    img: "img/download05.jpg",
    title: "Back to the Future (1985)",
    link: "https://www.amazon.com/Back-Future-Michael-J-Fox/dp/B00439FUYA",
    rank: "#5",
  },
  {
    id: 12,
    img: "img/download04.jpg",
    title: "The Matrix (1999)",
    link: "https://www.amazon.co.uk/Matrix-Keanu-Reeves/dp/B00IA54RC4",
    rank: "#4",
  },
  {
    id: 13,
    img: "img/download03.jpg",
    title: "Minority Report (2002)",
    link: "https://www.amazon.com/Underworld-Kate-Beckinsale/dp/B000O14VAU",
    rank: "#3",
  },
  {
    id: 14,
    img: "img/download02.jpg",
    title: "Event Horizon (1997)",
    link:
      "https://www.primevideo.com/detail/Event-Horizon/0J7Y9VR77MHWR7Q0EV5CE3NH7Q",
    rank: "#2",
  },
  {
    id: 15,
    img: "img/download01.jpg",
    title: "Mirage (1982)",
    link: "https://www.netflix.com/in/title/80991158",
    rank: "#1",
  },
];
const Listcards = licom.map((liname) => {
  return (
    <>
      <Listcard key={liname.id} {...liname} />
    </>
  );
});
function mylist(props) {
  console.log(props);
  return <>{Listcards}</>;
}

export default mylist;