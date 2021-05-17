import React, { useState } from "react";
import { Container, Grid, Button, Typography} from "@material-ui/core";
import { LocationIcon, HamgurIcon, AddIcon } from "../../icons";
import { makeStyles } from "@material-ui/core/styles";
import Localidad from '../../componentes'

import styles from './style';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

const CenteredGrid = () => {
  const classes = useStyles();
  const fran = styles(); 

  const [localidades, setLocalidades] = useState([
    {
      id: 1,
      zone: 'Downtown',
      street: '12345 River Road',
      city: 'San Diego, CA 92129',
      number: '859 - 555 - 1234',
      alert: 12,
      router: 4,
      circle: 156
    },
    {
      id: 2,
      zone: 'Downtown',
      street: '12345 River Road',
      city: 'San Diego, CA 92129',
      number: '859 - 555 - 1234',
      alert: 12,
      router: 4,
      circle: 156
    },

  ]);

  const agregarLocalidad = () => {
    const nuevaLocalidad = 
    {
      id: 1,
      zone: 'Downtown',
      street: '12345 River Road',
      city: 'San Diego, CA 92129',
      number: '859 - 555 - 1234',
      alert: 12,
      router: 4,
      circle: 156
    }
    
      setLocalidades([
        nuevaLocalidad,
        ...localidades
      ])

  }

  return(
    <Container>
    <Grid className={classes.root}>
      <Grid container spacing={3} style={{justifyContent: 'center'}}>
        <Grid Grid xs={12} container className={fran.header}>
            <Grid item xs={6} container style={{alignSelf: 'center'}}>
                  <Grid item xs={1} > <LocationIcon style={{color: '#00bfff'}}/></Grid>
                  <Grid item xs={11} >  <Typography>Locations</Typography></Grid>
            </Grid>
            <Grid  item xs={6} className={fran.floatRight}>
                <Button 
                variant="contained" 
                color="primary" className={fran.btnLightBlue} 
                onClick={() => agregarLocalidad()}>
                    <AddIcon/>
                  </Button>
                <Button variant="contained" className={fran.btnWhite}>
                    <HamgurIcon />
                </Button>
            </Grid>
        </Grid>
        {localidades.map((localidad) => (
        <Localidad 
          zone={localidad.zone} 
          street={localidad.street} 
          city={localidad.city} 
          number={localidad.number} 
          alert={localidad.alert} 
          router={localidad.router} 
          circle={localidad.circle} 
          />
        ))}
      </Grid>
    </Grid>
  </Container>
  )

}

export default CenteredGrid;