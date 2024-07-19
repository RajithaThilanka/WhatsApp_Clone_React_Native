import React from "react";
import { Link, Stack } from "expo-router";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

const Layout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Chats",
          headerTitleStyle: tw`text-2xl`,
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: tw`bg-green-700`,
          headerTintColor: "#FFFFFF",
          headerSearchBarOptions: {
            placeholder: "Search",
            tintColor: "#FFFFFF",
          },
          headerRight: () => (
            <View style={tw`flex-row items-center`}>
              <Link href={"/(models)/new-chat"} asChild>
                <TouchableOpacity>
                  <Ionicons
                    name="add"
                    size={24}
                    color="#FFFFFF"
                    style={tw`mr-5`}
                  />
                </TouchableOpacity>
              </Link>
              <TouchableOpacity>
                <Ionicons
                  name="camera"
                  size={24}
                  color="#FFFFFF"
                  style={tw`mr-4`}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerTitle: () => (
            <View style={tw`flex-row w-56 items-center pb-1`}>
              <Image
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1564203599747600385/f6Lvcpcu_400x400.jpg",
                }}
                style={tw`w-10 h-10 rounded-full`}
              />
              <Text style={tw`text-base font-medium ml-2`}>
                Rajitha Thilanka
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={tw`flex-row `}>
              <TouchableOpacity>
                <Ionicons name="videocam-outline" color="#075E54" size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={tw`ml-6 `}>
                <Ionicons name="call-outline" color="#075E54" size={30} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
    </Stack>
  );
};

export default Layout;
