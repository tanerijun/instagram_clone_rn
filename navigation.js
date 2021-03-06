import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

const SignedInStack = () => (
  <NavigationContainer theme={{ colors: { background: "#000" } }}>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const SignedOutStack = () => (
  <NavigationContainer theme={{ colors: { background: "#000" } }}>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export { SignedInStack, SignedOutStack };
