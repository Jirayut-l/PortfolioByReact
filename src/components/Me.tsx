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
                <Typography variant="h6" color="textSecondary">
                    Full Stack Developer
                </Typography>
            </Box>
        </Box>
    );
};

export default Me;
