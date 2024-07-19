import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { Link } from "expo-router";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export interface ChatRowProps {
  id: string;
  from: string;
  date: string;
  img: string;
  msg: string;
  read: boolean;
  unreadCount: number;
}

const ChatRow: React.FC<ChatRowProps> = ({
  from,
  date,
  img,
  msg,
  read,
  unreadCount,
  id,
}) => {
  const renderRightActions = () => {
    const rowHeight = 90;

    return (
      <View style={tw`flex-row`}>
        <TouchableHighlight
          style={[
            tw`bg-red-500 justify-center items-center w-20`,
            { height: rowHeight },
          ]}
        >
          <View style={tw`items-center`}>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
            <Text style={tw`text-white`}>More</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[
            tw`bg-blue-500 justify-center items-center w-20`,
            { height: rowHeight },
          ]}
        >
          <View style={tw`items-center`}>
            <Ionicons name="archive-outline" size={24} color="white" />
            <Text style={tw`text-white`}>Archive</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Link href={`/(tabs)/chats/${id}`} asChild>
        <TouchableHighlight>
          <View style={[tw`flex-row items-center p-4`, { height: 70 }]}>
            <Avatar rounded source={{ uri: img }} size="medium" />
            <View style={tw`ml-4 flex-1`}>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-lg font-bold text-white`}>{from}</Text>
                <Text style={tw`text-gray-500 text-xs`}>
                  {new Date(date).toLocaleTimeString()}
                </Text>
              </View>
              <Text style={tw`text-gray-500 mt-1`} numberOfLines={1}>
                {msg}
              </Text>
            </View>
            {!read && unreadCount > 0 && (
              <View style={tw`bg-red-500 rounded-full px-2 py-1 ml-2`}>
                <Text style={tw`text-white text-xs`}>{unreadCount}</Text>
              </View>
            )}
          </View>
        </TouchableHighlight>
      </Link>
    </Swipeable>
  );
};

export default ChatRow;
