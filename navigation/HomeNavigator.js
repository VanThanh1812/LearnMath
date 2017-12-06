import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import StreamLocation from '../screens/StreamLocation';
import FollowLocation from '../screens/FollowLocation';

const HomeNavigator = StackNavigator({
	Home:{
		screen: HomeScreen,
	},
	StreamLocation:{
		screen: StreamLocation,
		navigationOptions: {
      		headerTitle: 'Stream Location',
    	},
	},
	FollowLocation:{
		screen: FollowLocation,
		navigationOptions: {
      		headerTitle: 'Follow Location',
    	},
	} 
}, {
	navigationOptions:{
		header: null
	}
});

export default HomeNavigator;