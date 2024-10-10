import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { Picker } from "@react-native-picker/picker";
import { defaultStyles } from "@/constants/Styles";

const countries = [
  { label: "United States", value: "US" },
  { label: "Canada", value: "CA" },
  { label: "United Kingdom", value: "UK" },
  { label: "Australia", value: "AU" },
  { label: "Nigeria", value: "NG" },
  // Add more countries as needed
];

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>(); // Initial value undefined for placeholder
  const [isFocused, setIsFocused] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true)
  const borderAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(borderAnimation, {
      toValue: isFocused,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  const borderTranslateY = borderAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 60], // Adjusted the output range for more visible sliding
  });

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={defaultStyles.container}>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Text
            style={{ fontSize: 24, fontFamily: "mono-sb", marginBottom: 20 }}
          >
            Log in or sign up to Airbnb
          </Text>

          <View style={styles.inputContainer}>
            <Animated.View
              style={[
                styles.borderBottom,
                {
                  transform: [{ translateY: borderTranslateY }],
                },
              ]}
            />

            <View style={{ flexDirection: "column" }}>
              <Picker
                selectedValue={country}
                onValueChange={(itemValue:any) => {
                  setCountry(itemValue);
                  setIsFocused(0); // Focus on country picker
                  setDisabled(true);
              
                }}
                style={styles.inputnumber}
                onFocus={() => setIsFocused(0)} // Trigger focus state
                onBlur={() => setIsFocused(0)} // Reset focus state on blur
              >
                
                {countries.map((country) => (
                  <Picker.Item
                    key={country.value}
                    label={country.label}
                    value={country.value}
                    
                  />
                ))}
              </Picker>
            </View>

            <TextInput
              style={styles.inputnumber}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              onFocus={() =>{
                setIsFocused(1)
                setDisabled(true)
              }
              }
              selectTextOnFocus={!disabled}
            />
          </View>

          <Text style={styles.confirm}>
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </Text>

          <TouchableOpacity>
            <CustomButton title="Continue" />
          </TouchableOpacity>

          <View style={styles.orcontainer}>
            <View style={styles.orline} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.orline} />
          </View>

          <TouchableOpacity style={styles.social}>
            <Ionicons name="mail" size={30} color="#007BFF" />
            <Text style={styles.socialtext}>Continue with Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.social}>
            <Ionicons name="logo-facebook" size={30} color="#1877F2" />
            <Text style={styles.socialtext}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.social}>
            <Ionicons name="logo-google" size={30} color="#DB4437" />
            <Text style={styles.socialtext}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.social}>
            <Ionicons name="logo-apple" size={30} color="#000" />
            <Text style={styles.socialtext}>Continue with Apple</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  picker: {
    flexDirection: "row",
    width: "100%",
  },
  country: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 0,
  },
  inputnumber: {
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "100%",
    height: 60,
  },
  hiddenInput: {
    opacity: 1,
    height: 60,
  },
  confirm:{
    marginVertical:20,
  },
  orcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  orline: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
  },
  social: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#000",
    marginVertical: 10,
    alignItems: "center",
    gap: 40,
    padding: 10,
    borderRadius: 10,
  },
  socialtext: {
    fontSize: 17,
    fontFamily: "mono-b",
  },
  borderBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 60, // Same as input height
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
    pointerEvents: "none", // This allows touches to pass through to the inputs
  },
});

export default Login;
