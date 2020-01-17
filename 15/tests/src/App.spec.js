import React from 'react';
import App, { doIncrement, doDecrement, Counter } from './App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import renderer from 'react-test-renderer';


configure({ adapter: new Adapter() });

describe('Local State', ()=> {

    it('should increment the counter in state', () =>{
        const state = {counter: 0};
        const newState = doIncrement(state);

        expect(newState.counter).toEqual(1);
    });

    it('should decrement the counter in state', () =>{
        const state = { counter: 0 };
        const newState = doDecrement(state);
    
        expect(newState.counter).toEqual(-1);    
    });
});

describe('App Component', () => {
    it('renders the Counter wrapper', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Counter)).toHaveLength(1);
    });

    it('passes all props to Counter wrapper', () => {
        const wrapper = shallow(<App />);
        let counterWrapper = wrapper.find(Counter);

        expect(counterWrapper.props().counter).toEqual(0);
        wrapper.setState({ counter: -1 });
        counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.props().counter).toEqual(-1);
      });

      it('increments the counter', () => {
        const wrapper = shallow(<App />);
    
        wrapper.setState({ counter: 0 });
        wrapper.find('button').at(0).simulate('click');
    
        expect(wrapper.state().counter).toEqual(1);
      });
    
      it('decrements the counter', () => {
        const wrapper = shallow(<App />);
    
        wrapper.setState({ counter: 0 });
        wrapper.find('button').at(1).simulate('click');
    
        expect(wrapper.state().counter).toEqual(-1);
      });

  });

  describe('App Component', () => {
    it('calls componentDidMount', () => {
      sinon.spy(App.prototype, 'componentDidMount');
  
      const wrapper = mount(<App />);
      expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
    });
  });

  describe('App Snapshot', () => {
    test('renders', () => {
      const component = renderer.create(
        <App />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  
  describe('Counter Snapshot', () => {
    test('renders', () => {
      const component = renderer.create(
        <Counter counter={1} />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });