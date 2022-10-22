import Typography from "@components/Typography/Typography";
import { makeStyles } from "@mui/styles";

const styles = (theme) =>{
    return({
        titleWrapper : {
            backgroundColor: theme?.palette?.success?.main,
            padding : '10px',
        }
    })
}
const useStyles = makeStyles(styles);
const HomePageContainer =() => {
    const classes = useStyles();
    return(
        <div >
        <Typography className={classes.titleWrapper}  variant="h4" component="h1" align="center" type="heading">Property Bhaijaan Welcomes You !</Typography> 
        <Typography  variant="h6" component="h6" align="center" type="caption">we are under construction :)</Typography> 
        </div>
    )
}
export default HomePageContainer;