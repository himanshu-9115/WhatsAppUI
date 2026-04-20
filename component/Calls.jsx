import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Calls = () => {
  const data = [
    {
      id: "1",
      name: "Rahul",
      time: "Today, 10:30 AM",
      type: "incoming",
      mode: "audio",
      image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: "2",
      name: "Dheeraj",
      time: "Yesterday, 9:00 PM",
      type: "outgoing",
      mode: "video",
      image: "https://t3.ftcdn.net/jpg/05/40/63/14/360_F_540631446_a39tc1A3Smh7U2xbyijSEKGrx4FbJW6F.jpg",
    },
    {
      id: "3",
      name: "Amit",
      time: "Today, 7:15 AM",
      type: "missed",
      mode: "audio",
      image: "https://thumbs.dreamstime.com/b/software-developer-smiling-young-working-computer-54668839.jpg",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        
        {/* 🔹 Profile Image */}
        <Image source={{ uri: item.image }} style={styles.image} />

        {/* 🔹 Name + Call Info */}
        <View style={styles.center}>
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.row}>
            <MaterialIcons
              name={
                item.type === "incoming"
                  ? "call-received"
                  : item.type === "outgoing"
                  ? "call-made"
                  : "call-missed"
              }
              size={16}
              color={item.type === "missed" ? "red" : "green"}
            />
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>

        {/* 🔹 Call Type Icon */}
        <MaterialIcons
          name={item.mode === "video" ? "videocam" : "call"}
          size={24}
          color="#075E54"
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  center: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  time: {
    fontSize: 13,
    color: "gray",
    marginLeft: 5,
  },
});