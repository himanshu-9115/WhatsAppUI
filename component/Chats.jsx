import React, { useState } from "react";
import {
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MessageCard from "./MessageCard";

const Chats = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Rahul",
      message: "Hey, how are you?",
      time: "10:30 AM",
      unread: 2,
      image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name || !message) return;

    const newChat = {
      id: Date.now().toString(),
      name,
      message,
      time: "Now",
      unread: 1,
      image: "https://i.pravatar.cc/150",
    };

    setData([newChat, ...data]);
    setName("");
    setMessage("");
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 🔹 Top Compact Input Bar */}
      <View style={styles.topBar}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.smallInput}
        />

        <TextInput
          placeholder="Message..."
          value={message}
          onChangeText={setMessage}
          style={[styles.smallInput, { flex: 1 }]}
        />

        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <MaterialIcons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* 🔹 Chat List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageCard {...item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  smallInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 6,
    fontSize: 12,
    backgroundColor: "#f9f9f9",
  },

  sendBtn: {
    backgroundColor: "#25D366",
    padding: 8,
    borderRadius: 50,
  },
});