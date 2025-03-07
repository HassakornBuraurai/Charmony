// screens/SettingsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const toggleNotification = () =>
    setIsNotificationEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.logo}>Settings</Text>
      </View>

      <View style={styles.settingContainer}>
        <View style={styles.settingItem}>
          <Ionicons name="color-palette-outline" size={24} color="black" />
          <Text style={styles.settingText}>Color Theme</Text>
          <View style={styles.settingRight}>
            <Text style={styles.settingValue}>Light</Text>
            <TouchableOpacity>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.settingItem}>
          <Ionicons name="language-outline" size={24} color="black" />
          <Text style={styles.settingText}>Language</Text>
          <View style={styles.settingRight}>
            <Text style={styles.settingValue}>English</Text>
            <TouchableOpacity>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.settingText}>Notification</Text>
          <Switch
            value={isNotificationEnabled}
            onValueChange={toggleNotification}
          />
        </View>
      </View>
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
  settingContainer: { marginTop: 140, padding: 20 },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  settingText: { fontSize: 18, flex: 1, marginLeft: 10 },
  settingRight: { flexDirection: "row", alignItems: "center" },
  settingValue: { fontSize: 16, marginRight: 10, color: "gray" },
});
