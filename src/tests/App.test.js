import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('search by keyword button clicked',() => {
      let spy =  jest.spyOn(App.prototype, 'searchRestaurants')
          .mockImplementation(() => 8);

      const wrapper = shallow(<App />);
      const searchWithKeyboardBtn = wrapper.find('#search-with-keyword');
      searchWithKeyboardBtn.simulate('click');
      expect(spy).toHaveBeenCalled();
  });

  it('search random button clicked',() => {
      let spy =  jest.spyOn(App.prototype, 'searchRandomRestaurant')
          .mockImplementation(() => 8);

      const wrapper = shallow(<App />);
      const searchRandomlyBtn = wrapper.find('#random-search');
      searchRandomlyBtn.simulate('click');
      expect(spy).toHaveBeenCalled();
  })
});