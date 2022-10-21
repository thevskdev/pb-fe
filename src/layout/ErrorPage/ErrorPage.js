import Typography from '@components/Typography/Typography';
import { Grid } from '@mui/material';

const ErrorPage = () => {
    return (
        <Grid container className={classes.errorPageContainer}>
            <Grid item xs={12} sm={6}>
                <div className={classes.errorText} sx={{ border : 'solid red 3px'}}>
                    <Typography type="big-title-1">Oops, 404 error</Typography>
                    <div className={classes.errorTitle}>
                        <Typography type="sub-title-5">Oops! Something did not work</Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default ErrorPage;
