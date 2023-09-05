import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { LoginScreen } from "../screens/LoginScreen";
import { PasswordRecoveryScreen } from "../screens/PasswordRecoveryScreen";

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Screen 
                name="PasswordRecoveryScreen"
                component={PasswordRecoveryScreen}
            />
        </Navigator>
    )
}
