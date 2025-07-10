import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("contact@risksiz.com");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (!username.trim() || !password.trim()) {
            Alert.alert("Hata", "Kullanıcı adı ve şifre alanları boş bırakılamaz!");
            return;
        }

        // Basit doğrulama - gerçek uygulamada API çağrısı yapılır
        if (username === "contact@risksiz.com" && password === "123456") {
            Alert.alert("Başarılı", "Giriş başarılı!", [
                {
                    text: "Tamam",
                    onPress: () => navigation.navigate("MainTabs")
                }
            ]);
        } else {
            Alert.alert("Hata", "Kullanıcı adı veya şifre hatalı!");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.container}>
                    <Image source={require('../../assets/finansUp_transparan_siyah.png')} style={styles.logo} resizeMode="contain" />

                    <Text style={styles.subtitle}>
                        <Text style={styles.boldText}>Hoş geldin!{"\n"}</Text>
                        Küçük görevlerle büyük değişimler sizi bekliyor.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Kullanıcı Adı"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                        defaultValue="contact@risksiz.com"
                    />

                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Şifre"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
                            <Feather
                                name={showPassword ? "eye" : "eye-off"}
                                size={20}
                                color="#ccc"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Şifremi Unuttum?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Giriş Yap</Text>
                    </TouchableOpacity>

                    <View style={styles.separatorContainer}>
                        <View style={styles.separator} />
                        <Text style={styles.or}>veya</Text>
                        <View style={styles.separator} />
                    </View>

                    <TouchableOpacity style={styles.socialButton}>
                        <AntDesign name="apple1" size={20} color="black" />
                        <Text style={styles.socialButtonText}>Login with Apple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <AntDesign name="google" size={20} color="black" />
                        <Text style={styles.socialButtonText}>Login with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.signUpText}>
                            Hesabınız Yok Mu? <Text style={styles.signUpLink}>Üye Ol</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 50,
        justifyContent: "center",
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "left",
        color: "#000000",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        fontSize: 14,
    },
    passwordContainer: {
        position: "relative",
        justifyContent: "center",
    },
    iconContainer: {
        position: "absolute",
        right: 10,
        top: 14,
    },
    icon: {
        // Icon styling is handled by the TouchableOpacity container
    },
    forgotPassword: {
        textAlign: "right",
        color: "#007bff",
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: "#4a7aff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    loginButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    separatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },
    or: {
        marginHorizontal: 10,
        color: "#666",
    },
    socialButton: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 14,
    },
    signUpText: {
        textAlign: "center",
        marginTop: 10,
        color: "#666",
    },
    signUpLink: {
        color: "#007bff",
        fontWeight: "bold",
    },
    boldText: {
        fontWeight: "bold",
        color: "#000",
        textAlign: 'left',
        fontSize: 20
    },
});