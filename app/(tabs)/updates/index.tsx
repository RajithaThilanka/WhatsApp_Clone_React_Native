import React from "react";
import { View, Text, ScrollView, StatusBar, Button, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import Colors from "@/constants/Colors";

const checkForUpdates = () => {
  Alert.alert("Check for Updates", "You have the latest version installed.");
};

const Page = () => {
  const currentTheme = Colors.light;
  return (
    <View style={[tw`flex-1`, { backgroundColor: currentTheme.background }]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={tw`p-5`}>
        <View style={[tw`bg-white p-5 rounded-lg mb-5`, styles.shadow]}>
          <Text
            style={[
              tw`text-2xl font-bold mb-2`,
              { color: currentTheme.tabBarActive },
            ]}
          >
            Version 1.0.1
          </Text>
          <Text style={[tw`text-base`, { color: currentTheme.tabBarInactive }]}>
            This update includes performance improvements and bug fixes.
          </Text>
        </View>
        <View style={[tw`bg-white p-5 rounded-lg mb-5`, styles.shadow]}>
          <Text
            style={[
              tw`text-2xl font-bold mb-2`,
              { color: currentTheme.tabBarActive },
            ]}
          >
            Version 1.0.0
          </Text>
          <Text style={[tw`text-base`, { color: currentTheme.tabBarInactive }]}>
            Initial release with new features including:
            {"\n"}- Feature 1{"\n"}- Feature 2{"\n"}- Feature 3
          </Text>
        </View>
        <View style={[tw`bg-white p-5 rounded-lg mb-5`, styles.shadow]}>
          <Text
            style={[
              tw`text-2xl font-bold mb-2`,
              { color: currentTheme.tabBarActive },
            ]}
          >
            Check for Updates
          </Text>
          <Button title="Check for Updates" onPress={checkForUpdates} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export default Page;
