import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ItemDetail, Search, Setting} from '../container';
import ItemSituations from '../view/ItemSituationScreen';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <Stack.Navigator initialRouteName="통관부호 검색">
      <Stack.Screen
        name="통관부호 검색"
        component={Search}
        options={{
          headerShown: true,
          headerTintColor: theme === 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: theme === 'light' ? 'white' : '#121212',
          },
        }}
      />
      <Stack.Screen
        name="상품정보"
        component={ItemDetail}
        initialParams={{cargMtNo: ''}}
        options={{
          headerShown: true,
          headerTintColor: theme === 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: theme === 'light' ? 'white' : '#121212',
          },
        }}
      />
      <Stack.Screen
        name="상품상태"
        component={ItemSituations}
        initialParams={{data: []}}
        options={{
          headerShown: true,
          headerTintColor: theme === 'light' ? 'black' : 'white',
          headerStyle: {
            backgroundColor: theme === 'light' ? 'white' : '#121212',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
