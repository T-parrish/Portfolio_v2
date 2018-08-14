import React from 'react';
import { shallow } from 'enzyme';
import PrivateDashboard from '../../components/PrivateDashboard'

test('Should render expense dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
});