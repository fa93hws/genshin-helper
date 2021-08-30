import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RotationCube, createStatefulRotationCube } from '../cube';

describe('RotationCube', () => {
  describe('Stateless', () => {
    test('onClick is fired when cube is clicked', () => {
      const onClick = jest.fn();
      render(<RotationCube rotationDeg={90} onClick={onClick} cubeId={1} />);
      userEvent.click(screen.getByLabelText('rotate cube 1 to south'));
      expect(onClick).toBeCalledTimes(1);
    });

    it('rotates given degree', () => {
      const onClick = jest.fn();
      render(<RotationCube rotationDeg={90} onClick={onClick} cubeId={0} />);
      const cube = screen.getByLabelText('rotate cube 0 to south');
      expect(cube.style.transform).toEqual('rotate(90deg)');
    });

    it('log error when given degree is not a multiplier of 90', () => {
      const errorLog = jest
        .spyOn(console, 'error')
        .mockImplementation(() => undefined);
      render(<RotationCube rotationDeg={92} onClick={jest.fn()} cubeId={0} />);
      expect(
        screen.getByLabelText('rotate cube 0 to undefined'),
      ).toBeInTheDocument();
      expect(errorLog).toHaveBeenCalledTimes(1);
      errorLog.mockRestore();
    });
  });

  describe('Stateful', () => {
    it('rotates 90 deg clockwise on each click', () => {
      const { Component: StatefulRotationCube } = createStatefulRotationCube(0);
      render(<StatefulRotationCube />);
      const cube = screen.getByLabelText('rotate cube 0 to east');
      expect(cube.style.transform).toEqual('rotate(0deg)');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(90deg)');
      expect(cube).toHaveAttribute('aria-label', 'rotate cube 0 to south');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(180deg)');
      expect(cube).toHaveAttribute('aria-label', 'rotate cube 0 to west');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(270deg)');
      expect(cube).toHaveAttribute('aria-label', 'rotate cube 0 to north');
      userEvent.click(cube);
      expect(cube.style.transform).toEqual('rotate(360deg)');
      expect(cube).toHaveAttribute('aria-label', 'rotate cube 0 to east');
    });
  });
});
