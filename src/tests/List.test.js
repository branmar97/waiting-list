import React from 'react';
import List from '../components/List';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";

const names = ['Wilma', 'Emily', 'Carter'];

describe("rendering components", () => {
    it("renders List component without crashing", () => {
      shallow(<List waiting={names} />);
    });
  });