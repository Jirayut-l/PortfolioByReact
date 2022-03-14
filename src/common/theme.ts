import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode:'dark',
        background: {
            default: '#07273b',
        },
        primary: {
            main: '#df769b'
        },
        secondary: {
            main: '#49e9a6'
        },
        text: {
            primary: '#ffffff',
            secondary: '#e4b781',
        }

    },
    typography: {
        fontFamily: ['Ubuntu Mono', 'monospace'].join(','),
        subtitle1: {
            fontFamily: ['Manrope', 'sans-serif'].join(','),
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                },
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'rgba(0,0,0,0.81)',
                },
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(0 0 0 / 7%)'
                },
            }
        }
    },
});

export default theme
