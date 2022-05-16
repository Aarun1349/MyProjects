import { makeStyles } from "@material-ui/core";
import { indigo } from "@mui/material/colors";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icons: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
  },
  cardItems: {},
  cardContent: {
    flexGrow: "1",
  },
  cardGrid: {
    padding: "20px 0",
  },
  media: {
    paddingTop: "56.25%",
  },
  footer:{
    backgroundColor: "indigo",
    padding:"50px 0",
    marginTop:"10rem",
    color: theme.palette.background.paper,
  }
}));
export default useStyles;
