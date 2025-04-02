import { hp, wp } from "@/lib/utils";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}></View>
      {/* Main */}
      <View style={styles.main}>
        <View style={styles.section1}></View>
        <View style={styles.section2}>
          <Text style={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ullam dignissimos inventore, repellat tempore dolorum error unde et
            at eos.
          </Text>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: hp(100),
    flex: 1,
    gap: 4,
  },
  header: {
    // height: hp(15),
    flex: 1,
    backgroundColor: "tomato",
  },
  main: {
    // height: hp(70),
    flex: 4,
    // flexDirection: "row",
    gap: 4,
  },
  section1: {
    // width: wp(50),
    flex: 3,
    backgroundColor: "orange",
  },
  section2: {
    // width: wp(50),
    flex: 1,
    backgroundColor: "skyblue",
  },
  footer: {
    // height: hp(15),
    flex: 1,
    backgroundColor: "lightgreen",
  },
  content: {
    fontSize: hp(2),
  },
});
