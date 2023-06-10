import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Bookmark} from '../container';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="통관부호 검색">
      <Stack.Screen
        name="북마크 확인"
        component={Bookmark}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
