import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const MessageCard = ({ image, name, message, time, unread }) => {
  return (
    <TouchableOpacity style={styles.button}>
      
      {/* 🔹 Left: Profile Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* 🔹 Middle */}
      <View style={styles.centerContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>

      {/* 🔹 Right */}
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{time}</Text>

        {unread > 0 && (
          <View style={styles.messageCountContainer}>
            <Text style={styles.messageCount}>{unread}</Text>
          </View>
        )}
      </View>

    </TouchableOpacity>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  centerContainer: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  message: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },

  rightContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 50,
  },

  time: {
    fontSize: 12,
    color: "gray",
  },

  messageCountContainer: {
    backgroundColor: "#25D366",
    borderRadius: 10,
    minWidth: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginTop: 5,
  },

  messageCount: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});