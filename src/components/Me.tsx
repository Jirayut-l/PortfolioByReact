import React from 'react';
import {Box, Typography} from '@mui/material';

const Me = () => {
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="center">
            <Box>
                <Box>
                    <Typography variant="h5" color="secondary">Hi, my name is</Typography>
                </Box>
                <Box my={1}>
                    <Typography variant="h2" color="textPrimary">
                        Jirayut Laorpongphruek
                    </Typography>
                </Box>
                <Typography variant="body1" style={{color:'#d0cccc', maxWidth:'560px'}} >
                    I'm a BackEnd Developer and exceptional experience. Currently, I’m focused on FrontEnd learning because I want to be a <br/>
                    <span style={{color: '#e4b781'}}>
                       Full Stack Developer !!
                    </span>
                </Typography>
            </Box>
        </Box>
    );
};

export default Me;
