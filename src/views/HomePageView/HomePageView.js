import React from 'react';
import { makeStyles } from '@mui/styles';
import styles from './layout/HomePage.style.default';
import Typography from '@components/Typography/Typography';

function HomePageView() {
    const useStyles  = makeStyles(styles);
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <Typography muted type={'big-title'}>Property Bhaijaan welcomes you !</Typography> 
        </div>
    );
}

export default HomePageView;
