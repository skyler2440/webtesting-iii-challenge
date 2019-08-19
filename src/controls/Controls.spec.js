import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls'
import { render, fireEvent } from "@testing-library/react";

describe('<Controls />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

});