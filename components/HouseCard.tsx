import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

interface Props {
  houseName: string;
  image?: string;
}

const HouseCard = ({ houseName, image }: Props) => {
  //   const [loaded] = useFonts({
  //     HarryPotter: require("../assets/fonts/HarryPotter.ttf"),
  //   });

  //   if (!loaded) {
  //     return null;
  //   }

  return (
    <View style={styles.container}>
      {houseName !== "Staff" ? (
        <ImageBackground
          source={{ uri: image }}
          style={{ height: "100%", width: "100%", position: "absolute" }}
          imageStyle={{ opacity: 0.3, backgroundColor: "black" }}
        />
      ) : (
        <ImageBackground
          source={require("../assets/logos/hogwarts-logo.png")}
          style={{ height: "100%", width: "100%", position: "absolute" }}
          imageStyle={{ opacity: 0.3, backgroundColor: "black" }}
        />
      )}
      <Text style={styles.cardText}>{houseName}</Text>
    </View>
  );
};

export default HouseCard;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 7,
    width: Dimensions.get("window").width,
    margin: 5,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  cardText: {
    fontFamily: "HarryPotter",
    fontSize: 40,
    color: "white",
    marginRight: 20,
  },
});
