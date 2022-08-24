import React from "react";
import ProjItem from "../component/ProjItem";
import Card from "../UI/Card";
import classes from "./Proj.module.css";

const data = [
  {
    key: "p2",
    title: "My Portfolio",
    language: "React",
    txt: "an example of one of my projects,represent my other project's and showing about me and my life",
    link: "https://protfolio-441f6.web.app/home",
    git: "https://github.com/haimrubin/Projects/tree/main/portfolio",
  },
  {
    key: "p1",
    title: "News Site",
    language: "React",
    txt: "online news website that interact with users",
    link: "https://newsappprod.herokuapp.com",
    git: "https://github.com/haimrubin/Projects/tree/main/News%20app",
  },
  {
    key: "p3",
    title: "Soccer",
    language: "React",
    txt: "app to manage your football teams when you play with your friends",
    git: "https://github.com/haimrubin/Projects/tree/main/soocer",
  },
  {
    key: "p4",
    title: "Postal Track",
    language: "Java",
    txt: "Simulates tracking mail packages and mail trucks, shows the location in real time",
    git: "https://github.com/haimrubin/Projects/tree/main/postalTrack",
  },
];

const projList = data.map((item) => (
  <ProjItem
    key={item.key}
    title={item.title}
    language={item.language}
    txt={item.txt}
    git={item.git}
    link={item.link}
  ></ProjItem>
));

const Proj = () => {
  return (
    <Card className={classes.projs}>
      <ul>{projList}</ul>
    </Card>
  );
};

export default Proj;
