import {makeStyles} from '@mui/styles';
import socialMediaMenu from '../theme/socialMediaMenu';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Box,IconButton} from '@mui/material';

const useStyles = makeStyles(socialMediaMenu());
const SocialMediaMenu = () => {
    const classes = useStyles();
    return (
        <Box className={classes.menu} sx={{display: {xs: 'none', md: 'block'}}}>
            <ul className={classes.ul} >
                <li><IconButton href={"https://github.com/Jirayut-l"} > <GitHubIcon/> </IconButton>  </li>
                <li><IconButton href={"https://www.instagram.com/jirayut.l/"} > <InstagramIcon/> </IconButton> </li>
                <li><TwitterIcon/></li>
                <li><IconButton href={"www.linkedin.com/in/jirayut-l"} > <LinkedInIcon/></IconButton>    </li>
            </ul>
        </Box>
    )
};

export default SocialMediaMenu




