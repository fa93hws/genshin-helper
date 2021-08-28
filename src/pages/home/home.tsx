import * as React from 'react';
import {
  Box,
  Typography,
  List,
  Link,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';

import { pagePaths } from '@pages/routes';

export const Home = () => (
  <Box>
    <Typography variant="h3">解密：</Typography>
    <List>
      <ListItem>
        <Link
          component={ReactRouterLink}
          to={pagePaths.puzzle.inazuma.cube.rotation}
        >
          <ListItemText>稻妻-旋转方块</ListItemText>
        </Link>
      </ListItem>
      <ListItem>
        <Link
          component={ReactRouterLink}
          to={pagePaths.puzzle.inazuma.cube.number}
        >
          <ListItemText>稻妻-数字方块</ListItemText>
        </Link>
      </ListItem>
    </List>
  </Box>
);
