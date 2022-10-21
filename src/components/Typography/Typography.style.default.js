const styles = ((theme) => ({
    typographyStyles: {
        '&.MuiTypography-root': {
            color: theme.palette.typographyStyles.typographyFontColor,
        },
        '&.text-muted': {
            opacity: 0.5,
        },
        '&.link': {
            cursor: 'pointer',
            color: '#F3AA4E',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        '&.big-title': {
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: '1.16',
            letterSpacing: '0em',
        },
        '&.heading': {
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '1.33',
            letterSpacing: '0em',
        },
        '&.sub-title1': {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.75',
            letterSpacing: '0.009em',
        },
        '&.sub-title2': {
            fontWeight: 500,
            [ theme.breakpoints.down('sm') ]: {
                fontSize: '0.70rem',
                lineHeight: '1.5',
                letterSpacing: '0.030em',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontSize: '0.85rem',
                lineHeight: '1.57',
                letterSpacing: '0.009em',
            },

        },
        '&.nav-items': {
            fontWeight: 500,
            [ theme.breakpoints.down('sm') ]: {
                fontSize: '0.70rem',
                lineHeight: '1.5',
                letterSpacing: '0.030em',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontSize: '0.90rem',
                lineHeight: '1.57',
                letterSpacing: '0.009em',
            },

        },
        '&.body1': {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5',
            letterSpacing: '0.009em',
        },
        '&.caption': {
            [ theme.breakpoints.down('sm') ]: {
                fontWeight: 400,
                fontSize: '0.65rem',
                lineHeight: '1.66',
                letterSpacing: '0.0033em',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontWeight: 400,
                fontSize: '0.70rem',
                lineHeight: '1.66',
                letterSpacing: '0.0033em',
            },
        },

        '&.post-heading': {
            fontWeight: 600,
            fontSize: '3.5rem',
            lineHeight: '1.33',
            letterSpacing: '0.0052em',
        },
        '&.post-title-1': {
            fontWeight: 450,
            fontSize: '1rem',
            lineHeight: '1.75',
            letterSpacing: '0.009em',
        },
        '&.post-desc': {
            fontWeight: 300,
            fontSize: '0.90rem',
            lineHeight: '1.75',
            letterSpacing: '0.009em',
        },
        '&.author-short-desc': {
            fontWeight: 400,
            fontSize: '0.80rem',
            lineHeight: '1.75',
            letterSpacing: '0.009em',
            fontStyle: 'italic',
        },
        '&.author-title': {
            fontWeight: 450,
            fontSize: '1.3rem',
            lineHeight: '1.33',
            letterSpacing: '0.0052em',
        },
        '&.author-sub-title': {
            fontWeight: 400,
            fontSize: '1.0rem',
            lineHeight: '1.33',
            letterSpacing: '0.0052em',
        },
        '&.post-big-title': {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: '1.16',
            letterSpacing: '0em',
        },
        '&.category-big-title': {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: '1.16',
            letterSpacing: '0em',

        },
        '&.post-title-2': {
            fontWeight: 550,
            fontSize: '1rem',
            lineHeight: '1.75',
            letterSpacing: '0.009em',
        },
        '&.big-title-1': {
            color: 'orange',
            [ theme.breakpoints.down('sm') ]: {
                fontWeight: 400,
                fontSize: '1.5rem',
                lineHeight: '1.16',
                letterSpacing: '0em',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontWeight: 400,
                fontSize: '2rem',
                lineHeight: '1.16',
                letterSpacing: '0em',
            },
        },
        '&.heading-1': {

            [ theme.breakpoints.down('sm') ]: {
                fontWeight: 350,
                fontSize: '1.2rem',
                lineHeight: '1.33',
                letterSpacing: '0em',
            },
            [ theme.breakpoints.up('sm') ]: {
                fontWeight: 350,
                fontSize: '1.2rem',
                lineHeight: '1.33',
                letterSpacing: '0em',
            },
        },
    },
}));

export default styles;
