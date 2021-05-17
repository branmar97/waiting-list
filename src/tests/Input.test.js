import React from 'react';
import Input from '../components/Input';
import { render , fireEvent } from "@testing-library/react"

describe("rendering components", () => {
    it("renders Input component without crashing", () => {
      render(<Input />);
    });
    it("contains Input form", () => {
        const { queryByTestId } = render(<Input />);

        expect(queryByTestId("input-form")).toBeTruthy();
    });
    it("contains input field", () => {
        const { queryByTestId } = render(<Input />);

        expect(queryByTestId("input-field")).toBeTruthy();
    })
    it("contains submit button with placeholder", () => {
        const { queryByTestId, queryByPlaceholderText } = render(<Input />);

        expect(queryByTestId("button")).toBeTruthy();
        expect(queryByPlaceholderText("Add to Waitlist")).toBeTruthy();
    })
  });