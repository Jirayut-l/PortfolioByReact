import {Avatar, Box, Grid, Typography} from '@mui/material';
import React from 'react';

const About = () => {
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

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={8} order={{xs: 2, md: 1}}>
                        <Typography variant="subtitle1" color="textPrimary">
                            &nbsp;&nbsp;I am developer. My coding guideline is
                            <span style={{color: '#49d6e9'}}>
                            &nbsp;"coding is as simple as writing!"
                        </span>
                            &nbsp;  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate doloribus eum fugit hic impedit modi nobis officiis perferendis perspiciatis, placeat quam saepe sint sit tempore ut vel velit, voluptatem.
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
