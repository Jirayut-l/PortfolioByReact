import {Avatar, Box, Grid, Typography} from '@mui/material';
import React from 'react';
import {makeStyles} from '@mui/styles';
import common from '../theme/common';

const useStyles = makeStyles(common());
const About = () => {
    const classes = useStyles();
    return (
        <>
            <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="center">
                <Box my={1}>
                    <Typography variant="h3" color="textPrimary">
                        About
                        <Typography variant="h3" component="span" color="primary">
                            .Me
                        </Typography>
                    </Typography>
                </Box>

                <Grid container>
                    <Grid item xs={12} md={8} order={{xs: 2, md: 1}}>
                        <Typography variant="subtitle1" color="textPrimary">
                            Hello! my name is Jirayut and I like coding. My concept coding is <br/>
                            <span style={{color: '#49d6e9'}}>
                                &nbsp;"Code as simple as possible!"
                            </span>
                            &nbsp; and best practice guidelines recommend for easy reading included fixing.
                            I have the experience to backend C#. currently my interest in frontend development.
                            I like learning about coding everything because I think there are still many unknowns.
                            I am easy to get along with and enjoy working in a team.
                            My hobbies are playing the game, watching movies, and listening to music and I like workout like cycling, running.
                          <p> Here are a few technologies I’ve been working with recently:</p>
                            <ul className={classes.ulList} >
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>.Net Core C#</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} order={{xs: 1, md: 2}}>
                        <Box display="flex" height="100%" justifyContent="center" alignContent="center">
                            <Avatar src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="my" sx={{width: 200, height: 200}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default About;
