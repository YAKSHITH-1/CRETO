import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '@/consonants/theme';
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarActiveTintColor:COLORS.tertiary,
        tabBarInactiveTintColor:COLORS.grey,
        tabBarStyle: {
          backgroundColor:"black",
          borderTopWidth:0,
          position:'absolute',
          elevation: 0,
          height: 40,
          paddingBottom: 8,
        }
    }}
    >
       <Tabs.Screen name='index' 
         options={{
        tabBarIcon: ({size,color}) => <Ionicons name="home" size={size} color={color} ></Ionicons>
         }}  
          />
        <Tabs.Screen name='bookmark' 
         options={{
            tabBarIcon: ({size,color}) => <Ionicons name="bookmarks" size={size}color={color}></Ionicons>
             }}   /> 
       <Tabs.Screen name='create'
        options={{
            tabBarIcon: ({size,color}) => <Ionicons name="add-circle" size={size} color={COLORS.tertiary}></Ionicons>
             }}   /> 

        <Tabs.Screen name='notifications'
          options={{
            tabBarIcon: ({size,color}) => <Ionicons name="heart" size={size}color={color} ></Ionicons>
             }}   /> 

       <Tabs.Screen name='profile'
         options={{
            tabBarIcon: ({size,color}) => <Ionicons name="person-circle" size={size}color={color}></Ionicons>
             }}   /> 

    </Tabs>
  );
}