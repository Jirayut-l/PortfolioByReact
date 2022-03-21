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
            <Typography variant="subtitle1" color="textPrimary">
                <h3><
                    span>Senior Back End Developer</span>
                    <span className={classes.company}>&nbsp;@&nbsp;<a href="https://www.upstatement.com/" className={classes.inlineLink}>PTT Digital Solutions Co., Lt</a></span>
                </h3>
                <p className={classes.range}>Feb 2019 - 31 Jan 2022</p>
                <div>
                    <ul className={classesCommon.ulList}>
                        <li>I'm working in Commodity Trading and Risk Management team (CTRM) Fix issue in API</li>
                        <li>Fix issue in API & Application from CTRM Team and Test</li>
                        <li>Development Web Api C# .Net Framework instead of using Stored Procedure By using Logic Stored Procedure Come to work in c#</li>
                        <li>Design new logic and Find a solution with efficiency and speed of execution to using.</li>
                    </ul>
                </div>
            </Typography>
        </Box>
    );
};

export default Experience;
