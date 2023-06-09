import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Main} from './Main';
import ItemDetail from './container/ItemDetail';
import ItemSituations from './container/ItemSituation';
import GoogleAdView from './view/GoogleAdVIew';
import {
  ThemeColor,
  ThemeColorProvider,
  ThemeContext,
  useTheme,
  useThemeHook,
} from './utils/ThemeColorProvider';
import {useEffect, useState} from 'react';
import Setting from './container/Setting';

const Stack = createNativeStackNavigator();

/**
 * 검색 화면에 대한 스택들 (검색화면, 상품 디테일, 상품 배송정보 리스트)
 * 앱의 최상위 컴포넌트는 아닌데...구조가 뭘까 도대체
 * @returns
 */
function App(): JSX.Element {
  // const {theme} = useThemeHook();
  const {theme} = useTheme();

  return (
    <ThemeColorProvider theme={theme}>
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
        <GoogleAdView />
      </NavigationContainer>
    </ThemeColorProvider>
  );
}

export default App;
