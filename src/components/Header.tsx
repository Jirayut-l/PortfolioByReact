import {Box, Drawer, IconButton} from '@mui/material';
import header from '../theme/header';
import Particles from 'react-tsparticles';
import particlesParams from '../theme/particles-background';
import {useState} from 'react';
import {Link} from 'react-scroll';
import DehazeIcon from '@mui/icons-material/Dehaze';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(header);
const Header = () => {
    const menus = ['about', 'experience', 'contact'];
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState(false);

    const Menus = () => {
        return (
            <>
                {menus.map((key) => (
                    <Link key={`link-${key}`} to={key} className={classes.link} spy={true} smooth={true} duration={200}>
                        {`${key}();`}
                    </Link>
                ))}
                <a className={classes.resumeButton} href={'/File/resume.pdf'} target="_blank" rel=" noopener noreferrer">Resume</a>
            </>
        )
    };
    return (
        <>
            <Particles className={classes.particles} params={particlesParams}/>
            <Box position="fixed" width="100%" display="flex" justifyContent="flex-end" p={3} zIndex={1}>
                <Box sx={{display: {xs: 'block', sm: 'none'}}}>
                    {drawerState && (
                        <Drawer anchor="right" open={drawerState} onClose={() => setDrawerState(false)}>
                            <Menus/>
                        </Drawer>
                    )}
                    <IconButton className={classes.button} onClick={() => setDrawerState(true)}>
                        <DehazeIcon/>
                    </IconButton>
                </Box>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                    <Menus/>
                </Box>
            </Box>
        </>
    )
};

export default Header;
