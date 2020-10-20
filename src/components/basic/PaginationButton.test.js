import React from "react";
import PaginationButton from './PaginationButton';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe.only("Test for PaginationButton",() => {
  it('renders Input without value', () => {
    const wrapper = shallow(<PaginationButton />);
    expect(wrapper.find('button').text()).toBe('');
  });
  it('renders Input with value', () => {
    const wrapper = shallow(<PaginationButton i={'test'}/>);
    expect(wrapper.find('button').text()).toBe('test');
  });
   
  it('should`t call mocks', () => {
    const setPageMock = jest.fn();
    const getMoviesMock = jest.fn();
    const component = shallow(<PaginationButton setPage={setPageMock} getMovies={getMoviesMock} />);
    component.find('button').simulate('click');
    expect(getMoviesMock).toHaveBeenCalledTimes(0); 
  })
  it('should call mocks', () => {
    const setPageMock = jest.fn();
    const getMoviesMock = jest.fn();
    const component = shallow(<PaginationButton i={1} setPage={setPageMock} getMovies={getMoviesMock} />);
    component.find('button').simulate('click');
    expect(getMoviesMock).toHaveBeenCalledTimes(1); 
  })
  it('should`t call mocks', () => {
    const setPageMock = jest.fn();
    const getMoviesMock = jest.fn();
    const component = shallow(<PaginationButton i={1} page={1} setPage={setPageMock} getMovies={getMoviesMock} />);
    component.find('button').simulate('click');
    expect(getMoviesMock).toHaveBeenCalledTimes(0); 
  })
  /*it('renders Input with value', () => {
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
  })*/
})