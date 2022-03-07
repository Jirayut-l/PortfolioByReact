import {createStyles, Theme} from '@material-ui/core';
const useStyles = (theme: Theme) => createStyles({
    button: {
        transition: 'color .4s ease-out',
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
        },
        '&:disabled': {
            color: theme.palette.primary.main,
        },
    },
    githubButton: {
        alignSelf: 'flex-end',
        width: 'fit-content',
    },
    link: {
        alignSelf: 'flex-end',
        fontSize: '1.25rem',
        cursor: 'pointer',
        padding: theme.spacing(1),
        transition: 'color .4s ease-out',
        '&.active': {
            color: theme.palette.primary.main,
        },
    },
    particles: {
        position: 'fixed',
        width: '100%',
        height: '100%',
    },
});

export default useStyles;
