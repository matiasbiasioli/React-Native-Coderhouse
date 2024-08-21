import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import MainNav from './src/navigation/MainNav';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-MediumItalic.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
  })
  if (!fontLoaded) {
    return;
  }
  return (
    // <Login/>
    // <Register/>
    <Provider store={store}>
      {/* <NavigationContainer> */}
        {/* <TabNav /> */}
        <MainNav/>
        <StatusBar style="auto" />
      {/* </NavigationContainer> */}
    </Provider>
  );
}

const styles = StyleSheet.create({});
