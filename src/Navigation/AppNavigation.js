import React, { useContext } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeDetailScreen, HomeScreen, Login } from '../module';
import { navigationRef } from '../utils';
import HomeContext from '../context/HomeContext';


const screen = {
    ...TransitionPresets.DefaultTransition,
    gestureEnabled: false,
};

const RootStack = createStackNavigator();

const RootNavigator = () => {
    const { value } = useContext(HomeContext);
    return (
        <NavigationContainer
            ref={navigationRef}>
            <RootStack.Navigator
                screenOptions={{ headerShown: false, gestureEnabled: false }}
            >
                <RootStack.Screen name={'Login'} component={Login} options={screen} />
                <RootStack.Screen name={'HomeScreen'} component={HomeScreen} options={screen} />
                <RootStack.Screen name={'HomeDetailScreen'} component={HomeDetailScreen} options={screen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;