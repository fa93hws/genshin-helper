import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GroupLabel } from '../group-label';

describe('GroupLabel', () => {
  test('onClick is fired when label is clicked', () => {
    const onClick = jest.fn();
    render(<GroupLabel color="black" onClick={onClick} isActive={false} />);
    userEvent.click(screen.getByLabelText('choose-group'));
    expect(onClick).toBeCalledTimes(1);
  });

  it('does not blink when not active', () => {
    render(<GroupLabel color="black" onClick={jest.fn()} isActive={false} />);
    const label = screen.getByLabelText('choose-group');
    const style = window.getComputedStyle(label);
    expect(style.animation).toEqual('');
  });

  it('blinks when active', () => {
    render(<GroupLabel color="black" onClick={jest.fn()} isActive={true} />);
    const label = screen.getByLabelText('choose-group');
    const style = window.getComputedStyle(label);
    expect(style.animation).toContain('blink');
  });
});
