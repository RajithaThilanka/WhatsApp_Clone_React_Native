import React from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Page = () => {
  const currentTheme = Colors.light;

  return (
    <View style={[tw`flex-1`, { backgroundColor: currentTheme.background }]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={tw`p-5`}>
        <TouchableOpacity
          style={[
            tw`bg-white p-5 rounded-lg mb-5 flex-row items-center`,
            styles.shadow,
          ]}
        >
          <MaterialIcons
            name="account-circle"
            size={24}
            color={currentTheme.tabBarActive}
          />
          <Text
            style={[
              tw`text-2xl font-bold ml-3`,
              { color: currentTheme.tabBarActive },
            ]}
          >
            Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-white p-5 rounded-lg mb-5 flex-row items-center`,
            styles.shadow,
          ]}
        >
          <MaterialIcons
            name="notifications"
            size={24}
            color={currentTheme.tabBarActive}
          />
          <Text
            style={[
              tw`text-2xl font-bold ml-3`,
              { color: currentTheme.tabBarActive },
            ]}
          >
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-white p-5 rounded-lg mb-5 flex-row items-center`,
            styles.shadow,
          ]}
        >
          <MaterialIcons
            name="lock"
            size={24}
            color={currentTheme.tabBarActive}
          />
          <Text
            style={[
              tw`text-2xl font-bold ml-3`,
              { color: currentTheme.tabBarActive },
            ]}
          >
            Privacy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`bg-white p-5 rounded-lg mb-5 flex-row items-center`,
            styles.shadow,
          ]}
        >
          <MaterialIcons
            name="support"
            size={24}
            color={currentTheme.tabBarActive}
          />
          <Text
            style={[
              tw`text-2xl font-bold ml-3`,
              { color: currentTheme.tabBarActive },
            ]}
          >
            Support
          </Text>
        </TouchableOpacity>
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
