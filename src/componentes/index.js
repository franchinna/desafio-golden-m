import React, { userState } from "react";
import { Grid, } from "@material-ui/core";
import { IdontknowIcon, AlertIcon, RouterIcon } from "../icons";
import styles from './style';

const Localidades = ({zone, street, city, number, alert, router, circle }) => {

    
    const fran = styles(); 

    return (  
    <Grid item xs={5} container className={fran.card}>
            <Grid xs={6} style={{alignSelf: 'center'}}>
            <ul className={fran.ul}>
                <li><b>{zone}</b></li>
                <li>{street}</li>
                <li>{city}</li>
                <li>{number}</li>
            </ul>
            </Grid>
            <Grid item xs={6} style={{alignSelf: 'center',}}>
                <ul className={fran.ulAlerts}>
                    <li className={fran.li}><AlertIcon style={{color: 'red'}}>
                        </AlertIcon>
                        <p className={fran.p}>{alert}</p>
                    </li>
                    <li className={fran.li}>
                        <RouterIcon style={{color: 'green'}}/>
                        <p className={fran.p}>{router}</p>
                    </li>
                    <li className={fran.li} style={{borderRight: '0px'}}>
                        <IdontknowIcon style={{color: 'blue'}}/>
                        <p className={fran.p}>{circle}</p>
                    </li>
                </ul>
            </Grid>
          </Grid>
    )
}

export default Localidades;