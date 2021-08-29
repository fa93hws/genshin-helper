import * as React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '@ui/header/header';
import { Footer } from '@ui/footer/footer';
import { Home } from '@pages/home/home';
import { gridBaseline } from '@styles/styles';
import { NotFound } from '@pages/not-found/404';
import { NumberCube } from '@pages/puzzle/inazuma/number-cube/number-cube';
import { createRotationCubePage } from '@pages/puzzle/inazuma/rotation-cube/rotation-cube';
import { pagePaths } from '@pages/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    margin: gridBaseline * 2,
    [theme.breakpoints.up('sm')]: {
      margin: gridBaseline * 4,
    },
  },
}));

export const Page = React.memo(() => {
  const styles = useStyles();
  const RotationCubePage = React.useMemo(() => createRotationCubePage(), []);
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
            <RotationCubePage />
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
});
