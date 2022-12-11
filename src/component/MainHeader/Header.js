import classes from "./Header.module.css";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import profil from "../../photos/profil.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.name}>
        <NavLink to="/home">
          <img className={classes.img} src={profil} alt="profil"></img>{" "}
        </NavLink>
        Haim Rubin
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
