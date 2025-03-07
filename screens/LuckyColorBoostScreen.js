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
import { useNavigation } from "@react-navigation/native"; // <-- Use this for navigation

export default function LuckyColorBoostScreen() {
  const navigation = useNavigation(); // <-- Use navigation hook

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.logo}>🎨 Lucky Colors Boost</Text>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.dateText}>วันจันทร์ 3 มีนาคม 2025</Text>
        <View style={styles.colorContainer}>
          {[
            {
              title: "Career",
              icon: "briefcase",
              color: "blue",
              description:
                "สีน้ำเงินช่วยเสริมความมั่นใจและความน่าเชื่อถือในหน้าที่การงาน",
            },
            {
              title: "Finance & Wealth",
              icon: "cash",
              color: "green",
              description: "สีเขียวช่วยเสริมโชคลาภและความมั่นคงทางการเงิน",
            },
            {
              title: "Luck & Fortune",
              icon: "star",
              color: "yellow",
              description: "สีเหลืองช่วยเสริมโชคดีและโอกาสในชีวิต",
            },
            {
              title: "Charm & Relationships",
              icon: "heart",
              color: "pink",
              description: "สีชมพูช่วยเสริมเสน่ห์และความสัมพันธ์ที่ดี",
            },
          ].map((item, index) => (
            <View key={index} style={styles.colorSection}>
              <View style={styles.colorHeader}>
                <Ionicons name={item.icon} size={24} color="black" />
                <Text style={styles.sectionTitle}>{item.title}</Text>
              </View>
              <View style={[styles.colorBox, { backgroundColor: item.color }]}>
                <Text style={styles.colorText}>{item.color}</Text>
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
    height: 150,
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
  dateText: { fontSize: 20, fontWeight: "bold" },
  colorContainer: { marginTop: 20 },
  colorSection: { marginBottom: 20 },
  colorHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 10 },
  colorBox: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  colorText: { color: "white", fontWeight: "bold" },
  description: { fontSize: 14, color: "gray" },
});
