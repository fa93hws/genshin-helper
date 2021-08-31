import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createGroupConfig } from '../group-config';
import { GroupConfigStore } from '../group-config-store';

describe('GroupConfig', () => {
  it('creates 3 group labels', () => {
    const { Component } = createGroupConfig(3);
    render(<Component />);
    expect(screen.getAllByLabelText(/^(in)?active group \d$/)).toHaveLength(3);
  });

  it('throws if creating more labels than max', () => {
    expect(() => createGroupConfig(999)).toThrow();
  });

  it('keeps adding labels till reach max', () => {
    const { Component } = createGroupConfig(3);
    render(<Component />);
    const addButton = screen.getByLabelText('add-group');
    for (let i = 3; i < GroupConfigStore.maxGroups; i += 1) {
      expect(screen.getAllByLabelText(/^(in)?active group \d$/)).toHaveLength(
        i,
      );
      userEvent.click(addButton);
    }
    expect(screen.getAllByLabelText(/^(in)?active group \d$/)).toHaveLength(
      GroupConfigStore.maxGroups,
    );
    expect(addButton).toBeDisabled();
  });

  it('removes last label when remove is clicked', () => {
    const { Component } = createGroupConfig(3);
    render(<Component />);
    const lastLabel = screen.getByLabelText('active group 2');
    userEvent.click(lastLabel);
    expect(lastLabel).toBeChecked();
    userEvent.click(screen.getByLabelText('remove-group'));
    expect(lastLabel).not.toBeInTheDocument();
  });

  it('keeps removing labels till reach min', () => {
    const { Component } = createGroupConfig(3);
    render(<Component />);
    const removeButton = screen.getByLabelText('remove-group');
    for (let i = 3; i > GroupConfigStore.minGroups; i -= 1) {
      expect(screen.getAllByLabelText(/^(in)?active group \d$/)).toHaveLength(
        i,
      );
      userEvent.click(removeButton);
    }
    expect(screen.getAllByLabelText(/^(in)?active group \d$/)).toHaveLength(
      GroupConfigStore.minGroups,
    );
    expect(removeButton).toBeDisabled();
  });

  test('no label is active after initialization', () => {
    const { Component } = createGroupConfig(3);
    render(<Component />);
    const labels = screen.getAllByLabelText(/^(in)?active group \d$/);
    labels.forEach((label) => {
      expect(label).not.toBeChecked();
    });
  });

  test('label toggle between active and inactive after clicked', () => {
    const { Component } = createGroupConfig(3);
    render(<Component />);
    const label = screen.getByLabelText('active group 2');
    userEvent.click(label);
    expect(label).toBeChecked();
    userEvent.click(label);
    expect(label).not.toBeChecked();
  });

  test('label not being clicked becomes inactive when one label is clicked', () => {
    const { Component } = createGroupConfig(3);
    render(<Component />);
    const label1 = screen.getByLabelText('active group 1');
    const label2 = screen.getByLabelText('active group 2');
    userEvent.click(screen.getByLabelText('active group 1'));
    expect(label1).toBeChecked();
    userEvent.click(label2);
    expect(label1).not.toBeChecked();
    expect(label2).toBeChecked();
  });
});
