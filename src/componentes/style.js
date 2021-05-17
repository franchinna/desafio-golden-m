import {makeStyles} from '@material-ui/styles';

export default makeStyles ({


    card:{
        backgroundColor: 'white', 
        padding: '15px 25px!important',
        boxShadow: ' 0px 0px 5px 0px rgba(143,143,143,1)',
        borderRadius: '5px'
    },

    ul: {
        listStyle: 'none',
        padding: '0',
        fontSize: '.7em',
        color: 'grey',
        margin: '15px 0px'
    },

    ulAlerts: {
        listStyle: 'none',
        padding: '0',
        fontSize: '.8em',
        textAlign: 'end'
    },

    li:{
        display: 'inline-block',
        padding: '0px 20px',
        borderRight: '2px solid #f0f0f0',
        textAlign: 'end'
    },

    p:{
        margin: '0px',
        fontWeight: 'bold',
        color: 'grey',
        textAlign: 'center'
    }, 

});