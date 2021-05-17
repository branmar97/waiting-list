import React from 'react';
import Input from '../components/Input';
import { render ,fireEvent } from "@testing-library/react"

describe("rendering components", () => {
    it("renders Input component without crashing", () => {
      render(<Input />);
    });
  });