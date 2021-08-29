import * as React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { gridBaseline } from '@styles/styles';

const useStyles = makeStyles({
  root: {
    padding: gridBaseline * 3,
    display: 'inline-block',
  },
});

type Props = {
  children: React.ReactNode;
  legend?: string;
  className?: string;
};
export const StoryContainer = (props: Props) => {
  const classnames = useStyles();
  return (
    <Box className={props.className}>
      <fieldset className={classnames.root}>
        {props.legend && <legend>{props.legend}</legend>}
        {props.children}
      </fieldset>
    </Box>
  );
};
