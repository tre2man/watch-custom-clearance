import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const Test2 = () => {
  return (
    <View>
      <Text>Test2</Text>
    </View>
  );
};

const Test3 = () => {
  return (
    <View>
      <Text>Test3</Text>
    </View>
  );
};

export const Test = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Test2}
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
        component={Test3}
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
