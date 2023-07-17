import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import HouseCard from "../../components/HouseCard";

// const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", "Staff"];
const houses = [
  {
    name: "Gryffindor",
    image:
      "https://wallpapers.com/images/high/gryffindor-emblem-in-strip-line-raqo20208vymv5p9.webp",
  },
  {
    name: "Slytherin",
    image: "https://images.alphacoders.com/123/1233950.jpg",
  },
  {
    name: "Hufflepuff",
    image: "https://images3.alphacoders.com/123/1233951.jpg",
  },
  {
    name: "Ravenclaw",
    image: "https://images5.alphacoders.com/123/1233952.jpg",
  },
  {
    name: "Staff",
  },
];

const HouseSelection = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/logos/background.jpg")}
        style={{ height: "100%", width: "100%", position: "absolute" }}
        imageStyle={{ opacity: 0.2, backgroundColor: "black" }}
      />

      {houses.map((house, idx) => (
        <HouseCard key={idx} houseName={house.name} image={house.image} />
      ))}
    </View>
  );
};

export default HouseSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
