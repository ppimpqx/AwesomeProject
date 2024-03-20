import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ChartKitScreen from './screens/week5/ChartKitScreen';
import Home from './screens/week6/Home';
import FlatListExample from './screens/week6/FlatListExample';
import Event from './components/week6/Event';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';

// import Welcome from './screens/Welcome';
// import Ex01 from './screens/week2/Ex01';
// import Ex02 from './screens/week2/Ex02';
// import Ex03 from './screens/week2/Ex03';
// import Ex04 from './screens/week2/Ex04';
// import Ex05 from './screens/week2/Ex05';
// import Ex06 from './screens/week2/Ex06';
// import Ex07 from './screens/week2/Ex07';
// import Ex08 from './screens/week2/Ex08';
// import Ex09 from './screens/week2/Ex09';
// import Ex10 from './screens/week2/Ex10';
// import Ex11 from './screens/week2/Ex11';
// import Ex12 from './screens/week2/Ex12';
// import { TextInput, StyleSheet, View } from 'react-native';
// import Extra from './screens/week2/Extra';
// import Travel from './screens/week3/Travel';

// import { PaperProvider } from 'react-native-paper';
// import TestPaper from './screens/week4/TestPaper';
// import Resort from './screens/week3/Resort';
// import Health from './screens/week5/Health';


export default function App() {
  return (
    //<Ex12 />
    // <View style={styles.container}>
    //   <TextInput
    //   keyboardType="email-address"
    //   autoCapitalize="none"
    //   autoCorrect={false}
    //   maxLength={30}
    //   multiline={false}
    //   placeholder="Please enter your email"
    //   returnKeyType="next"
    //   onChangeText={(text)=>{}}
    //   defaultValue="Default text"
    // /></View>
    // <Travel/>
    // <PaperProvider>
    //   <TestPaper />
    // </PaperProvider>
    // <Resort/>
    // <Health />
    // <ChartKitScreen />
    // <Home/>
    // <FlatListExample/>
    // <Event/>
    <NavigationContainer>
            {/* <HomeStack /> */}
            {/* <BottomTab /> */}
            <RootStack />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '00000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
