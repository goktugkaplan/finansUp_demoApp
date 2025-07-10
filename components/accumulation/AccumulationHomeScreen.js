import React from "react";
import { ScrollView, View } from "react-native";
import GoalCard from "./GoalCard";

export default function AccumulationHomeScreen() {
    return (
        <ScrollView>
            <GoalCard
                title="Iphone 13 Mini"
                amountSaved={9600}
                totalAmount={22368}
                daysLeft="14 gün kaldı"
                color="#EA5A47"
            />
            <GoalCard
                title="Macbook Pro M1"
                amountSaved={35000}
                totalAmount={50000}
                daysLeft="30 gün kaldı"
                color="#E885A4"
            />
            <GoalCard
                title="Araba"
                amountSaved={200000}
                totalAmount={4500000}
                daysLeft="6 yıl kaldı"
                color="#FFF5CC"
            />
        </ScrollView>
    );
}
