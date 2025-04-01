import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://everyday.codes/wp-content/uploads/2019/06/react-native-1024x631-1024x631.png",
          }}
          style={{
            height: verticalScale(350),
            width: scale(350),
            alignContent: "center",
          }}
        />
      </View>
    </SafeAreaView>
  );
}
