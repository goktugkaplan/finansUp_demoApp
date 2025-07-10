import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

const GoalCard = ({ title, amountSaved, totalAmount, daysLeft, color }) => {
    const progress = amountSaved / totalAmount;
    const textColor = color === "#FFF5CC" ? "#555" : "#fff";

    return (
        <View style={[styles.card, { backgroundColor: color }]}>
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>

            <View style={styles.row}>
                <Text style={[styles.label, { color: textColor }]}>Toplanan Miktar</Text>
                <Text style={[styles.percent, { color: textColor }]}>{Math.round(progress * 100)}%</Text>
            </View>

            <Progress.Bar
                progress={progress}
                width={null}
                height={6}
                color="#222"
                unfilledColor="rgba(255,255,255,0.4)"
                borderWidth={0}
                style={styles.progress}
            />

            <View style={styles.row}>
                <Text style={[styles.amount, { color: textColor }]}>
                    {totalAmount.toLocaleString("tr-TR")} TL'den {amountSaved.toLocaleString("tr-TR")} TL biriktirildi
                </Text>
                <Text style={[styles.daysLeft, { color: textColor }]}>
                    {daysLeft}
                </Text>
            </View>

            <TouchableOpacity>
                <Text style={[styles.link, { color: textColor }]}>Detayları Gör</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
    },
    label: {
        fontSize: 14,
    },
    percent: {
        fontSize: 14,
        fontWeight: "bold",
    },
    progress: {
        marginBottom: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    amount: {
        fontSize: 13,
        flex: 1,
    },
    daysLeft: {
        fontSize: 13,
        marginLeft: 8,
        textAlign: "right",
        minWidth: 80, // Gerekirse sabit genişlik verilebilir
    },
    link: {
        fontSize: 14,
        fontWeight: "600",
        textDecorationLine: "underline",
    },
});

export default GoalCard;
