import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Link } from "expo-router";

const Page = () => {
  const openLink = () => {
    // Add your link handling logic here
  };

  return (
    <View style={tw`flex-1 bg-white justify-center items-center p-5`}>
      <Image
        source={require("@/assets/images/welcome.png")}
        style={[{ width: 200, height: 200, marginBottom: 20 }]}
      />
      <Text style={tw`text-black text-xl font-bold text-center`}>
        Welcome to WhatsApp Clone
      </Text>
      <Text style={tw`text-black text-center mt-4`}>
        Read our{" "}
        <Text style={tw`text-blue-500`} onPress={openLink}>
          Privacy Policy
        </Text>
        .{' Tap "Agree & Continue" to accept the '}
        <Text style={tw`text-blue-500`} onPress={openLink}>
          Terms of Service
        </Text>
        .
      </Text>

      <Link href={"/otp"} replace asChild>
        <TouchableOpacity>
          <Text style={tw`text-center text-blue-500 text-xl font-bold mt-8`}>
            Agree & Continue
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;
