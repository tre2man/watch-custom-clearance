import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './Main';
import ItemDetail from './container/ItemDetail';
import ItemSituations from './container/ItemSituation';
import GoogleAd from './container/GoogleAd';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="통관부호 검색" component={Main} />
        <Stack.Screen
          name="상품정보"
          component={ItemDetail}
          initialParams={{cargMtNo: ''}}
        />
        <Stack.Screen
          name="상품상태"
          component={ItemSituations}
          initialParams={{data: []}}
        />
      </Stack.Navigator>
      <GoogleAd />
    </NavigationContainer>
  );
}

export default App;
