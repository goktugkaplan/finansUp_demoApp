import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    StatusBar,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const getStatusBarHeight = () => {
    return Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44;
};

const Header = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const paddingTop = getStatusBarHeight();

    const isHomeScreen = route.name === "HomeScreen";
    const isAccumulation = route.name === "Birikimlerim";
    const isGameFirst = route.name === "GameFirst";
    const isAccumulationCreate = route.name === "AccumulationCreate";
    const isProfile = route.name === "Profilim";

    const getFinancialTitle = () => {
        switch (route.name) {
            case "Welcome": return "";
            case "Lesson": return "Aşamaları Seç";
            case "Learning": return route.params?.lessonTitle || "Ders";
            case "Quiz": return "Quiz";
            case "Results": return "Sonuçlar";
            case "Store" : return "Paket Seçimi";
            default: return "";
        }
    };

    const getFinancialBackAction = () => {
        switch (route.name) {
            case "Welcome": return null;
            case "Lesson": return () => navigation.navigate("Welcome");
            case "Learning": return () => navigation.navigate("Lesson");
            case "Quiz": return () => navigation.goBack();
            case "Results": return () => navigation.navigate("Lesson");
            case "Store": return () => navigation.goBack();
            default: return () => navigation.goBack();
        }
    };

    const showBackButton = route.name !== "Welcome" && getFinancialBackAction();

    return (
        <View style={[styles.safeArea, { paddingTop }]}>
            <View style={styles.container}>
                {["Welcome", "Lesson", "Learning", "Quiz", "Results", "Store"].includes(route.name) ? (
                    <>
                        {route.name === "Welcome" ? (
                            <View style={styles.backButton}>
                                <Image
                                    source={require("../../assets/logo-white.png")}
                                    style={styles.logo}
                                />
                            </View>
                        ) : (
                            showBackButton && (
                                <TouchableOpacity
                                    onPress={getFinancialBackAction()}
                                    style={styles.backButton}
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <Ionicons name="arrow-back" size={28} color="white" />
                                </TouchableOpacity>
                            )
                        )}

                        <Text style={styles.title}>{getFinancialTitle()}</Text>
                    </>
                ) : (
                    <>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backButton}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            {(isGameFirst || isAccumulationCreate) ? (
                                <Ionicons name="arrow-back" size={28} color="white" />
                            ) : (
                                <Image
                                    source={require("../../assets/logo-white.png")}
                                    style={styles.logo}
                                />
                            )}
                        </TouchableOpacity>

                        <Text style={styles.title}>
                            {isHomeScreen ? "" :
                                isAccumulation ? "Birikimlerim" :
                                    isAccumulationCreate ? "Yeni Birikim" : isProfile ? "Profilim" :"" }
                        </Text>

                        {isAccumulation && (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("AccumulationCreate")}
                                style={styles.plusButton}
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            >
                                <Ionicons name="add" size={28} color="white" />
                            </TouchableOpacity>
                        )}
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#145F14",
    },
    container: {
        minHeight: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#145F14",
        elevation: 0,
        position: "relative",
    },
    backButton: {
        position: "absolute",
        left: 10,
        justifyContent: "center",
        height: "100%",
        paddingVertical: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    plusButton: {
        position: "absolute",
        right: 10,
        justifyContent: "center",
        height: "100%",
        paddingVertical: 5,
    },
});

export default Header;
