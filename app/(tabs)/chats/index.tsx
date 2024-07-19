import { ScrollView } from "react-native";
import React from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { chats } from "@/assets/data/chat";
import ChatRow from "@/components/chat-row";
import tw from "tailwind-react-native-classnames";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Page = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={tw`pb-10`}
          style={[tw`flex-1`, { backgroundColor: "#171717" }]}
        >
          <FlatList
            scrollEnabled={false}
            data={chats}
            renderItem={({ item }) => (
              <ChatRow
                id={item.id}
                from={item.from}
                date={item.date}
                img={item.img}
                msg={item.msg}
                read={item.read}
                unreadCount={item.unreadCount}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Page;
