import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react';

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    render(<App />);
  });
});