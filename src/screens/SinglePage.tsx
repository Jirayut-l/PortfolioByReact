import Header from '../components/Header';
import {Box, Container, Grid} from '@mui/material';
import singlePage from '../theme/singlepage';
import {Element} from 'react-scroll';
import Me from '../components/Me';
import About from '../components/About';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(singlePage);
const SinglePage = () => {
    const classes = useStyles();
    return (
        <>
            <Header/>
            <Container maxWidth={'lg'}>
                <Grid container>
                    <Grid item xs={1}>
                        <Box position="fixed" py={2} height="100vh" width="20px">
                            <div className={classes.line}/>
                        </Box>
                    </Grid>
                    <Grid item xs={11}>
                        <div id="containerElement">
                            <Element className="element" name="">
                                <Me/>
                            </Element>
                            <Element className="element" name="about">
                                <About/>
                            </Element>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SinglePage;
