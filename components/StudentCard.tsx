import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes";

interface Student {
  id: string;
  name: string;
  alternateNames: string[];
  species: string;
  gender: string;
  house: string;
  houseColor: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternateActors: string[];
  alive: boolean;
  image: string;
}

interface Wand {
  wood: string;
  core: string;
  length: number;
}

export type StackNavigation = StackNavigationProp<RootStackParamList>;

const StudentCard = ({
  id,
  name,
  alternateNames,
  species,
  gender,
  house,
  houseColor,
  dateOfBirth,
  yearOfBirth,
  wizard,
  ancestry,
  eyeColour,
  hairColour,
  wand,
  patronus,
  hogwartsStudent,
  hogwartsStaff,
  actor,
  alternateActors,
  alive,
  image,
}: Student) => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity
      //   style={styles.container}
      onPress={() =>
        navigation.navigate("StudentPage", {
          id,
          name,
          alternateNames,
          species,
          gender,
          house,
          houseColor,
          dateOfBirth,
          yearOfBirth,
          wizard,
          ancestry,
          eyeColour,
          hairColour,
          wand,
          patronus,
          hogwartsStudent,
          hogwartsStaff,
          actor,
          alternateActors,
          alive,
          image,
        } as any)
      }
    >
      <ImageBackground
        source={image ? { uri: image } : require("../assets/icons/user.png")}
        style={styles.container}
        imageStyle={{ borderRadius: 20 }}
      >
        <Text style={styles.text}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontFamily: "HarryPotter",
    fontSize: 30,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 5,
    borderRadius: 20,
  },
});
