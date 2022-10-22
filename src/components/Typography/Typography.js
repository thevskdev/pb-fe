import { Typography as MuiTypography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import styles from './Typography.style.default';

const useStyles = makeStyles(styles);
const Typography = ({
    className = '',
    type = '',
    children,
    isLink = false,
    muted = false,
    ...otherProps
}) => {
    const classes = useStyles();
console.log("type::", type)
    return (
        <>
            <MuiTypography
                className={`${ classes.typographyStyles } ${ className } ${ type } ${ isLink && 'link' } ${ muted && 'text-muted' }`}
                {...otherProps}
            >
                {children}
            </MuiTypography>
        </>
    );
};

export default Typography;
