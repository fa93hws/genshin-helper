import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CubeBar } from '../cube-bar';

describe('CubeBar', () => {
  const add = jest.fn();
  const remove = jest.fn();
  const Bar = (props: {
    disableAddButton: boolean;
    disableRemoveButton: boolean;
  }) => (
    <CubeBar
      onAddClicked={add}
      onRemoveClicked={remove}
      title="title"
      disableAddButton={props.disableAddButton}
      disableRemoveButton={props.disableRemoveButton}
    >
      I am a cube
    </CubeBar>
  );

  beforeEach(() => {
    add.mockClear();
    remove.mockClear();
  });

  it('fire add event when add button is clicked', () => {
    render(<Bar disableAddButton={false} disableRemoveButton={false} />);
    userEvent.click(screen.getByLabelText('add-cube'), new MouseEvent('click'));
    expect(add).toHaveBeenCalledTimes(1);
  });

  it('fire remove event when remove button is clicked', () => {
    render(<Bar disableAddButton={false} disableRemoveButton={false} />);
    userEvent.click(
      screen.getByLabelText('remove-cube'),
      new MouseEvent('click'),
    );
    expect(remove).toHaveBeenCalledTimes(1);
  });

  test('add button is disabled if disableAddButton is true', () => {
    render(<Bar disableAddButton={true} disableRemoveButton={false} />);
    const addButton = screen.getByLabelText('add-cube');
    expect(addButton).toBeDisabled();
  });

  test('remove button is disabled if disableRemoveButton is true', () => {
    render(<Bar disableAddButton={false} disableRemoveButton={true} />);
    const removeButton = screen.getByLabelText('remove-cube');
    expect(removeButton).toBeDisabled();
  });
});
