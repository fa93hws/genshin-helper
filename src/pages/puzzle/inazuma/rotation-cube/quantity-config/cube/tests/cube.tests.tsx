import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RotationCube, createStatefulRotationCube } from '../cube';

describe('RotationCube', () => {
  describe('Stateless', () => {
    test('onClick is fired when cube is clicked', () => {
      const onClick = jest.fn();
      render(<RotationCube rotationDeg={90} onClick={onClick} />);
      userEvent.click(screen.getByLabelText('rotate-cube'));
      expect(onClick).toBeCalledTimes(1);
    });

    it('rotates given degree', () => {
      const onClick = jest.fn();
      render(<RotationCube rotationDeg={90} onClick={onClick} />);
      const cube = screen.getByLabelText('rotate-cube');
      expect(cube.style.transform).toEqual('rotate(90deg)');
    });
  });

  describe('Stateful', () => {
    it('rotates 90 deg clockwisely on each click', () => {
      const { Component: StatefulRotationCube } = createStatefulRotationCube(0);
      render(<StatefulRotationCube />);
      const cube = screen.getByLabelText('rotate-cube');
      expect(cube.style.transform).toEqual('rotate(0deg)');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(90deg)');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(180deg)');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(270deg)');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(360deg)');
    });
  });
});
