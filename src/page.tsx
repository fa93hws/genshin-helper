import * as React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '@ui/header/header';
import { Footer } from '@ui/footer/footer';
import { Home } from '@pages/home/home';
import { sizes } from '@styles/styles';
import { NotFound } from '@pages/not-found/404';
import { NumberCube } from '@pages/puzzle/inazuma/cube/number/number';
import { RotationCube } from '@pages/puzzle/inazuma/cube/rotation/rotation';
import { pagePaths } from '@pages/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      margin: sizes[1],
    },
  },
}));

export const Page = () => {
  const styles = useStyles();
  return (
    <Box display="flex" flexDirection="column" className={styles.root}>
      <Header />
      <Box component="main" className={styles.main}>
        <Switch>
          <Route exact path={pagePaths.home}>
            <Home />
          </Route>
          <Route exact path={pagePaths.puzzle.inazuma.cube.number}>
            <NumberCube />
          </Route>
          <Route exact path={pagePaths.puzzle.inazuma.cube.rotation}>
            <RotationCube />
          </Route>
          <Route exact path={pagePaths.notFound}>
            <NotFound />
          </Route>
          <Route>
            <Redirect to={pagePaths.notFound} />
          </Route>
        </Switch>
      </Box>
      <Footer />
    </Box>
  );
};
