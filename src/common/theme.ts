import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#07273b',
        },
        primary: {
            main: '#df769b'
        },
        secondary:{
            main:'#49e9a6'
        },
        text: {
            primary: '#ffffff',
            secondary: '#e4b781',
        },

    },
    typography: {
        fontFamily: ['Source Code Pro', 'monospace'].join(','),
    },
    overrides: {
        MuiButton: {
            root: {
                fontSize: '1.25rem',
                textTransform: 'none',
                backgroundColor: 'transparent',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: 'rgba(0,0,0,0.81)',
            },
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgb(0 0 0 / 7%)'
            }
        }
    },
});

export default  theme
