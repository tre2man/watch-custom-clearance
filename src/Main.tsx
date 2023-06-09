import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './container/Search';
import Setting from './container/Setting';

const Tab = createBottomTabNavigator();

/**
 * 하단 탭에 대한 상태 (홈(검색 로직들), 설정)
 * App.tsx 다음으로 최상위 컴포넌트
 * @returns
 */
export const Main = () => {
  return (
    <Tab.Navigator initialRouteName="Search">
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: '홈',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '설정',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
