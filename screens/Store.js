import React from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";  // navigation importu

const { width } = Dimensions.get("window");
const cardWidth = width * 0.8;
const cardSpacing = 15;

const Card = ({ title, price, items, backgroundColor, buttonLabel, buttonColor }) => (
    <View style={[styles.card, { backgroundColor }]}>
        {/* Plan başlığı */}
        <Text style={styles.cardTitle}>{title}</Text>

        {/* Fiyat */}
        <Text style={styles.cardPrice}>{price}</Text>

        {/* Özel buton */}
        <TouchableOpacity
            style={[styles.cardButton, { backgroundColor: buttonColor }]}
            onPress={() => alert(`${title} planına tıklandı!`)}
        >
            <Text style={styles.cardButtonText}>{buttonLabel}</Text>
        </TouchableOpacity>

        {/* Altında maddeler */}
        <View style={styles.itemList}>
            {items.map((item, index) => (
                <Text key={index} style={styles.itemText}>• {item}</Text>
            ))}
        </View>
    </View>
);

export default function ManualCards() {
    const navigation = useNavigation();  // navigation objesi

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={cardWidth + cardSpacing}
                decelerationRate="fast"
                contentContainerStyle={{
                    paddingHorizontal: (width - cardWidth) / 2,
                }}
            >
                <Card
                    title="Temel"
                    price="0₺ aylık"
                    items={["Günlük finansal görevler", "Topluluk genel erişimi ( her zaman herkese açık)", "Haftalık finans ipuçları", "Sınırlı oyunlaştırılmış görev ödülleri", "Temel eğitim modülleri"]}
                    backgroundColor="white"
                    buttonLabel="Mevcut Planın"
                    buttonColor="#68A0D9"
                />
                <Card
                    title="Standart"
                    price="29₺ aylık"
                    items={["Temel paket özelliklerinin tamamı", "Teknik analiz eğitimleri", "İleri seviye finansal eğitim sözlüğü", "Bireysel danışmanlık paketleri (ayda 1)", "Haftalık video eğitim serileri", "Finansal ilerleme rozetleri / başarı sertifikaları"]}
                    backgroundColor="lightblue"
                    buttonLabel="Standart Paketi Al"
                    buttonColor="#4CAF50"
                />
                <Card
                    title="Premium"
                    price="59₺ aylık"
                    items={["Standart paket özelliklerinin tamamı", "Geçmiş yatırım verileri ile yatırım simülatörü", "İleri seviye yatırım, emeklilik ve tasarruf modülleri ?", "Özel canlı seminerlere ücretsiz katılım"]}
                    backgroundColor="lightgreen"
                    buttonLabel="Premium Paketi Al"
                    buttonColor="#F9A825"
                />
                <Card
                    title="VIP"
                    price="99₺ aylık"
                    items={["Premium paket özelliklerinin tamamı", "Finansal koç / uzmanla aylık birebir online görüşme (30-60 dk)", "VIP müşteri destek hattı (öncelikli destek)", "Canlı verilerle yatırım portföyü simülasyınları", "Gerçek finans uzmanlarının özel eğitim atölyelerine ücretsiz katılım", "Finansal kurumlarda indirim ve ayrıcalıklı tekliflere erişim (anlaşmalı partnerlerle)"]}
                    backgroundColor="lightcoral"
                    buttonLabel="VIP Paketi Al"
                    buttonColor="#E91E63"
                />
            </ScrollView>

            {/* Dokunulabilir Metin */}
            <TouchableOpacity onPress={() => navigation.navigate("Lesson")}>
                <Text style={{ fontSize: 18, marginTop: -50, color: "#007AFF" }}>
                    Mevcut Plan İle Devam Et
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20 },
    card: {
        width: cardWidth,
        borderRadius: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: cardSpacing / 2,
        paddingVertical: 20,
        shadowColor: "white",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        height: 500,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 15,
    },
    cardPrice: {
        fontSize: 20,
        color: "#333",
        marginTop: 10,
    },
    cardButton: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    cardButtonText: {
        color: "white",
        fontSize: 16,
    },
    itemList: {
        marginTop: 20,
        paddingHorizontal: 20,
        width: "100%",
    },
    itemText: {
        fontSize: 16,
        color: "#333",
        marginVertical: 4,
    },
});
