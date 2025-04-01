import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
// For dynamic values for all screens
import { scale, verticalScale } from "react-native-size-matters";

const responsive = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const margin = 80;
  const marginSide = margin / 2;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
          <View
            style={[styles.box, { width: screenWidth - marginSide }]}
          ></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  box: {
    marginTop: 20,
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "lightblue",
    borderWidth: 1,
  },
});

export default responsive;
