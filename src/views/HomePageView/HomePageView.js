import React from 'react';
import { makeStyles } from '@mui/styles';
import styles from './layout/HomePage.style.default';
import Typography from '@components/Typography/Typography';

function HomePageView() {
    const useStyles  = makeStyles(styles);
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <Typography variant="h4"  component="h1" align="center" type="heading">Property Bhaijaan welcomes you !</Typography> 
            <Typography variant="h6"  component="h6" align="center" type="caption">we are under maintaince :)</Typography> 
        </div>
    );
}

export default HomePageView;
