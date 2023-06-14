import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Block, Text } from "../components";
import { Dimensions, Switch } from "react-native";
import * as theme from "../theme";
export default function Wifi() {
  const [wifi, setWifi] = useState(0);
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
          height: Dimensions.get("window").height,
        }}
      />
      {/* toggle switch */}
      <Block center>
        <Text welcome color={theme.colors.accent}>
          ON/OFF
        </Text>
        <Switch
          value={wifi}
          onValueChange={(value) => setWifi(value)}
          trackColor={{ false: theme.colors.gray2, true: theme.colors.button }}
          thumbColor={theme.colors.accent}
        />
      </Block>
    </Block>
  );
}
