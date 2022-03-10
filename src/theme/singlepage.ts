import {createStyles} from '@mui/styles';

const componentStyles = () => createStyles({
    line: {
        height: '100%',
        background: `url(${process.env.PUBLIC_URL}/images/line.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    }
});
export default componentStyles;
