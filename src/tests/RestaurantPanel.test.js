import React from 'react';
import RestaurantPanel from '../components/RestaurantPanel';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RestaurantPanel component', () => {
    it('panel clicked',() => {
        let spy =  jest.spyOn(RestaurantPanel.prototype, 'handleModalShow')
            .mockImplementation(() => 8);

        const restaurant = {
            venue: {
                name: 'test name',
                categories: [{icon: {
                    prefix: 'hello',
                    suffix: '.png'
                }}],
                location: {
                    address: 'address'
                }
            }
        };

        const wrapper = shallow(<RestaurantPanel restaurant={restaurant} />);
        const restaurantPanel = wrapper.find('#restaurant-panel');
        restaurantPanel.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});