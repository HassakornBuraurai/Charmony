// screens/MatchColorScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MatchColorScreen() {
  const looks = [
    {
      title: "Look 1",
      colors: ["#FF5733", "#FFC300", "#C70039"],
      names: ["แดง", "ส้ม", "เขียว"],
      descriptions: ["ช่วยเสริมด้านความมั่นใจและพลังงานบวก"],
    },
    {
      title: "Look 2",
      colors: ["#33FF57", "#28A745", "#85C1E9"],
      names: ["เขียวอ่อน", "เขียวเข้ม", "ฟ้า"],
      descriptions: ["ช่วยเสริมด้านสุขภาพและความสงบในจิตใจ"],
    },
    {
      title: "Look 3",
      colors: ["#3357FF", "#6C5CE7", "#A29BFE"],
      names: ["น้ำเงิน", "ม่วงเข้ม", "ม่วงอ่อน"],
      descriptions: ["ช่วยเสริมด้านความคิดสร้างสรรค์และแรงบันดาลใจ"],
    },
    {
      title: "Look 4",
      colors: ["#FF33F6", "#E91E63", "#F06292"],
      names: ["ชมพูสด", "ชมพูเข้ม", "ชมพูอ่อน"],
      descriptions: ["ช่วยเสริมด้านความรักและเสน่ห์ส่วนตัว"],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.dateText}>วันจันทร์ 3 มีนาคม 2025</Text>
        <View style={styles.colorContainer}>
          {looks.map((look, index) => (
            <View key={index} style={styles.colorSection}>
              <Text style={styles.sectionTitle}>{look.title}</Text>
              <View style={styles.colorBoxContainer}>
                {look.colors.map((color, idx) => (
                  <View
                    key={idx}
                    style={[styles.colorBox, { backgroundColor: color }]}
                  >
                    <Text style={styles.colorName}>{look.names[idx]}</Text>
                  </View>
                ))}
              </View>
              {look.descriptions.map((desc, idx) => (
                <Text key={idx} style={styles.description}>
                  {desc}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  mainContent: { marginTop: 140, padding: 20, backgroundColor: "#fff" },
  dateText: { fontSize: 20, fontWeight: "bold" },
  colorContainer: { marginTop: 20 },
  colorSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  colorBoxContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  colorBox: {
    flex: 1,
    height: 60,
    borderRadius: 8,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  colorName: { color: "white", fontWeight: "bold" },
  description: { fontSize: 14, color: "gray", textAlign: "left", marginTop: 5 },
});
