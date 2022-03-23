import {createStyles} from '@mui/styles';
import {Theme} from '@mui/material';

const componentStyles = (theme: Theme) => createStyles({
        company: {
            color: theme.palette.primary.main
        },
        inlineLink: {
            textDecoration: 'none',
            textDecorationSkipInk: 'auto',
            position: 'relative',
            color: theme.palette.primary.main,
        },
        range: {
            marginBottom: '25px',
            color: '#49d6e9',
            fontFamily: ['Saira Condensed', 'sans-serif'].join(','),
        },
        menuItem: {
            '&:focus':
                {
                    backgroundColor: '#ffffff',
                    '& $primary, & $icon':
                        {
                            color: '#ffffff',
                        },
                },
            backgroundColor: 'transparent'
        },
        primary: {},
        icon: {},
    })
;

export default componentStyles
