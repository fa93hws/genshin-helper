import * as React from 'react';
import {
  makeStyles,
  Box,
  colors,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

import { gridBaseline } from '@styles/styles';

export type CubeBarProps = {
  onAddClicked(): void;
  onRemoveClicked(): void;
  disableAddButton: boolean;
  disableRemoveButton: boolean;
  children: React.ReactNode;
  title: string;
};

const useStyles = makeStyles((theme) => ({
  cubeContainer: {
    border: `1px solid ${colors.grey[900]}`,
    display: 'inline-flex',
    padding: gridBaseline * 2,
    gap: gridBaseline,
    [theme.breakpoints.up('sm')]: {
      padding: gridBaseline * 4,
      gap: gridBaseline * 3,
    },
  },
  titleBar: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const CubeBar = (props: CubeBarProps) => {
  const styles = useStyles();
  return (
    <Box>
      <Box className={styles.titleBar}>
        <IconButton
          aria-label="remove-cube"
          color="primary"
          disabled={props.disableRemoveButton}
          onClick={props.onRemoveClicked}
        >
          <RemoveCircleOutline />
        </IconButton>
        <Typography variant="h5">{props.title}</Typography>
        <IconButton
          aria-label="add-cube"
          color="primary"
          disabled={props.disableAddButton}
          onClick={props.onAddClicked}
        >
          <AddCircleOutline />
        </IconButton>
      </Box>
      <Box className={styles.cubeContainer}>{props.children}</Box>
    </Box>
  );
};
