import React from 'react';
import List from '../components/List';
import { render, fireEvent } from '@testing-library/react';

const names = ['Wilma', 'Emily', 'Carter'];

describe("rendering components", () => {
    it("renders List component without crashing", () => {
      render(<List waiting={names} />);
    });
  });