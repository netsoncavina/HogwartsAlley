import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import { useFonts } from "expo-font";

export type StackNavigation = StackNavigationProp<RootStackParamList>;
export default function Home() {
  const [loaded] = useFonts({
    HarryPotter: require("../../assets/fonts/HarryPotter.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/logos/background.jpg")}
        style={{ height: "100%", width: "100%", position: "absolute" }}
        imageStyle={{ opacity: 0.2, backgroundColor: "black" }}
      />
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={500}
          animation="flipInY"
          duration={2000}
          source={require("../../assets/logos/hogwarts-logo.png")}
          style={{ height: 400 }}
          resizeMode="contain"
        />
        <Animatable.Text delay={1500} animation="fadeInUp" style={styles.text}>
          Welcome to
        </Animatable.Text>
        <Animatable.Text delay={1650} animation="fadeInUp" style={styles.text}>
          Hogwarts
        </Animatable.Text>
        <Animatable.Text delay={1800} animation="fadeInUp" style={styles.text}>
          Alley
        </Animatable.Text>
      </View>
      <Animatable.View
        delay={2000}
        animation="fadeInUp"
        style={styles.buttonContainer}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HouseSelection")}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    // flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 110,
  },

  text: {
    fontFamily: "HarryPotter",
    fontSize: 70,
    color: "#fdfdfd",
    textAlign: "center",
  },
  buttonContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 100,
  },

  button: {
    backgroundColor: "#1b1b1b",
    width: 300,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fdfdfd",
    fontWeight: "bold",
  },
});
