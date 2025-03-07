// screens/DetailColorScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DetailColorScreen() {
  const navigation = useNavigation();

  const colorsOfTheDay = [
    {
      color: "#FF5733",
      name: "แดง",
      description: "ช่วยเสริมด้านความมั่นใจและพลังงานบวก",
    },
    {
      color: "#FFC300",
      name: "ส้ม",
      description: "ช่วยเสริมด้านความคิดสร้างสรรค์และโชคลาภ",
    },
    {
      color: "#C70039",
      name: "ชมพูเข้ม",
      description: "ช่วยเสริมด้านความรักและเสน่ห์ส่วนตัว",
    },
    {
      color: "#33FF57",
      name: "เขียวอ่อน",
      description: "ช่วยเสริมด้านสุขภาพและความสงบในจิตใจ",
    },
    {
      color: "#3357FF",
      name: "น้ำเงิน",
      description: "ช่วยเสริมด้านสติปัญญาและความเฉลียวฉลาด",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.logo}>Detail Color</Text>
      </View>
      <ScrollView
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.colorContainer}>
          {colorsOfTheDay.map((item, index) => (
            <View key={index} style={styles.colorSection}>
              <View style={[styles.colorBox, { backgroundColor: item.color }]}>
                <Text style={styles.colorName}>{item.name}</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 120,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: { position: "absolute", left: 10, top: 50, padding: 10 },
  logo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  mainContent: { marginTop: 140, padding: 20, backgroundColor: "#fff" },
  colorContainer: { marginTop: 20 },
  colorSection: { marginBottom: 20, alignItems: "center" },
  colorBox: {
    width: "90%",
    height: 80,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  colorName: { color: "white", fontWeight: "bold", fontSize: 18 },
  description: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginTop: 5,
  },
});
