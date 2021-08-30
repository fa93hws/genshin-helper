import * as React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import classnames from 'classnames';

import { gridBaseline } from '@styles/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    height: gridBaseline * 6,
    width: gridBaseline * 6,
    minWidth: 'unset',
    [theme.breakpoints.up('sm')]: {
      height: gridBaseline * 8,
      width: gridBaseline * 8,
    },
  },
  active: {
    animation: `$blink 1000ms infinite ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes blink': {
    '50%': {
      opacity: 0.5,
    },
  },
}));

export type GroupLabelProps = {
  color: string;
  onClick(): void;
  isActive: boolean;
  groupId: number;
};

export const GroupLabel = React.memo((props: GroupLabelProps) => {
  const styles = useStyles();
  const verb = React.useMemo(
    () => (props.isActive ? 'inactive' : 'active'),
    [props.isActive],
  );
  return (
    <Button
      className={classnames(styles.root, {
        [styles.active]: props.isActive,
      })}
      style={{
        backgroundColor: props.color,
      }}
      role="checkbox"
      aria-label={`${verb} group ${props.groupId}`}
      aria-checked={props.isActive}
      onClick={props.onClick}
    />
  );
});
