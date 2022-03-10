import {Avatar, Box, Grid, Typography} from '@mui/material';
import React from 'react';
import {createStyles, makeStyles} from '@mui/styles';

const useStyles = makeStyles(()=>
    createStyles({
        large: {
            width: '200px',
            height: '200px'
        },
    })
);

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
                    <Grid item xs={12} md={8}>
                        <Typography variant="subtitle1" color="textPrimary">
                            &nbsp;&nbsp;I am developer. My coding guideline is
                            <span style={{color: '#49d6e9'}}>
                            &nbsp;"coding is as simple as writing!"
                        </span>
                            &nbsp;for easy to reading included fixing. I have experience to make
                            a game and a web. I am quick learner and always ready to adapt to
                            working as a team. I am easy going. I can get along with anybody.
                            I am ready to improve my skills all the time. My hobbies are play the
                            game, watching movies and listening music.
                            I would like to have a good job which brings a stable income, have security and a family
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                            <Avatar className={classes.large} alt="my"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default About;
