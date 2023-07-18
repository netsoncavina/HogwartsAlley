import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Skeleton } from "@rneui/themed";
import { getStudentsByHouse } from "../../api";
import StudentCard from "../../components/StudentCard";

interface Props {
  route: any;
}

interface Student {
  id: string;
  name: string;
  alternate_names: string[];
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
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

interface Wand {
  wood: string;
  core: string;
  length: number;
}

const HouseStudents = ({ route }: Props) => {
  const { houseName } = route.params;
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  let backgroundImage = "";
  let houseColor = "";
  switch (houseName) {
    case "Gryffindor":
      backgroundImage = "https://wallpapercave.com/wp/wp10058569.jpg";
      houseColor = "#740001";
      break;
    case "Slytherin":
      backgroundImage = "https://wallpapercave.com/wp/wp11998116.jpg";
      houseColor = "#1A472A";
      break;
    case "Ravenclaw":
      backgroundImage = "https://wallpapercave.com/wp/wp11082248.jpg";
      houseColor = "#0E1A40";
      break;
    case "Hufflepuff":
      backgroundImage = "https://wallpapercave.com/wp/wp1958769.jpg";
      houseColor = "#FFD800";
      break;
    default:
      backgroundImage = "https://wallpapercave.com/wp/wp11082248.jpg";
      houseColor = "#0E1A40";
  }

  useEffect(() => {
    // setTimeout(() => {
    getStudentsByHouse(houseName).then((res) => setStudents(res));
    setLoading(false);
    // }, 500);
  }, []);
  return (
    <ImageBackground
      source={{
        uri: backgroundImage,
      }}
      style={{ height: "100%", width: "100%" }}
    >
      <ScrollView
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          backgroundColor: houseColor,
        }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text style={{ color: "black" }}>{houseName}</Text>
        <View style={styles.studentsContainer}>
          {loading
            ? Array(30)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    animation="wave"
                    width={200}
                    height={200}
                    style={{
                      height: 150,
                      width: 150,
                      // justifyContent: "flex-end",
                      // alignItems: "center",
                      borderRadius: 20,
                      margin: 10,
                      // backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                  />
                ))
            : students.map((student: Student) => (
                <StudentCard
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  alternateNames={student.alternate_names}
                  species={student.species}
                  image={student.image}
                  gender={student.gender}
                  house={student.house}
                  houseColor={houseColor}
                  dateOfBirth={student.dateOfBirth}
                  yearOfBirth={student.yearOfBirth}
                  wizard={student.wizard}
                  ancestry={student.ancestry}
                  eyeColour={student.eyeColour}
                  hairColour={student.hairColour}
                  wand={student.wand}
                  patronus={student.patronus}
                  hogwartsStudent={student.hogwartsStudent}
                  hogwartsStaff={student.hogwartsStaff}
                  actor={student.actor}
                  alternateActors={student.alternate_actors}
                  alive={student.alive}
                />
              ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HouseStudents;

const styles = StyleSheet.create({
  studentsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
