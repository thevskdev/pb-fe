import { makeStyles } from '@mui/styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './layout/Skeleton.style.default';

const LoadingSkeleton = ({ children, ...otherProps }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton className={classes.skeletonStyles} {...otherProps}>
                    {children}
                </Skeleton>
            </SkeletonTheme>
        </>
    );
};

export default LoadingSkeleton;
