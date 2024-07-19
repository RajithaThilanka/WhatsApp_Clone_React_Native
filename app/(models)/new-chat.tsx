import { Text, View } from "react-native";
import React from "react";
import { contacts } from "@/assets/data/contacts";
import { AlphabetList } from "react-native-section-alphabet-list";
import tw from "tailwind-react-native-classnames";

const NewChat = () => {
  const data = contacts?.map((contact, index) => ({
    value: `${contact.first_name} ${contact.last_name}`,
    key: `${contact.first_name} ${contact.last_name}-${index}`,
    img: contact.img,
    desc: contact.desc,
  }));

  return (
    <View style={tw`flex-1 bg-white`}>
      <AlphabetList
        data={data}
        indexLetterStyle={tw`text-blue-500 text-lg`}
        renderCustomItem={(item) => (
          <View style={tw`p-4 border-b border-gray-200`}>
            <Text style={tw`text-lg`}>{item.value}</Text>
          </View>
        )}
        renderCustomSectionHeader={(section) => (
          <View style={tw`bg-gray-100 p-2`}>
            <Text style={tw`text-gray-700 font-bold`}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NewChat;
