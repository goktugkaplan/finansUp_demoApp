import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['white', 'white']} style={styles.background}>
                <View style={styles.content}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="school" size={60} color="#4facfe" />
                    </View>

                    <Text style={styles.title}>
                        Finansal Okuryazarlık Yolculuğuna Hoş Geldin!
                    </Text>

                    <Text style={styles.description}>
                        Mikro görevlerle finansal bilincini artır, güvenli yatırım öğren ve sağlıklı harcama alışkanlıkları kazan.
                    </Text>

                    <View style={styles.featureGrid}>
                        <View style={styles.featureCard}>
                            <Ionicons name="bulb" size={30} color="#4facfe" />
                            <Text style={styles.featureTitle}>Farkındalık Artır</Text>
                            <Text style={styles.featureText}>Mikro görevlerle bilincini geliştir</Text>
                        </View>

                        <View style={styles.featureCard}>
                            <Ionicons name="shield-checkmark" size={30} color="#4facfe" />
                            <Text style={styles.featureTitle}>Güvenli Yatırım</Text>
                            <Text style={styles.featureText}>Basit yatırım bilgileri öğren</Text>
                        </View>

                        <View style={styles.featureCard}>
                            <Ionicons name="people" size={30} color="#4facfe" />
                            <Text style={styles.featureTitle}>Topluluk Desteği</Text>
                            <Text style={styles.featureText}>Doğru bilgi paylaşımı ile öğren</Text>
                        </View>

                        <View style={styles.featureCard}>
                            <Ionicons name="game-controller" size={30} color="#4facfe" />
                            <Text style={styles.featureTitle}>Oyunlaştırılmış Öğrenme</Text>
                            <Text style={styles.featureText}>Eğlenceli aktivitelerle eğitim</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={() => navigation.navigate('Store')}
                    >
                        <Ionicons name="play" size={20} color="white" />
                        <Text style={styles.startButtonText}>Oyuna Başla</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    background: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        lineHeight: 26,
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 20,
    },
    featureGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    featureCard: {
        width: '47%',
        backgroundColor: '#f8f9fa',
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 10,
    },
    featureTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginTop: 6,
        textAlign: 'center',
    },
    featureText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    startButton: {
        backgroundColor: '#4facfe',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
    },
    startButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default WelcomeScreen;
