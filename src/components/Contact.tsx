import {Box, Typography} from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" my={1}>
                <Typography variant="h3" color="textPrimary">
                    Contact
                </Typography>
            </Box>
            <Box my={1}>
                <Typography variant="subtitle1" color="textPrimary">
                    74/14 M.6 YaiCha, Samphran Nakornpathom 73110
                    <br/>
                    088-228-4176
                    <br/>
                    jirayut.l@outlook.com
                </Typography>
            </Box>
        </Box>
    );
};

export default Contact;
