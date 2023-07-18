import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";
import * as Animatable from "react-native-animatable";

interface Props {
  houseName: string;
  image?: string;
  fadeInDirection?: "Left" | "Right";
}
export type StackNavigation = StackNavigationProp<RootStackParamList>;

const HouseCard = ({ houseName, image, fadeInDirection }: Props) => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("HouseStudents", { houseName: houseName } as any)
      }
    >
      <Animatable.View
        animation={fadeInDirection ? `fadeIn${fadeInDirection}` : "fadeIn"}
        duration={1500}
        delay={500}
        style={styles.container}
      >
        {houseName !== "Staff" ? (
          <ImageBackground
            source={{ uri: image }}
            style={{ height: "100%", width: "100%", position: "absolute" }}
            imageStyle={{ opacity: 0.5, backgroundColor: "black" }}
          />
        ) : (
          <ImageBackground
            source={require("../assets/logos/hogwarts-logo.png")}
            style={{ height: "100%", width: "100%", position: "absolute" }}
            imageStyle={{ opacity: 0.7, backgroundColor: "black" }}
          />
        )}
        <Text style={styles.cardText}>{houseName}</Text>
      </Animatable.View>
    </TouchableOpacity>
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
    fontSize: 50,
    color: "white",
    marginRight: 20,
  },
});
