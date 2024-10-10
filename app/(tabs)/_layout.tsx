import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ size, color }) => <Ionicons name="search" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="message-outline" size={25} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
