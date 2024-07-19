import React from "react";
import { Tabs, useSegments } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
  const currentTheme = Colors.light;
  const segments = useSegments();
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: currentTheme.background }}
    >
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: currentTheme.tabBarBackground },
          tabBarActiveTintColor: currentTheme.tabBarActive,
          tabBarInactiveTintColor: currentTheme.tabBarInactive,
          headerTitleAlign: "center",
        }}
      >
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="chat" color={color} size={size} />
            ),
            tabBarStyle: {
              display: segments[2] === "[id]" ? "none" : "flex",
               backgroundColor: '#171717',
            },
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="call" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="update" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;
