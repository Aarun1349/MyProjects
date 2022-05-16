import React from "react";
import useStyles from "./styles";

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Icon,
} from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";
import { ResetTvRounded } from "@mui/icons-material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function MaterialHome() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera className={classes.icons} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div style={{ marginTop: "5rem" }}>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Hello everyone this is a photo album and I'm trying to make this
              sentence as long as possible to see how it looks on the screen
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid items style={{ marginRight: "10px" }}>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid items>
                  <Button variant="outlined" color="secondary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardItems} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => {
              return (
                <Grid item key={card} xs={12} md={4} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                    />
                    <CardContent className="classes.cardContent">
                      <Typography varinat="h5" gutterBottom>
                        Heading
                        <Typography varinat="p">
                          This is a media card content to see how are card
                          content looks.
                        </Typography>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography varinat="h6" align="center" gutterBottom>
         Footer
        </Typography>
        <Typography varinat="subtitle1" align="center" color="secondary" gutterBottom>
          This is a media card content to see how are card content looks.
        </Typography>
      </footer>
    </>
  );
}

export default MaterialHome;
