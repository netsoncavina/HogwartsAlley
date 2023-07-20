import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import {
  GryffindorBG,
  SlytherinBG,
  HufflepuffBG,
  RavenclawBG,
  StaffBG,
} from "../../utils/utils";
interface Props {
  route: any;
}

const infoNotAvailable = (info: string) => {
  if (info === "" || info === undefined || info === null) {
    return "N/A";
  } else {
    return info;
  }
};

const StudentPage = ({ route }: Props) => {
  const {
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
  } = route.params;

  let backgroundImage;
  switch (house) {
    case "Gryffindor":
      backgroundImage = GryffindorBG;

      break;
    case "Slytherin":
      backgroundImage = SlytherinBG;

      break;
    case "Ravenclaw":
      backgroundImage = RavenclawBG;

      break;
    case "Hufflepuff":
      backgroundImage = HufflepuffBG;

      break;
    default:
      backgroundImage = StaffBG;
  }
  return (
    // <View style={[styles.container, { backgroundColor: houseColor }]}>
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {image === "" ? (
            <Animatable.Image
              animation="flipInY"
              duration={1500}
              delay={300}
              source={require("../../assets/icons/user.png")}
              style={{
                height: 150,
                width: 150,
              }}
            />
          ) : (
            <Animatable.Image
              animation="flipInY"
              duration={1500}
              delay={300}
              source={{ uri: image }}
              style={styles.image}
            />
          )}
          <Animatable.Text animation="fadeIn" delay={1500} style={styles.name}>
            {name}
          </Animatable.Text>
        </View>
        <View style={styles.midContainer}>
          <Animatable.View
            animation="fadeInLeft"
            delay={1500}
            style={styles.subContainer}
          >
            {alternateNames.length > 0 ? (
              <Text style={styles.text}>
                Alternate names: {alternateNames.join(", ")}
              </Text>
            ) : null}

            <Text style={styles.text}>
              Current age : {yearOfBirth ? 2023 - yearOfBirth : "N/A"}
            </Text>
            <Text style={styles.text}>House: {house}</Text>
            <Text style={styles.text}>
              Ancestry: {infoNotAvailable(ancestry)}
            </Text>

            <Text style={styles.text}>
              Eye color: {infoNotAvailable(eyeColour)}
            </Text>
            <Text style={styles.text}>
              Hair color: {infoNotAvailable(hairColour)}
            </Text>
          </Animatable.View>
          <Animatable.View
            animation="fadeInRight"
            delay={1500}
            style={styles.subContainer}
          >
            <Text style={styles.text}>
              Date of Birth : {infoNotAvailable(dateOfBirth)}
            </Text>
            {alive ? (
              <Text style={styles.text}>
                Status:
                <Text style={{ color: "green" }}> Alive</Text>
              </Text>
            ) : (
              <Text style={styles.text}>
                Status:
                <Text style={{ color: "red" }}> Deceased</Text>
              </Text>
            )}
            <Text style={styles.text}>Species: {species}</Text>
            <Text style={styles.text}>
              Patronus: {infoNotAvailable(patronus)}
            </Text>
            {wand.length > 0 ? (
              <Text style={styles.text}>
                Wand: {wand.wood}, {wand.core}, {wand.length}"
              </Text>
            ) : null}
            {alternateActors.length > 0 ? (
              <Text style={styles.text}>
                Played by: {infoNotAvailable(actor)},
                {alternateActors.join(", ")}
              </Text>
            ) : (
              <Text style={styles.text}>
                Played by: {infoNotAvailable(actor)}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StudentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  topContainer: {
    flex: 0.25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  midContainer: {
    flex: 0.75,
    justifyContent: "center",
    flexDirection: "row",
  },
  subContainer: {
    flex: 0.5,
    margin: 10,
    justifyContent: "center",
    height: "90%",
    borderRadius: 30,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  name: {
    width: "100%",
    padding: 5,
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    fontFamily: "HarryPotter",
    fontSize: 30,
    color: "white",
    borderRadius: 30,
  },
  text: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "white",
    margin: 2,
  },
});
