import axios from "axios";

export const getStudentsByHouse = async (house: string) => {
  const { data } = await axios.get(
    `https://hp-api.onrender.com/api/characters/house/${house}`
  );
  return data;
};

export const getStaff = async () => {
  const { data } = await axios.get(
    `https://hp-api.onrender.com/api/characters/staff`
  );
  return data;
};
