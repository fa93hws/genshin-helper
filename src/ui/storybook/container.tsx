import * as React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { gridBaseline } from '@styles/styles';

const useStyles = makeStyles({
  root: {
    padding: gridBaseline * 3,
  },
});

type Props = {
  children: React.ReactNode;
  legend?: string;
};
export const StoryContainer = (props: Props) => {
  const classnames = useStyles();
  return (
    <Box>
      <fieldset className={classnames.root}>
        {props.legend && <legend>{props.legend}</legend>}
        {props.children}
      </fieldset>
    </Box>
  );
};
