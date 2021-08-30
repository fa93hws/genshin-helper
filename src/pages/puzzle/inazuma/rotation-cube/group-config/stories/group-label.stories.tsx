import * as React from 'react';
import { colors, makeStyles, Box } from '@material-ui/core';

import { gridBaseline } from '@styles/styles';
import { StoryContainer } from '@ui/storybook/container';
import { GroupLabel, GroupLabelProps } from '../group-label';
import { labelColors } from '../group-config-store';

export default {
  title: 'pages/puzzle/inazuma/rotation-cube/group-config/label',
  Component: GroupLabel,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const useStyles = makeStyles({
  inner: {
    display: 'flex',
    gap: gridBaseline * 4,
  },
  storyContainer: {
    marginBottom: gridBaseline * 4,
  },
});
const noop = () => undefined;
export const FiveColors = () => {
  const styles = useStyles();
  return (
    <Box>
      <StoryContainer
        legend="五色战队 (inactive)"
        className={styles.storyContainer}
      >
        <Box className={styles.inner}>
          {labelColors.map((color) => (
            <GroupLabel
              key={color}
              color={color}
              onClick={noop}
              isActive={false}
              // groupId is only for accessible usage
              groupId={1}
            />
          ))}
        </Box>
      </StoryContainer>
      <StoryContainer
        legend="五色战队 (active)"
        className={styles.storyContainer}
      >
        <Box className={styles.inner}>
          {labelColors.map((color) => (
            <GroupLabel
              key={color}
              color={color}
              onClick={noop}
              isActive={true}
              // groupId is only for accessible usage
              groupId={1}
            />
          ))}
        </Box>
      </StoryContainer>
    </Box>
  );
};

export const Stateless = (props: GroupLabelProps) => <GroupLabel {...props} />;
Stateless.argTypes = {
  color: {
    control: {
      type: 'color',
    },
  },
  isActive: {
    control: {
      type: 'boolean',
    },
  },
  onClick: {
    action: 'clicked',
  },
};
Stateless.args = {
  color: colors.blue[900],
  isActive: false,
  // groupId is only for accessible usage
  groupId: 2,
};
