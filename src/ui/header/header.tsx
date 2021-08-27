import * as React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles, withTheme, WithTheme } from '@material-ui/core/styles';

import { sizes } from '@styles/styles';

const useHeaderStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: sizes[3],
    [theme.breakpoints.up('sm')]: {
      height: sizes[4],
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
      <Typography variant="h4" component="h1">
        么啥用的原神小助手
      </Typography>
    </AppBar>
  );
});
