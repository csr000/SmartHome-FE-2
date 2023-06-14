import React, { useState } from "react";
import { Block, Text } from "../components";
import Slider from "@react-native-community/slider";
import * as theme from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

export default function Ac() {
  const [direction, setDirection] = useState(45);
  const [speed, setSpeed] = useState(12);
  return (
    <Block flex={1} middle style={{ padding: 30 }}>
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
          height: Dimensions.get("window").height,
        }}
      />
      <Block column style={{ marginVertical: 20 }}>
        <Block row space="between">
          <Text welcome color={theme.colors.accent}>
            Direction
          </Text>
          <Text welcome color={theme.colors.accent}>
            {direction}
          </Text>
        </Block>
        <Slider
          value={direction}
          mininumValue={0}
          maximumValue={90}
          thumbTintColor={theme.colors.accent}
          minimumTrackTintColor={theme.colors.accent}
          maximumTrackTintColor={theme.colors.gray2}
          onValueChange={(value) => setDirection(parseInt(value, 10))}
        />
      </Block>

      <Block column style={{ marginVertical: 20 }}>
        <Block row space="between">
          <Text welcome color={theme.colors.accent}>
            Speed
          </Text>
          <Text welcome color={theme.colors.accent}>
            {speed}
          </Text>
        </Block>
        <Slider
          value={speed}
          mininumValue={0}
          maximumValue={30}
          thumbTintColor={theme.colors.accent}
          minimumTrackTintColor={theme.colors.accent}
          maximumTrackTintColor={theme.colors.gray2}
          onValueChange={(value) => setSpeed(parseInt(value, 10))}
        />
      </Block>
    </Block>
  );
}
