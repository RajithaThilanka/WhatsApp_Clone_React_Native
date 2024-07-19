import React from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { CallItemProps } from "../prop-types.types";

const Page = () => {
  const currentTheme = Colors.light;

  return (
    <View style={[tw`flex-1`, { backgroundColor: currentTheme.background }]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={tw`p-5`}>
        <CallItem
          name="John Doe"
          callType="incoming"
          time="Yesterday"
          avatar="https://via.placeholder.com/50"
          currentTheme={currentTheme}
        />
        <CallItem
          name="Jane Smith"
          callType="outgoing"
          time="2 days ago"
          avatar="https://via.placeholder.com/50"
          currentTheme={currentTheme}
        />
        <CallItem
          name="Alice Johnson"
          callType="missed"
          time="3 days ago"
          avatar="https://via.placeholder.com/50"
          currentTheme={currentTheme}
        />
      </ScrollView>
    </View>
  );
};

const CallItem: React.FC<CallItemProps> = ({
  name,
  callType,
  time,
  avatar,
  currentTheme,
}) => (
  <TouchableOpacity
    style={[
      tw`bg-white p-5 rounded-lg mb-5 flex-row items-center`,
      styles.shadow,
    ]}
  >
    <Image source={{ uri: avatar }} style={tw`w-12 h-12 rounded-full`} />
    <View style={tw`ml-3 flex-1`}>
      <Text
        style={[tw`text-lg font-bold`, { color: currentTheme.tabBarActive }]}
      >
        {name}
      </Text>
      <View style={tw`flex-row items-center`}>
        {callType === "incoming" && (
          <MaterialIcons name="call-received" size={16} color="green" />
        )}
        {callType === "outgoing" && (
          <MaterialIcons name="call-made" size={16} color="blue" />
        )}
        {callType === "missed" && (
          <MaterialIcons name="call-missed" size={16} color="red" />
        )}
        <Text
          style={[tw`text-base ml-2`, { color: currentTheme.tabBarInactive }]}
        >
          {time}
        </Text>
      </View>
    </View>
    <MaterialIcons name="info" size={24} color={currentTheme.tabBarActive} />
  </TouchableOpacity>
);

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
