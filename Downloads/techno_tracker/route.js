import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton, Headline } from 'react-native-paper';

// screens
import Dashboard from './techno-pages/Dashboard';
import Profile from './techno-pages/Profile';
import Expense from './techno-pages/Expense';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false
        })}
    >
      <HomeStack.Screen name="HomeScreen" component={Dashboard} />
    </HomeStack.Navigator>
  );
}

const ExpenseStack = createNativeStackNavigator();
function ExpenseStackScreen() {
  return (
    <ExpenseStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false
        })}
    >
      <ExpenseStack.Screen name="ExpenseScreen" component={Expense} />
    </ExpenseStack.Navigator>
  );
}

const SettingStack = createNativeStackNavigator();
function SettingStackScreen() {
  return (
    <SettingStack.Navigator
    >
      <SettingStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </SettingStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false
        })}
    >
      <ProfileStack.Screen name="ProfileScreen" component={Profile} />
    </ProfileStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Expenses') {
              iconName = focused ? 'clipboard-list-outline' : 'clipboard-list-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'tools' : 'tools';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account-settings-outline' : 'account-settings-outline';
            }

            // You can return any component that you like here!
              return  <IconButton icon={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ffa726',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Expenses" component={ExpenseStackScreen} />
        <Tab.Screen name="Settings" component={SettingStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
