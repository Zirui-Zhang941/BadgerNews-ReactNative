import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import BadgerNewsScreen from "../screens/BadgerNewsScreen";
import BadgerPreferencesScreen from "../screens/BadgerPreferencesScreen";
import BadgerStack from "./BadgerStack";
function BadgerTabs(props) {

    const tab=createBottomTabNavigator();
    const stack=createStackNavigator();
    return <>
        <tab.Navigator>
            <tab.Screen name="News" component={BadgerStack}/>
            <tab.Screen name="Preferences" component={BadgerPreferencesScreen}/>
        </tab.Navigator>
    </>
}

export default BadgerTabs;