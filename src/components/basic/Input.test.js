import React from "react";
import Input from './Input';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe.only("Test for Input",() => {
  it('renders Input without value', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').props().value).toBe(undefined);
  });
  it('renders Input with value', () => {
    const wrapper = shallow(<Input inputValue={'test'}/>);
    expect(wrapper.find('input').props().value).toBe('test');
  });
  it('should call onChange prop', () => {
    const onSearchMock = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };
    const component = shallow(<Input changeInput={onSearchMock} />);
    component.find('input').simulate('change', event);
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    for (let i = 0; i < 5; i++) {
      component.find('input').simulate('change', event);
    }
    expect(onSearchMock).toHaveBeenCalledTimes(6);
  })
})