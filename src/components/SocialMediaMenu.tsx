import {makeStyles} from '@mui/styles';
import socialMediaMenu from '../theme/socialMediaMenu';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Box} from '@mui/material';

const useStyles = makeStyles(socialMediaMenu());
const SocialMediaMenu = () => {
    const classes = useStyles();
    return (
        <Box className={classes.menu} sx={{display: {xs: 'none', md: 'block'}}}>
            <ul className={classes.ul}>
                <li><GitHubIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li><LinkedInIcon/></li>
            </ul>
        </Box>
    )
};

export default SocialMediaMenu




