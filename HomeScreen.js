import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Platform } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
    const progress = 0.42; // %42
    const radius = 30;
    const strokeWidth = 5;
    const circumference = 2 * Math.PI * radius;
    const progressStroke = circumference * (1 - progress);

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Üst Profil */}
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                            }}
                            style={styles.avatar}
                        />
                        <View>
                            <Text style={styles.greeting}>Hoş geldin,</Text>
                            <Text style={styles.name}>Melike!</Text>
                        </View>
                    </View>
                    <Ionicons name="star" size={24} color="#f1c40f" />
                </View>

                {/* Görevler ve Progress */}
                <View style={styles.rowContainer}>
                    <View style={styles.progressContainer}>
                        <View style={styles.circleWrapper}>
                            <View style={styles.circleBackground}>
                                <View style={styles.circleFill} />
                            </View>
                            <Text style={styles.progressText}>42%</Text>
                        </View>

                        <Text style={styles.subText}>3/7 görev tamamlandı</Text>
                    </View>



                    <View style={styles.tasksContainer}>
                        <Text style={styles.tasksTitle}>Bugünkü Görevlerin</Text>
                        <View style={styles.taskItem}>
                            <Ionicons name="checkmark-circle" size={16} color="#2ecc71" />
                            <Text style={styles.taskText}>Bir finansal terim öğren</Text>
                        </View>
                        <View style={styles.taskItem}>
                            <Ionicons name="checkmark-circle" size={16} color="#2ecc71" />
                            <Text style={styles.taskText}>Harcama kategorilerini belirle</Text>
                        </View>
                        <View style={styles.taskItem}>
                            <Ionicons name="ellipse-outline" size={16} color="#bdc3c7" />
                            <Text style={styles.taskText}>
                                Mini yatırım simülasyonunu tamamla
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Bilgi Kutuları */}
                <View style={styles.infoBox}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name="info" size={20} color="#2980b9" />
                        <Text style={styles.infoTitle}>Günün Finansal Bilgisi</Text>
                    </View>
                    <Text style={styles.infoSubtitle}>Bileşik Faiz Nedir?</Text>
                    <Text style={styles.infoDescription}>
                        Küçük birikimler zamanla büyür!
                    </Text>
                </View>

                <View style={[styles.infoBox, { backgroundColor: "#f5e6f7" }]}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name="quiz" size={20} color="#8e44ad" />
                        <Text style={[styles.infoTitle, { color: "#8e44ad" }]}>
                            Mini Quiz
                        </Text>
                    </View>
                    <Text style={styles.infoSubtitle}>Bugünün sorusunu çöz!</Text>
                </View>

                <View style={[styles.infoBox, { backgroundColor: "#f9e79f" }]}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <FontAwesome name="trophy" size={20} color="#d35400" />
                        <Text style={[styles.infoTitle, { color: "#d35400" }]}>
                            Rozetler
                        </Text>
                    </View>
                    <Text style={styles.infoSubtitle}>
                        İlk yatırım simülasyonunu tamamladın
                    </Text>
                </View>

                <View style={[styles.infoBox, { backgroundColor: "#d5f5e3" }]}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name="local-gas-station" size={20} color="#27ae60" />
                        <Text style={[styles.infoTitle, { color: "#27ae60" }]}>
                            Bugün en çok nereye harcadın?
                        </Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    profile: { flexDirection: "row", alignItems: "center" },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
    greeting: { fontSize: 14, color: "#7f8c8d" },
    name: { fontSize: 16, fontWeight: "bold" },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    progressContainer: {
        alignItems: "center",
        marginRight: 16,
    },

    circleWrapper: {
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },

    circleBackground: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 5,
        borderColor: "#ecf0f1",
        justifyContent: "center",
        alignItems: "center",
    },

    circleFill: {
        position: "absolute",
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 5,
        borderColor: "#3498db",
        borderRightColor: "transparent", // progress efekti gibi
        borderBottomColor: "transparent",
        transform: [{ rotate: "-45deg" }],
    },

    progressText: {
        position: "absolute",
        fontSize: 12,
        fontWeight: "bold",
        color: "#3498db",
    },

    subText: {
        fontSize: 10,
        color: "#7f8c8d",
        marginTop: 4,
    },

    tasksContainer: { flex: 1 },
    tasksTitle: { fontWeight: "bold", marginBottom: 8 },
    taskItem: { flexDirection: "row", alignItems: "center", marginVertical: 2 },
    taskText: { marginLeft: 4, fontSize: 13 },
    infoBox: {
        backgroundColor: "#eaf2f8",
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    infoTitle: { fontWeight: "bold", marginLeft: 4 },
    infoSubtitle: { fontSize: 14, fontWeight: "bold", marginTop: 4 },
    infoDescription: { fontSize: 12, color: "#7f8c8d" },
});
