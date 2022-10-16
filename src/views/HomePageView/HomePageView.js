import React from 'react';
import { makeStyles }  from '@mui/styles';
import BlogPostSection from 'src/containers/Blog/BlogPostSection/BlogPostSection';
import styles from './layout/HomePage.style.default';

function HomePageView() {
    const useStyles  = makeStyles(styles);
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <BlogPostSection />
        </div>
    );
}

export default HomePageView;
