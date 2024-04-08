import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BadgerNewsScreen from "../screens/BadgerNewsScreen";
import BadgerDetailedScreen from "../screens/BadgerDetailedScreen"

const NewsStack = createNativeStackNavigator();

function BadgerStack() {
  return (
      <NewsStack.Navigator>
        <NewsStack.Screen name="AllNews" component={BadgerNewsScreen} options={{headerShown: false}}/>
        <NewsStack.Screen name="DetailedNews" component={BadgerDetailedScreen} options={{headerShown: "Article"}}/>
      </NewsStack.Navigator>
  );
}

export default BadgerStack;