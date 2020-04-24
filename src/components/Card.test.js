import React from 'react';
import PropTypes from 'prop-types';
import { render, cleanup } from '@testing-library/react'
import Card from './Card';

// id: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   emoji: PropTypes.string,
//   onDelete: PropTypes.func.isRequired

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        // id={props.id}
        // text={props.text}
        // emoji={props.emoji}
        // onDelete={props.onDelete}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});