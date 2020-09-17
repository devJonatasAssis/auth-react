import React from "react";
import Signin from "../pages/Signin";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Navigator>
        <Screen name="Signin" component={Signin} />
    </Navigator>
);

export default AuthRoutes;
