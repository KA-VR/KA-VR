/* global  describe, it */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/client/components/App.js';

describe('Sample test for App Component', () => {
  it('Should have div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
