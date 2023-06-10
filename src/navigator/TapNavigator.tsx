import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import SettingStack from './SettingStack';
import MainStack from './MainStack';
import BookmarkStack from './BookmarkStack';

const Tab = createBottomTabNavigator();

/**
 * 각 탭에 대한 스택을 표시
 * @returns
 */
const TapNavigator = () => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <Tab.Navigator initialRouteName="Search">
      <Tab.Screen
        name="Search"
        component={MainStack}
        options={{
          title: '홈',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: theme === 'light' ? 'black' : 'white',
          tabBarActiveBackgroundColor: theme === 'light' ? 'white' : '#121212',
          tabBarInactiveBackgroundColor:
            theme === 'light' ? 'white' : '#121212',
        }}
      />
      <Tab.Screen
        name="BookmarkStack"
        component={BookmarkStack}
        options={{
          title: '북마크',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmarks" color={color} size={size} />
          ),
          tabBarActiveTintColor: theme === 'light' ? 'black' : 'white',
          tabBarActiveBackgroundColor: theme === 'light' ? 'white' : '#121212',
          tabBarInactiveBackgroundColor:
            theme === 'light' ? 'white' : '#121212',
        }}
      />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          title: '설정',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
          tabBarActiveTintColor: theme === 'light' ? 'black' : 'white',
          tabBarActiveBackgroundColor: theme === 'light' ? 'white' : '#121212',
          tabBarInactiveBackgroundColor:
            theme === 'light' ? 'white' : '#121212',
        }}
      />
    </Tab.Navigator>
  );
};

export default TapNavigator;
