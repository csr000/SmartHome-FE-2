import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { LineChart, Path } from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as theme from "../theme";
import { Block, Text } from "../components";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";


function Dashboard({ navigation, route }) {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "Ibarra Real Nova": {
        uri: require("../assets/fonts/IbarraRealNova-Medium.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    setFontsLoaded(true);
  };
  loadFonts();
  const settings = route.params;
  const LightIcon = settings["light"].icon;
  const ACIcon = settings["ac"].icon;
  const TempIcon = settings["wifi"].icon;
  const FanIcon = settings["fan"].icon;

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.dashboard}>
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
      <Block column style={{ marginVertical: 40, paddingHorizontal: 20 }}>
        <Text welcome>
          Hello,{" "}
          <Text name color={"#fff"}>
            John Doe.
          </Text>
        </Text>
      </Block>

      <Block row style={{ paddingHorizontal: 20 }}>
        <Block flex={1.5} row style={{ alignItems: "flex-end" }}>
          <Text h1 color={"accent"} style={{ fontFamily: "Ibarra Real Nova" }}>
            34
          </Text>
          <Text
            h1
            color={theme.colors.accent}
            size={30}
            height={80}
            weight="600"
            spacing={0.1}
          >
            °C
          </Text>
        </Block>
        <Block flex={1} column>
          <Text caption>Humidity</Text>
          <LineChart
            yMax={100}
            yMin={0}
            data={[0, 20, 25, 15, 20, 55, 60]}
            style={{ flex: 0.8 }}
            curve={shape.curveNatural}
            svg={{ stroke: theme.colors.accent, strokeWidth: 3 }}
          />
        </Block>
      </Block>
      <Block column space="between">
        <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Light", { name: "light" })}
          >
            <Block center middle style={styles.button}>
              <LightIcon size={38} />
              <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                {settings["light"].name}
              </Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Ac", { name: "ac" })}
          >
            <Block center middle style={styles.button}>
              <ACIcon size={38} />
              <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                {settings["ac"].name}
              </Text>
            </Block>
          </TouchableOpacity>
        </Block>

        <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Wifi", { name: "wifi" })}
          >
            <Block center middle style={styles.button}>
              <TempIcon size={38} />
              <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                {settings["wifi"].name}
              </Text>
            </Block>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Ac", { name: "fan" })}
          >
            <Block center middle style={styles.button}>
              <FanIcon size={38} />
              <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                {settings["fan"].name}
              </Text>
            </Block>
          </TouchableOpacity>
        </Block>

        <Block
          row
          space="around"
          style={{ marginVertical: theme.sizes.base }}
        ></Block>
      </Block>
      {/* </ScrollView> */}
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: 20,
    paddingTop: "20%",
  },
  buttons: {
    flex: 1,
  },
  button: {
    backgroundColor: theme.colors.button,
    color: theme.colors.white,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
