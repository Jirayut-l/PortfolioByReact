import {makeStyles} from '@mui/styles';
import socialMediaMenu from '../theme/socialMediaMenu';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles(socialMediaMenu());
const SocialMediaMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.menu}>
            <ul className={classes.ul}>
                <li><GitHubIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li><LinkedInIcon/></li>
            </ul>
        </div>
    )
};

export default SocialMediaMenu




