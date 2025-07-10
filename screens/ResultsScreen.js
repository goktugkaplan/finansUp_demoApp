import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultsScreen = ({ navigation, route }) => {
    const { correctAnswers, totalQuestions, accuracy, lessonId, lessonIndex } = route.params;

    useEffect(() => {
        updateStageStatus();
    }, []);

    const updateStageStatus = async () => {
        try {
            console.log('ResultsScreen - Aşama güncelleniyor, lessonIndex:', lessonIndex);

            // Mevcut durumu al
            const saved = await AsyncStorage.getItem('financialStageStatus');
            let stageStatus = saved ? JSON.parse(saved) : [true, false, false, false, false, false];

            console.log('ResultsScreen - Mevcut durum:', stageStatus);

            // Bir sonraki aşamayı aç (eğer son aşama değilse)
            if (lessonIndex < stageStatus.length - 1) {
                stageStatus[lessonIndex + 1] = true;
                console.log('ResultsScreen - Yeni durum:', stageStatus);

                // AsyncStorage'a kaydet
                await AsyncStorage.setItem('financialStageStatus', JSON.stringify(stageStatus));
                console.log('ResultsScreen - Durum kaydedildi');
            }
        } catch (error) {
            console.error('ResultsScreen - Aşama güncellenirken hata:', error);
        }
    };

    const getResultsMessage = () => {
        if (accuracy >= 80) {
            return {
                title: "Mükemmel! 🎉",
                message: "Bu aşamayı çok iyi anladın. Sonraki aşamayı açtın!"
            };
        } else if (accuracy >= 60) {
            return {
                title: "İyi İş! 👍",
                message: "Güzel bir başlangıç yaptın. Sonraki aşamayı açtın!"
            };
        } else {
            return {
                title: "Başarılı!",
                message: "Aşamayı başarıyla tamamladın. Sonraki aşamayı açtın!"
            };
        }
    };

    const resultsMessage = getResultsMessage();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="trophy" size={80} color="#ffd700" />
                        </View>
                        <Text style={styles.title}>Aşama Tamamlandı!</Text>
                    </View>

                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{correctAnswers}/{totalQuestions}</Text>
                            <Text style={styles.statLabel}>Doğru Cevap</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{totalQuestions - correctAnswers}</Text>
                            <Text style={styles.statLabel}>Yanlış</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>{accuracy}%</Text>
                            <Text style={styles.statLabel}>Doğruluk</Text>
                        </View>
                    </View>

                    <View style={styles.messageContainer}>
                        <Text style={styles.messageTitle}>{resultsMessage.title}</Text>
                        <Text style={styles.messageText}>{resultsMessage.message}</Text>
                    </View>

                    <View style={styles.actionsContainer}>
                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={() => navigation.navigate('Lesson')}
                        >
                            <Ionicons name="arrow-forward" size={20} color="white" />
                            <Text style={styles.nextButtonText}>Aşamalara Dön</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    iconContainer: {
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    statItem: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4facfe',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
        textAlign: 'center',
    },
    messageContainer: {
        backgroundColor: '#e3f2fd',
        borderRadius: 12,
        padding: 20,
        marginBottom: 30,
        width: '100%',
    },
    messageTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1976d2',
        marginBottom: 10,
        textAlign: 'center',
    },
    messageText: {
        fontSize: 16,
        color: '#424242',
        lineHeight: 24,
        textAlign: 'center',
    },
    actionsContainer: {
        flexDirection: 'row',
        gap: 15,
        width: '100%',
        justifyContent: 'center',
    },
    nextButton: {
        flex: 1,
        backgroundColor: '#4facfe',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
});

export default ResultsScreen; 