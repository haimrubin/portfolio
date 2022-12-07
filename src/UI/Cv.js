import { Link } from "react-router-dom";
import classes from "./Cv.module.css";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import { useState } from "react";

const Cv = () => {
  const [downloadFlag, setDownloadFlag] = useState(false);

  const downloadHandler = () => {
    setDownloadFlag(true);
  };

  return (
    <div className={classes.cv}>
      <h2>Download My CV</h2>

      <Link
        onClick={downloadHandler}
        to="/files/Haim Rubin cv.pdf"
        target="_blank"
        download="HaimRubinCV.pdf"
      >
        {!downloadFlag ? (
          <DownloadForOfflineRoundedIcon fontSize="large" />
        ) : (
          <DownloadDoneRoundedIcon fontSize="large"/>
        )}
      </Link>
    </div>
  );
};

export default Cv;
