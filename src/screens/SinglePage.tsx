import Header from '../components/Header';
import {Box, makeStyles} from '@material-ui/core';
import singlePage from '../theme/singlepage';

const useStyles = makeStyles(singlePage);
const SinglePage = () => {
    const classes = useStyles();
  return(
      <>
          <Header/>
          <Box position='fixed' py={2} height='100vh' width='20px'>
              <div className={classes.line} />
          </Box>
      </>
  )
}

export default SinglePage;
