import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import Colors from "@/constants/Colors";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";


const LoginProfile = () => {
  console.log('LoginProfile component is rendering'); // Debuggi
  return (

     <GestureHandlerRootView style={{flex:1}}>
       <SafeAreaView style={{flex:1}}>
       <ScrollView style={defaultStyles.container}>
        <View>
          <Text style={styles.header}>Your profile</Text>
          <Text style={styles.textp}>
            Log in to start planning your next trip
          </Text>
        </View>

        <CustomButton title="Log in" handlePress={() => router.push("/(modals)/login")} />
        <View style={styles.textc}>
          <Text style={styles.textsc}>
            {" "}
            Don't have an account ? <Link href="/(modals)/login" style={{textDecorationLine:"underline", fontFamily:"mono-sb"}}>Sign up </Link>
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.touch}>
            <View style={styles.stouch}>
              <Ionicons name="settings-outline" size={25}color="#000" />
              <Text style={styles.ttouch}>Settings</Text>
            </View>
            <MaterialCommunityIcons
              name="greater-than"
              size={25}
              color="#000"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <View style={styles.stouch}>
            <MaterialIcons name="app-settings-alt" size={25}color="#000" />
              <Text style={styles.ttouch}>Accessibility</Text>
            </View>
            <MaterialCommunityIcons
              name="greater-than"
              size={25}
              color="#000"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <View style={styles.stouch}>
            <FontAwesome6 name="house-signal" size={25} color="black" />
              <Text style={styles.ttouch}>Learn about hosting</Text>
            </View>
            <MaterialCommunityIcons
              name="greater-than"
              size={25}
              color="#000"
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.touch}>
            <View style={styles.stouch}>
            <MaterialIcons name="help-outline" size={25} color="#000" />
              <Text style={styles.ttouch}>Get Help</Text>
            </View>
            <MaterialCommunityIcons
              name="greater-than"
              size={25}
              color="#000"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <View style={styles.stouch}>
            <MaterialCommunityIcons name="book-open-outline" size={25} color="#000" />
              <Text style={styles.ttouch}>Terms of Service</Text>
            </View>
            <MaterialCommunityIcons
              name="greater-than"
              size={25}
              color="#000"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <View style={styles.stouch}>
            <MaterialCommunityIcons name="book-open-outline" size={25} color="#000" />
              <Text style={styles.ttouch}>Privacy Policy</Text>
            </View>
            <MaterialCommunityIcons
              name="greater-than"
              size={25}
              color="#000"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <View style={styles.stouch}>
            <MaterialCommunityIcons name="book-open-outline" size={25} color="#000" />
              <Text style={styles.ttouch}>Open source licenses</Text>
            </View>
            <MaterialCommunityIcons
              name="greater-than"
              size={25}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
       </SafeAreaView>
     </GestureHandlerRootView>
    
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    marginVertical: 10,
    
    fontFamily: "mono-sb",
  },
  textp: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "mono-sb",
    color: Colors.grey,
  },
  textc: {
    marginVertical: 20,
    fontSize: 20,
  },
  textsc: {
  
    fontSize: 16,
  },
  touch: {
    width: "100%",
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  stouch: {
    flexDirection: "row",
    gap: 20,
    justifyContent:"center",
    alignItems:"center",
  },
  ttouch: {
    fontSize: 16,
    color: "#000",
  },
});

export default LoginProfile;
