import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createQuantityConfig } from '../quantity-config';

describe('QuantityConfig', () => {
  describe('createQuantityConfig', () => {
    it('throws if nCubes is larger than maxCubes', () => {
      expect(() =>
        createQuantityConfig({ nCubes: 5, maxCubes: 4, minCubes: 3 }),
      ).toThrow();
    });

    it('throws if nCubes is smaller than minCubes', () => {
      expect(() =>
        createQuantityConfig({ nCubes: 1, maxCubes: 4, minCubes: 3 }),
      ).toThrow();
    });

    it('throws if maxCubes is equal to minCubes', () => {
      expect(() =>
        createQuantityConfig({ nCubes: 3, maxCubes: 3, minCubes: 3 }),
      ).toThrow();
    });
  });

  it('adds cube till reach max', () => {
    const { Component } = createQuantityConfig({
      nCubes: 3,
      maxCubes: 5,
      minCubes: 1,
    });
    render(<Component />);
    const addButton = screen.getByLabelText('add-cube');
    expect(
      screen.getAllByLabelText(/^rotate cube \d to (north|east|west|south)$/)
        .length,
    ).toEqual(3);
    userEvent.click(addButton);
    expect(
      screen.getAllByLabelText(/^rotate cube \d to (north|east|west|south)$/)
        .length,
    ).toEqual(4);
    userEvent.click(addButton);
    expect(
      screen.getAllByLabelText(/^rotate cube \d to (north|east|west|south)$/)
        .length,
    ).toEqual(5);
    expect(addButton).toBeDisabled();
  });

  it('removes cube till reach min', () => {
    const { Component } = createQuantityConfig({
      nCubes: 3,
      maxCubes: 5,
      minCubes: 1,
    });
    render(<Component />);
    const removeButton = screen.getByLabelText('remove-cube');
    expect(
      screen.getAllByLabelText(/^rotate cube \d to (north|east|west|south)$/)
        .length,
    ).toEqual(3);
    userEvent.click(removeButton);
    expect(
      screen.getAllByLabelText(/^rotate cube \d to (north|east|west|south)$/)
        .length,
    ).toEqual(2);
    userEvent.click(removeButton);
    expect(
      screen.getAllByLabelText(/^rotate cube \d to (north|east|west|south)$/)
        .length,
    ).toEqual(1);
    expect(removeButton).toBeDisabled();
  });
});
