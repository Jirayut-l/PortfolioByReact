import {Box, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import experience from '../theme/experience';
import common from '../theme/common';

const useStyles = makeStyles(experience);
const commonStyles = makeStyles(common());
const Experience = () => {
    const classes = useStyles();
    const classesCommon = commonStyles();
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" my={1}>
                <Typography variant="h3" color="textPrimary">
                    Experience
                </Typography>
            </Box>
            <Box sx={{my:5}}>
                <Typography variant="h6" color="textPrimary">
                    <span>Senior Back End Developer</span>
                    <span className={classes.company}>&nbsp;@&nbsp;<a href="https://www.pttdigital.com/" className={classes.inlineLink}>PTT Digital Solutions Co., Lt</a></span>
                </Typography>
                <p className={classes.range}>Feb 2019 - 31 Jan 2022</p>
                <ul className={classesCommon.ulList}>
                    <Typography variant="subtitle1" color="textPrimary">
                        <li>I worked in Commodity Trading and Risk Management team (CTRM) Fix issue in API</li>
                        <li>Fix issue in API & Application from CTRM Team and Test</li>
                        <li>Development Web Api C# .Net Framework instead of using Stored Procedure By using Logic Stored Procedure Come to work in c#</li>
                        <li>Design new logic and Find a solution with efficiency and speed of execution to using.</li>
                    </Typography>
                </ul>
            </Box>
            <Box sx={{my:5}}>
                <Typography variant="h6" color="textPrimary">
                    <span>Junior Back End Developer</span>
                    <span className={classes.company}>&nbsp;@&nbsp;<a href="https://www.rmutp.ac.th/" className={classes.inlineLink}>Rajamangala University of Technology Phra Nakhon</a></span>
                </Typography>
                <p className={classes.range}>1 Aug 2017 - 31 Jan 2019</p>
                <ul className={classesCommon.ulList}>
                    <Typography variant="subtitle1" color="textPrimary">
                        <li>Developed Web Application with ASP.NET</li>
                        <li>Developed ASP.NET Web APIs</li>
                        <li>Fixed bugs from an existing web application, web API, and</li>
                        <li>Implemented Enhancements that significantly improved</li>
                        <li>Deploy Web Application to windows server</li>
                    </Typography>
                </ul>
            </Box>
        </Box>
    );
};

export default Experience;
