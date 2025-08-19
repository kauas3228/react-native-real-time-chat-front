import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import './global.css';

// Font Awesome Service
import './services/fontAwesome'
// Import hooks
import useFontsHook from 'hooks/useFontsHook';
// Import components
import SplashScreen from 'screens/SplashScreen';
import SignInScreen from 'screens/SignInScreen';
import SignUpScreen from 'screens/SignUpScreen';
import HomeScreen from 'screens/HomeScreen';
import SearchScreen from 'screens/SearchScreen';
import MessageScreen from 'screens/MessageScreen';

export default function App() {
  const fontsLoader = useFontsHook();
  const Stack = createStackNavigator();

  const [initialized] = useState<boolean>(true)
  const [authenticated] = useState<boolean>(true)

  if (!fontsLoader) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator>
        {!initialized ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          </>
        ) : !authenticated ? (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Seach" component={SearchScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
