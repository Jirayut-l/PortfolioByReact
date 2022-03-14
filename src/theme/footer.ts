import {createStyles} from '@mui/styles';

const componentStyles = () => createStyles({
    ul: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
    },
    footer_StyledSocialLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'auto',
        minHeight: '70px',
        padding: '15px',
        textAlign: 'center',
        '& li': {
            margin: '0px 5px',
            padding: '10px',
        }
    },
    footer_StyledCredit: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }

});

export default componentStyles;
