import { View, Text, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import tw from "tailwind-react-native-classnames";

const CELL_COUNT = 6;

const Page = () => {
  const router = useRouter();
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();

  const [code, setCode] = useState<string>("");
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === 6) {
      if (signin === "true") {
        VerifySignIn();
      } else {
        verifyCode();
        router.replace("/(tabs)/chats");
      }
    }
  }, [code]);

  const verifyCode = async () => {
    // Your verification logic here
    console.log("Verification code submitted:", code);
  };

  const VerifySignIn = async () => {
    // Your sign-in verification logic here
    console.log("Sign-in code submitted:", code);
  };

  const resendCode = async () => {
    // Your code resend logic here
    console.log("Resend code requested");
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-5`}>
      <Stack.Screen options={{ headerTitle: phone }} />
      <Text style={tw`text-center mb-5`}>
        We have sent an SMS with a code to the number above.
      </Text>
      <Text style={tw`text-center mb-5`}>
        To complete your phone number verification, please enter the 6-digit
        activation code.
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={tw`mb-5 flex-row justify-between `}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[
              tw`border-b-2 border-gray-300 mx-1`,
              isFocused && tw`border-black`,
              { width: 30, height: 40 },
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={tw`text-xl text-center`}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={resendCode} style={tw`mt-5`}>
        <Text style={tw`text-blue-500 text-lg`}>
          Didn't receive a verification code?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
