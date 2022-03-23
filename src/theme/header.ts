import {createStyles} from '@mui/styles';
import {Theme} from '@mui/material';

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
    resumeButton: {
        color: '#64ffda',
        width: 'fit-content',
        border: '1px solid #64ffda',
        cursor: 'pointer',
        padding: '0.75rem 1rem',
        alignSelf: 'flex-end',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        lineHeight: '1',
        marginLeft: '15px',
        borderRadius: '4px',
        backgroundColor: 'transparent'
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
