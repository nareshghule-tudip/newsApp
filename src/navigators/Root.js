import * as React from 'react';
import {enableScreens} from 'react-native-screens';
enableScreens();
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsDashboard from '../screens/newsDashboard';

const Stack = createStackNavigator();

// RootNavigation.js

export const navigationRef = React.createRef();

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'NewsDashboard'}>
        <Stack.Screen
          name="NewsDashboard"
          component={NewsDashboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
