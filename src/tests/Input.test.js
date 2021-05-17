import React from 'react';
import Input from '../components/Input';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";

describe("rendering components", () => {
    it("renders Input component without crashing", () => {
      shallow(<Input />);
    });
  });