import {Box, Drawer, Hidden, IconButton, Link, makeStyles} from '@material-ui/core';
import header from '../theme/header';
import Particles from 'react-tsparticles';
import particlesParams from '../theme/particles-background';
import {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(header);
const Header = () => {
    const menus = ['is', 'about', 'work', 'contact'];
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState(false);
    const Menus = () => {
        return (
            <>
                {menus.map((key, index) => (
                    <Link key={`link-${index}`} className={classes.link}>
                        {`${key}();`}
                    </Link>
                ))}
                <IconButton className={classes.githubButton}>
                    <img alt="github" src={`${process.env.PUBLIC_URL}/images/githubLogo.png`} style={{width: '30px', height: '30px'}}/>
                </IconButton>
            </>
        )
    };
    return (
        <>
            <Particles className={classes.particles} params={particlesParams}/>
            <Box position="fixed" width="100%" display="flex" justifyContent="flex-end" p={1} zIndex={1}>
                <Hidden smUp>
                    {drawerState && (
                        <Drawer anchor="right" open={drawerState} onClose={() => setDrawerState(false)}>
                            <Menus/>
                        </Drawer>
                    )}
                    <IconButton className={classes.button} onClick={() => setDrawerState(true)}>
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                <Hidden xsDown>
                    <Menus/>
                </Hidden>
            </Box>
        </>
    )
};

export default Header;
