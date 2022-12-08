import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul className={classes.list}>
        <li>
          <a href="https://github.com/haimrubin">
            <GitHubIcon />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/haim-rubin/">
            <LinkedInIcon color="primary" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
