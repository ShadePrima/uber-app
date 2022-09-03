import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={require("../assets/Uber_logo.png")}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
