import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  linkedIn: {
    fontSize: "4vw",
    color: "#ecf1f7",
    cursor: "pointer",
    transition: "transform ease-out 1s",

    "&:hover": {
      transform: "scale(0.85)",
    },
  },

  github: {
    fontSize: "4vw",
    color: "#5FBC4A",
    cursor: "pointer",
    transition: "transform ease-out 1s",
    "&:hover": {
      color: "#2ec40d",
      transform: "scale(0.75)",
    },
  },

  projectLinks: {
    backgroundColor: "darkgrey",
    padding: "2px 4px",
    fontSize: "46px",
    marginRight: "0.55em",
    color: "white",
    transition: "all 0.3s",
    "&:hover": {
      opacity: "0.5",
      color: "darkgrey",
      backgroundColor: "white",
      border: "1px solid darkgrey",
    },
  },
});
