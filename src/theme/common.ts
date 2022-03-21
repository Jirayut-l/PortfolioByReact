import {createStyles} from '@mui/styles';

const componentStyles = () => createStyles({
    ulList: {
        '& li::before': {
            padding:"10px",
            color: '#64ffda',
            content: '">"',
            fontWeight:"700"
        },
        listStyle: 'none',
    },
});
export default componentStyles;
