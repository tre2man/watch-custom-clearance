import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RecoilRoot} from 'recoil';
import {GoogleAdView} from './view';
import {TapNavigator} from './navigator';

const Stack = createNativeStackNavigator();

/**
 * 탭 네비게이터를 표시
 * @returns
 */
function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="통관부호 검색">
          <Stack.Screen
            name="통관부호 검색"
            component={TapNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <GoogleAdView />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
