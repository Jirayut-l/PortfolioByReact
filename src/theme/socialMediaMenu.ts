import {createStyles} from '@mui/styles';

const componentStyles = () => createStyles({
    ul: {
        '&:after': {
            display: 'block',
            content: '""',
            width: '1px',
            height: '90px',
            margin: '0px auto',
            background: '#FFFFFF'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        listStyle: 'none',
        margin :'0px',
        padding: '0px',
    },
    menu: {
        position: 'fixed',
        bottom: '0px',
        left: '40px',
        right: 'auto',
        zIndex: '10',
        '& li':{
            padding: '7px',
        }
    }
});
export default componentStyles;
