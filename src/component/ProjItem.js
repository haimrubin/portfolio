import Links from "../UI/Links";
import classes from "./ProjItem.module.css";

const ProjItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.imgdiv} style={{color: props.color ? props.color : "white"}}>
        <img src={props.img} />
        <h1
          
        >
          {props.title} - {props.language}
        </h1>
        <h3 >{props.txt}</h3>
    
      </div>

      <div>
        <Links link={props.link} git={props.git}></Links>
      </div>
    </div>
  );
};

export default ProjItem;
