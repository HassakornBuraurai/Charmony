// screens/HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [warningVisible, setWarningVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={warningVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.warningText}>คำเตือน: นี่คือแอพสีมงคล</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setWarningVisible(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.headerBar}>
        <Text style={styles.logo}>🎨 Lucky Colors</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.dateText}>วันจันทร์ 3 มีนาคม 2025</Text>
        <View style={styles.weekContainer}>
          {["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"].map((day, index) => (
            <View key={index} style={styles.dayBox}>
              <Text style={styles.dayText}>{day}</Text>
              <Text style={styles.dayText}>{index + 3}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  warningText: { fontSize: 18, marginBottom: 10 },
  closeButton: { position: "absolute", top: 10, right: 10 },
  headerBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    paddingLeft: 20,
  },
  logo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  mainContent: {
    flex: 1,
    marginTop: 120,
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  dateText: { fontSize: 18, fontWeight: "bold" },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10,
  },
  dayBox: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
    alignItems: "center",
  },
  dayText: { fontSize: 16 },
});
