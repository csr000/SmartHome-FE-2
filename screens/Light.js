import React from "react";
import { Block, PanSlider } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
export default function Light() {
  return (
    <Block flex={1} center middle>
         <LinearGradient
        // Background Linear Gradient
        colors={["#6b4273", "#2f2653"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get('window').height,
        }}
      />
      <PanSlider />
    </Block>
  );
}
