import React, { userState } from "react";
import { Container, Grid, Button, Typography, Paper, CardContent } from "@material-ui/core";
import { LocationIcon, HamgurIcon, AddIcon, IdontknowIcon, AlertIcon, RouterIcon } from "../../icons";
import { makeStyles } from "@material-ui/core/styles";

import styles from './style';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const fran = styles(); 

  return (
    <Container>
      <Grid className={classes.root}>
        <Grid container spacing={3}>
          <Grid Grid item xs={12} container>
              <Grid item xs={6} container>
                    <Grid item xs={1} > <LocationIcon style={{color: '#00bfff'}}/></Grid>
                    <Grid item xs={11} >  <Typography>Locations</Typography></Grid>
              </Grid>
              <Grid  item xs={6} className={fran.floatRight}>
                  <Button variant="contained" color="primary" className={fran.btnLightBlue}><AddIcon/></Button>
                  <Button variant="contained" className={fran.btnWhite}>
                      <HamgurIcon />
                  </Button>
              </Grid>
          </Grid>

          <Grid item xs={6} container className={fran.card} style={{backgroundColor: 'white', padding: '15px 25px'}}>
            <Grid xs={6} style={{alignSelf: 'center'}}>
            <ul className={fran.ul}>
                <li><b>Downtown</b></li>
                <li>12345 River Road</li>
                <li>San Diego, CA 92129</li>
                <li>859 - 555 - 1234</li>
            </ul>
            </Grid>
            <Grid item xs={6} style={{alignSelf: 'center',}}>
                <ul className={fran.ulAlerts}>
                    <li className={fran.li}><AlertIcon style={{color: 'red'}}>
                        </AlertIcon>
                        <p className={fran.p}>12</p>
                    </li>
                    <li className={fran.li}>
                        <RouterIcon style={{color: 'green'}}/>
                        <p className={fran.p}>4</p>
                    </li>
                    <li className={fran.li} style={{borderRight: '0px'}}>
                        <IdontknowIcon style={{color: 'blue'}}/>
                        <p className={fran.p}>156</p>
                    </li>
                </ul>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>

        </Grid>
      </Grid>
    </Container>
  );
}

/*


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

*/
