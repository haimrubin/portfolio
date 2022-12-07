import { Link } from "react-router-dom";
import classes from "./Page404.module.css";

const Page404 = () => {
  return (
    <div className={classes.main}>
      <span>Oops</span>
      <h2>We can't seem to find the </h2>
      <h2>page you're looking for</h2>
      <h2>Here are some helpful links instead:</h2>

      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Proj">My Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page404;
