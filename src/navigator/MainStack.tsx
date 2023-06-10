import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ItemDetail, Search, Setting} from '../container';
import ItemSituations from '../view/ItemSituationScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="통관부호 검색">
      <Stack.Screen
        name="통관부호 검색"
        component={Search}
        options={{headerShown: false}}
      />
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
  );
};

export default MainStack;
