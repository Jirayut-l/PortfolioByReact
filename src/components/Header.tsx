import {makeStyles} from '@material-ui/core';
import header from '../theme/header';
import Particles from 'react-tsparticles';
import particlesParams from '../theme/particles-background';

const useStyles = makeStyles(header);
const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Particles className={classes.particles} params={particlesParams} />
        </>
    )
};

export default Header;
