import * as React from 'react';
import { AppBar, Typography, Link } from '@material-ui/core';
import { makeStyles, withTheme, WithTheme } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';

import { gridBaseline } from '@styles/styles';
import { pagePaths } from '@pages/routes';

const useHeaderStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: gridBaseline * 6,
    [theme.breakpoints.up('sm')]: {
      height: gridBaseline * 8,
    },
  },
  iconWrapper: {
    color: theme.palette.primary.contrastText,
  },
}));

export const Header = withTheme((props: WithTheme) => {
  const styles = useHeaderStyles(props.theme);
  return (
    <AppBar position="static" className={styles.container}>
      <Link
        className={styles.iconWrapper}
        component={ReactRouterLink}
        to={pagePaths.home}
      >
        <Home fontSize="large" />
      </Link>
      <Typography variant="h4" component="h1">
        么啥用的原神小助手
      </Typography>
      <div />
    </AppBar>
  );
});
