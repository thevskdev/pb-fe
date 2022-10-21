import ErrorPage from '@layout/ErrorPage/ErrorPage';
import { makeStyles } from '@mui/styles';
import React from 'react';
import styles from './layout/404ErrorPage.styles.default';

const useStyles = makeStyles();

const ErrorPageView = () => {
    const classes = useStyles(styles);
    return (
        <div className={classes.fullWidth}>
            <ErrorPage />
        </div>
    );
};

export default ErrorPageView;
