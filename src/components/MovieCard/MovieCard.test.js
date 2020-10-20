import React from "react";
import MovieCard from './MovieCard';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe.only("Test for MovieCard",() => {
  it('renders MovieCard without value', () => {
    const wrapper = shallow(<MovieCard />);
    expect(wrapper.find('h3').text()).toBe('');
  });
  it('renders MovieCard with value', () => {
    const wrapper = shallow(<MovieCard Title='TEST' />);
    expect(wrapper.find('h3').text()).toBe('TEST');
  });
  it('should call mocks', () => {
    const Mock = jest.fn();
    const component = shallow(<MovieCard setPopUpImg={Mock}/>);
    component.find('img').simulate('click');
    expect(Mock).toHaveBeenCalledTimes(1);
  })
  it('should`t call mocks', () => {
    const Mock = jest.fn();
    const component = shallow(<MovieCard Poster="N/A" setPopUpImg={Mock}/>);
    component.find('img').simulate('click');
    expect(Mock).toHaveBeenCalledTimes(0);
  })
})