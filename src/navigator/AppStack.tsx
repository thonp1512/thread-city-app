import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes";
import LoginScreen from "../screens/Auth/Login/Login.Screen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
     <Stack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
