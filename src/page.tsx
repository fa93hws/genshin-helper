import * as React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from '@ui/header/header';
import { Footer } from '@ui/footer/footer';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  main: {
    flex: 1,
  },
});

export const Page = () => {
  const styles = useStyles();
  return (
    <Box display="flex" flexDirection="column" className={styles.root}>
      <Header />
      <Box component="main" className={styles.main}>
        Hello World Mode={process.env.NODE_ENV}
      </Box>
      <Footer />
    </Box>
  );
};
