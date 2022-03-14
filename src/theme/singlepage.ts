import {createStyles} from '@mui/styles';
import {Theme} from '@mui/material';


const componentStyles = (theme: Theme) => createStyles({
    line: {
        height: '100%',
        background: `url(${process.env.PUBLIC_URL}/images/line.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    content: {
        [theme.breakpoints.up('xs')]: {
            padding: '0px 26px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0px 76px'
        },
        [theme.breakpoints.up('lg')]: {
            padding: '0px 100px'
        },
    }
});
export default componentStyles;
