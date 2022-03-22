import {makeStyles} from '@mui/styles';
import footer from '../theme/footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Box} from '@mui/material';

const useStyles = makeStyles(footer());

const Footer = () => {
    const classes = useStyles();
    return (

        <footer>
            <div className={classes.footer_StyledSocialLinks}>
                <Box sx={{display: {xs: 'block', md: 'none'}}}>
                    <ul className={classes.ul}>
                        <li><GitHubIcon fontSize="medium"/></li>
                        <li><InstagramIcon fontSize="medium"/></li>
                        <li><TwitterIcon fontSize="medium"/></li>
                        <li><LinkedInIcon fontSize="medium"/></li>
                    </ul>
                </Box>
                <div className={classes.footer_StyledCredit}>
                    Designed &amp; Built by Jirayut.l!!
                </div>
            </div>
        </footer>
    )
}
export default Footer
