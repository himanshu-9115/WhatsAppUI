import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MessageCard from "./MessageCard";

const Status = () => {
  const data = [
    {
      id: "1",
      name: "Himanshu",
      message: "10 minutes ago",
      image: "https://images.stockcake.com/public/f/7/5/f75f029e-6482-4f73-ab8c-4969c14e968c_large/developer-explaining-code-stockcake.jpg",
    },
    {
      id: "2",
      name: "Aman",
      message: "Yesterday",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "3",
      name: "Vikash",
      message: "Today",
      image: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <View style={styles.container}>
      
      
      <MessageCard
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zg2mKrgupgyD3bFptSVIvZZXyHVOEK32ew&s"}
        name={"My Status"}
        message={"Tap to add status update"}
        unread={0}
      />

      
      <Text style={styles.sectionTitle}>Recent updates</Text>

      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageCard
            image={item.image}
            name={item.name}
            message={item.message}
            unread={0}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  sectionTitle: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 13,
    color: "gray",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  },
});