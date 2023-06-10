import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Setting} from '../container';

const stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};

export default SettingStack;
