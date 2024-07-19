import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import MaskInput from "react-native-mask-input";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter();

  const sendOtp = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/verify/${phoneNumber}`);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#25D366" />
          <Text style={{ marginTop: 20, fontSize: 18 }}>Loading...</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#6c757d",
                }}
              >
                WhatsApp will need to verify your account. Carrier charges may
                apply.
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 10,
                padding: 20,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                Enter Your Phone Number
              </Text>
              <MaskInput
                style={{
                  height: 40,
                  borderColor: "#ced4da",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginBottom: 20,
                  fontSize: 16,
                }}
                value={phoneNumber}
                onChangeText={(masked, unmasked) => {
                  setPhoneNumber(masked);
                }}
                mask={[
                  "(",
                  /\d/,
                  /\d/,
                  ")",
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                keyboardType="numeric"
                placeholder="+94 Your Number"
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#6c757d",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              You must be at least 16 years old to register. Learn how WhatsApp
              works with the Meta Companies.
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              onPress={sendOtp}
              style={{
                backgroundColor: phoneNumber ? "#25D366" : "#A5D6A7",
                padding: 15,
                borderRadius: 5,
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
              disabled={!phoneNumber || loading}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default Page;
