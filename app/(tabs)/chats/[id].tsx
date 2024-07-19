import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Bubble,
  Composer,
  ComposerProps,
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  Send,
  SendProps,
  SystemMessage,
} from "react-native-gifted-chat";
import { messagelist } from "@/assets/data/messages";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";

const Page = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setMessages([
      ...messagelist.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: { _id: message.from, name: message.from ? "You" : "Anyone" },
        };
      }),
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderSend = (props: SendProps<IMessage>) => {
    return (
      <Send {...props}>
        <View style={tw`justify-center items-center mr-2 mb-1`}>
          <Ionicons name="send" size={24} color="#075E54" />
        </View>
      </Send>
    );
  };

  const renderComposer = (props: ComposerProps) => (
    <View style={tw`flex-row items-center bg-gray-800 rounded-full flex-1`}>
      <TouchableOpacity style={tw`p-2`}>
        <Ionicons name="happy-outline" size={24} color="#757575" />
      </TouchableOpacity>
      <Composer
        {...props}
        textInputStyle={tw`flex-1 text-white ml-1`}
        placeholderTextColor="#757575"
        placeholder="Message"
      />
      <TouchableOpacity style={tw`p-2`}>
        <Ionicons name="attach-outline" size={24} color="#757575" />
      </TouchableOpacity>
      <TouchableOpacity style={tw`p-2`}>
        <MaterialIcons name="photo-camera" size={24} color="#757575" />
      </TouchableOpacity>
    </View>
  );

  const renderInputToolbar = (props: InputToolbarProps<IMessage>) => (
    <InputToolbar
      {...props}
      containerStyle={tw`border-t border-gray-200 bg-blue-800 rounded-full m-2`}
      primaryStyle={tw`flex-row items-center`}
      renderComposer={(props) => renderComposer(props)}
      renderSend={(props) => renderSend(props)}
    />
  );

  return (
    <View style={[tw`flex-1`, { backgroundColor: "#455a64" }]}>
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
        text={text}
        onInputTextChanged={(text) => setText(text)}
        renderSystemMessage={(props) => (
          <SystemMessage {...props} textStyle={tw`text-blue-500`} />
        )}
        renderBubble={(props) => {
          return <Bubble {...props} />;
        }}
        renderAvatar={null}
        maxComposerHeight={100}
        bottomOffset={insets.bottom}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
      />
    </View>
  );
};

export default Page;
