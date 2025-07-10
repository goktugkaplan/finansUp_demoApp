import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

const AccumulationCreate = ({ navigation }) => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [currentSaving, setCurrentSaving] = useState("");
    const [dailySaving, setDailySaving] = useState("");

    const handleSave = () => {
        if (!productName || !productPrice || !currentSaving || !dailySaving) {
            Alert.alert("Uyarı", "Lütfen tüm alanları doldurunuz.");
            return;
        }

        const data = {
            productName,
            productPrice: parseFloat(productPrice),
            currentSaving: parseFloat(currentSaving),
            dailySaving: parseFloat(dailySaving),
        };

        console.log("Kaydedilen Birikim:", data);

        // navigation.goBack(); // İstersen geri dönebilir
        Alert.alert("Başarılı", "Birikim kaydedildi!");
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.label}>Ürün İsmi</Text>
                <TextInput
                    style={styles.input}
                    value={productName}
                    onChangeText={setProductName}
                    placeholder="Örnek: Telefon"
                />

                <Text style={styles.label}>Ürün Fiyatı (₺)</Text>
                <TextInput
                    style={styles.input}
                    value={productPrice}
                    onChangeText={setProductPrice}
                    keyboardType="numeric"
                    placeholder="Örnek: 15000"
                />

                <Text style={styles.label}>Şu Anki Birikim (₺)</Text>
                <TextInput
                    style={styles.input}
                    value={currentSaving}
                    onChangeText={setCurrentSaving}
                    keyboardType="numeric"
                    placeholder="Örnek: 3000"
                />

                <Text style={styles.label}>Günlük Yapılacak Birikim (₺)</Text>
                <TextInput
                    style={styles.input}
                    value={dailySaving}
                    onChangeText={setDailySaving}
                    keyboardType="numeric"
                    placeholder="Örnek: 100"
                />

                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#145F14",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default AccumulationCreate;
