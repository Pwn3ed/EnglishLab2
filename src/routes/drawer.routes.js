import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Screen, Navigator } = createDrawerNavigator();

import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { UserScreen } from "../screens/UserScreen";
import { PasswordRecoveryScreen } from '../screens/PasswordRecoveryScreen';

export function DrawerRoutes() {
    return (
        <Navigator>
            <Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title:'Home',
                }}
            />
            <Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Screen
                name="UserScreen"
                component={UserScreen}
            />
        </Navigator>
    )
}
