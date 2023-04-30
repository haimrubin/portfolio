import React from "react";
import ProjectSlider from "../component/ProjectSlider";
import ProjItem from "../component/ProjItem";
import Card from "../UI/Card";
import classes from "./Proj.module.css";

import postalImg from "../photos/projects/postalTruck.jpg";
import newsImg from "../photos/projects/news.png";
import portfolioImg from "../photos/projects/portfolio.jpg";
import soccerImg from "../photos/projects/soccer.jpeg";

const data = [
  {
    key: "p1",
    img: portfolioImg,
    title: "My Portfolio",
    language: "React",
    txt: "an example of one of my projects,represent my other project's and showing about me and my life",
    link: "https://protfolio-441f6.web.app/home",
    git: "https://github.com/haimrubin/portfolio",
  },
  {
    key: "p2",
    img: newsImg,
    title: "News Site",
    language: "React",
    txt: "online news website that interact with users",
    git: "https://github.com/haimrubin/Projects/tree/main/News%20app",
    color: "green",
  },
  {
    key: "p3",
    img: postalImg,
    title: "Postal Track",
    language: "Java",
    txt: "Simulates tracking mail packages and mail trucks, shows the location in real time",
    git: "https://github.com/haimrubin/Projects/tree/main/postalTrack",
  },
  {
    key: "p4",
    title: "Soccer",
    img: soccerImg,
    language: "React",
    txt: "app to manage your football teams when you play with your friends",
    git: "https://github.com/haimrubin/Projects/tree/main/soocer",
  },
];

const projList = data.map((item) => (
  <ProjItem
    key={item.key}
    title={item.title}
    img={item.img}
    language={item.language}
    txt={item.txt}
    git={item.git}
    link={item.link}
    color={item.color}
  ></ProjItem>
));

const Proj = () => {
  return (
    // <Card className={classes.projs}>
    //   <ul>{projList}</ul>
    // </Card>
    <ProjectSlider projects={projList} />
  );
};

export default Proj;
