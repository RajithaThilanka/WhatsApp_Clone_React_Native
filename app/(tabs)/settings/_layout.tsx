import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerTitleStyle: {
            fontSize: 24,
          },
          headerLargeTitle: false,
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerStyle: {
            backgroundColor: "#075E54",
          },
          headerTintColor: "#FFFFFF",
        }}
      />
    </Stack>
  );
};

export default Layout;
