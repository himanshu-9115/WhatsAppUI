import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import Chats from "./Chats";
import Status from "./Status";
import Calls from "./Calls";

const Main = () => {
  const [currentPage, setCurrentPage] = useState("chat");

  const ActivePage = () => {
    switch (currentPage) {
      case "chat":
        return <Chats />;
      case "status":
        return <Status />;
      case "calls":
        return <Calls />;
      default:
        return <Chats />;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.icon}>
            <Feather name="search" size={22} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <MaterialIcons name="more-vert" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.topBarContainer}>
        {["chat", "status", "calls"].map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setCurrentPage(item)}
              style={[
                styles.topBarButton,
                item === currentPage && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.topBarText,
                  item === currentPage && styles.activeText,
                ]}
              >
                {item.toUpperCase()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.content}>{ActivePage()}</View>

    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

header: {
  backgroundColor: "#075E54",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 10,
  paddingHorizontal: 15,
},

 headerText: {
  color: "#fff",
  fontSize: 22, 
  fontWeight: "bold",
},

  headerIcons: {
    flexDirection: "row",
  },

  icon: {
    marginLeft: 18,
  },

  topBarContainer: {
    flexDirection: "row",
    backgroundColor: "#075E54",
  },

  topBarButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderColor: "transparent",
  },

 topBarText: {
  color: "#B2DFDB",
  fontSize: 16, 
  fontWeight: "600",
},
  activeTab: {
    borderBottomColor: "#fff",
  },

  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
});