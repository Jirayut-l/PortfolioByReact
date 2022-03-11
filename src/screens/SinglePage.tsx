import Header from '../components/Header';
import {Container, Grid} from '@mui/material';
import singlePage from '../theme/singlepage';
import {Element} from 'react-scroll';
import Me from '../components/Me';
import About from '../components/About';
import {makeStyles} from '@mui/styles';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import SocialMediaMenu from '../components/SocialMediaMenu';

const useStyles = makeStyles(singlePage);
const SinglePage = () => {
    const classes = useStyles();
    return (
        <>
            <Header/>
            <SocialMediaMenu/>
            <Container maxWidth={'lg'}>
                <Grid container>
                    <Grid item xs={12}>
                        <div id="containerElement" className={classes.content}>
                            <Element className="element" name="">
                                <Me/>
                            </Element>
                            <Element className="element" name="about">
                                <About/>
                            </Element>
                            <Element className="element" name="experience">
                                <Experience/>
                            </Element>
                            <Element className="element" name="contact">
                                <Contact/>
                            </Element>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SinglePage;
