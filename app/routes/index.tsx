import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Inbox from '../pages/Inbox';
import New from '../pages/New';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default index
