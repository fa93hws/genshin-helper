import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createControl } from '../control';

describe('Control', () => {
  describe('createControl', () => {
    it('throws if nCubes is larger than maxCubes', () => {
      expect(() =>
        createControl({ nCubes: 5, maxCubes: 4, minCubes: 3 }),
      ).toThrow();
    });

    it('throws if nCubes is smaller than minCubes', () => {
      expect(() =>
        createControl({ nCubes: 1, maxCubes: 4, minCubes: 3 }),
      ).toThrow();
    });

    it('throws if maxCubes is equal to minCubes', () => {
      expect(() =>
        createControl({ nCubes: 3, maxCubes: 3, minCubes: 3 }),
      ).toThrow();
    });
  });

  it('adds cube till reach max', () => {
    const { Component } = createControl({
      nCubes: 3,
      maxCubes: 5,
      minCubes: 1,
    });
    render(<Component />);
    const addButton = screen.getByLabelText('add-cube');
    expect(screen.getAllByLabelText('rotate-cube').length).toEqual(3);
    userEvent.click(addButton);
    expect(screen.getAllByLabelText('rotate-cube').length).toEqual(4);
    userEvent.click(addButton);
    expect(screen.getAllByLabelText('rotate-cube').length).toEqual(5);
    expect(addButton).toHaveAttribute('disabled');
  });

  it('removes cube till reach min', () => {
    const { Component } = createControl({
      nCubes: 3,
      maxCubes: 5,
      minCubes: 1,
    });
    render(<Component />);
    const removeButton = screen.getByLabelText('remove-cube');
    expect(screen.getAllByLabelText('rotate-cube').length).toEqual(3);
    userEvent.click(removeButton);
    expect(screen.getAllByLabelText('rotate-cube').length).toEqual(2);
    userEvent.click(removeButton);
    expect(screen.getAllByLabelText('rotate-cube').length).toEqual(1);
    expect(removeButton).toHaveAttribute('disabled');
  });
});
