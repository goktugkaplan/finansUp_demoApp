import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
// import { useFonts } from 'expo-font';

import Header from './components/navigation/Header';

import CardScreen from './components/card/CardScreen';
import LoginScreen from './components/login/LoginScreen';
import HomeScreen from './HomeScreen';
import HomeScreen2 from './HomeScreen2';

import StepFlow from './StepFlow';

import GameLearn from './components/game/GameLearn';
import GameFirst from './components/game/GameFirst';
import GameScreen from './components/game/GameScreen';

import AccumulationHomeScreen from './components/accumulation/AccumulationHomeScreen';
import AccumulationCreate from './components/accumulation/AccumulationCreate';

// Finansal Okuryazarlık Ekranları
import WelcomeScreen from './screens/WelcomeScreen';
import LessonScreen from './screens/LessonScreen';
import LearningScreen from './screens/LearningScreen';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultsScreen';
import Store from './screens/Store'


import CommunityHomeScreen from './components/community/CommunityHomeScreen';

import Profile from './components/profile/Profile';

// Geçici ekran bileşeni
const DummyScreen = ({ route }) => (
  <View style={styles.screen}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.name} (DummyScreen)</Text>
  </View>
);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const GameStack = createNativeStackNavigator();
const FinancialStack = createNativeStackNavigator(); // Finansal okuryazarlık için yeni stack

// Game ekranlarını içeren Stack Navigator
function GameStackScreen() {
  return (
    <GameStack.Navigator screenOptions={{ headerShown: false }}>
      <GameStack.Screen name="GameLearn" component={GameLearn} />
      <GameStack.Screen name="GameFirst" component={GameFirst} />
      <GameStack.Screen name="GameScreen" component={GameScreen} />
    </GameStack.Navigator>
  );
}

// Finansal okuryazarlık ekranlarını içeren Stack Navigator
function FinancialStackScreen() {
  return (
    <FinancialStack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <Header />
      }}
    >
      <FinancialStack.Screen name="Welcome" component={WelcomeScreen} />
      <FinancialStack.Screen name="Lesson" component={LessonScreen} />
      <FinancialStack.Screen name="Learning" component={LearningScreen} />
      <FinancialStack.Screen name="Quiz" component={QuizScreen} />
      <FinancialStack.Screen name="Results" component={ResultsScreen} />
      <FinancialStack.Screen name="Store" component={Store} />
    </FinancialStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Ana Sayfa') {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === 'Dersler') {
            return <Ionicons name="book-outline" size={size} color={color} />;
          } else if (route.name === 'İlan Ver') {
            return (
              <View style={styles.addButton}>
                <Entypo name="plus" size={30} color="white" />
              </View>
            );
          } else if (route.name === 'Birikimlerim') {
            return <Ionicons name="wallet" size={size} color={color} />;
          } else if (route.name === 'Profilim') {
            return <Ionicons name="person" size={size} color={color} />;
          } else if (route.name === 'FinansEdu') {
            return <Ionicons name="school" size={size} color={color} />;
          } else if (route.name === 'Topluluk') {
            return <Ionicons name="people" size={size} color={color} />;
          }
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          height: 80,
          paddingBottom: 4,
          paddingTop: 4,
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: '#145F14',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen name="Ana Sayfa" component={HomeScreen2} options={{ header: () => <Header /> }} />
      {/* <Tab.Screen name="Birikimlerim" component={AccumulationHomeScreen} options={{ header: () => <Header /> }} /> */}

      {/* GameLearn ve diğer game ekranları artık bu stack altında */}
      {/*<Tab.Screen name="Dersler" component={GameStackScreen} options={{ headerShown: false }} />*/}

      {/* Finansal Okuryazarlık Ekranları */}
      <Tab.Screen name="FinansEdu" component={FinancialStackScreen} options={{ headerShown: false }} />

      <Tab.Screen name="Topluluk" component={CommunityHomeScreen} options={{ headerShown: false }} />

      <Tab.Screen name="Profilim" component={Profile} options={{ header: () => <Header /> }} />
    </Tab.Navigator>
  );
}

export default function App() {
  // Font yükleme geçici olarak devre dışı
  // const [fontsLoaded] = useFonts({
  //   'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  //   'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
  //   'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  //   'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="CardScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={DummyScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
          <Stack.Screen
            name="ProductDetailPage"
            component={DummyScreen}
            options={{ headerShown: true, header: () => <Header /> }}
          />
          <Stack.Screen
            name="ProfileDetails"
            component={DummyScreen}
            options={{ headerShown: true, header: () => <Header /> }}
          />
          <Stack.Screen
            name="SharedProductScreen"
            component={DummyScreen}
            options={{ headerShown: true, header: () => <Header /> }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={DummyScreen}
            options={{ headerShown: true, header: () => <Header /> }}
          />
          <Stack.Screen
            name="StepFlow"
            component={StepFlow}
            options={{ headerShown: true, header: () => <Header /> }}
          />
          <Stack.Screen
            name="AccumulationHomeScreen"
            component={AccumulationHomeScreen}
            options={{ headerShown: true, header: () => <Header /> }}
          />
          {/* Aşağıdaki stack ekranlarına artık gerek yok, Game ekranları MainTabs içinde stack altında */}
          {/* 
          <Stack.Screen
            name="GameLearn"
            component={GameLearn}
          />
          <Stack.Screen
            name="GameFirst"
            component={GameFirst}
            options={{ headerShown: true, header: () => <Header /> }}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{ headerShown: false }}
          />
          */}
          <Stack.Screen
            name="AccumulationCreate"
            component={AccumulationCreate}
            options={{ headerShown: true, header: () => <Header /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#145F14',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
