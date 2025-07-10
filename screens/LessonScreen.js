import React, { useState } from 'react';
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
import { useFocusEffect } from '@react-navigation/native';

const STAGE_COUNT = 6;

const LessonScreen = ({ navigation }) => {
    const [stageStatus, setStageStatus] = useState(Array(STAGE_COUNT).fill(false));

    const loadStageStatus = async () => {
        try {
            const saved = await AsyncStorage.getItem('financialStageStatus');
            console.log('LessonScreen - Kaydedilmiş durum:', saved);

            if (saved) {
                const parsedStatus = JSON.parse(saved);
                console.log('LessonScreen - Parse edilmiş durum:', parsedStatus);
                setStageStatus(parsedStatus);
            } else {
                const initialStatus = [true, false, false, false, false, false];
                console.log('LessonScreen - İlk durum oluşturuldu:', initialStatus);
                setStageStatus(initialStatus);
                await AsyncStorage.setItem('financialStageStatus', JSON.stringify(initialStatus));
            }
        } catch (error) {
            console.error('LessonScreen - Durum yüklenirken hata:', error);
            const initialStatus = [true, false, false, false, false, false];
            setStageStatus(initialStatus);
        }
    };

    const resetStages = async () => {
        try {
            await AsyncStorage.removeItem('financialStageStatus');
            const initialStatus = [true, false, false, false, false, false];
            setStageStatus(initialStatus);
            await AsyncStorage.setItem('financialStageStatus', JSON.stringify(initialStatus));
            console.log('Aşamalar sıfırlandı');
        } catch (error) {
            console.error('Sıfırlama hatası:', error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            loadStageStatus();
        }, [])
    );

    const stages = [
        { id: 1, icon: 'wallet', lockedIcon: 'lock-closed', title: 'Aşama 1: Tasarruf Temelleri' },
        { id: 2, icon: 'trending-up', lockedIcon: 'lock-closed', title: 'Aşama 2: Yatırım ABC\'si' },
        { id: 3, icon: 'card', lockedIcon: 'lock-closed', title: 'Aşama 3: Bütçe Yönetimi' },
        { id: 4, icon: 'analytics', lockedIcon: 'lock-closed', title: 'Aşama 4: Gelişmiş Yatırım' },
        { id: 5, icon: 'time', lockedIcon: 'lock-closed', title: 'Aşama 5: Emeklilik Planlaması' },
        { id: 6, icon: 'shield-checkmark', lockedIcon: 'lock-closed', title: 'Aşama 6: Vergi ve Sigorta' },
    ];

    const handleStagePress = (stage, index) => {
        console.log('Aşama tıklandı:', stage.title, 'İndeks:', index, 'Açık mı:', stageStatus[index]);
        if (stageStatus[index]) {
            navigation.navigate('Learning', { lessonId: stage.id, lessonIndex: index });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Başlık ve sıfırlama */}
            <TouchableOpacity onPress={resetStages} style={styles.resetButton}>
                <Ionicons name="refresh" size={24} color="#4facfe" />
            </TouchableOpacity>

            <ScrollView style={styles.content}>
                <View style={styles.stageGrid}>
                    {stages.map((stage, index) => (
                        <View key={stage.id} style={styles.stagePath}>
                            <TouchableOpacity
                                style={[
                                    styles.stageCard,
                                    !stageStatus[index] && styles.stageCardLocked,
                                    stageStatus[index] && styles.stageCardActive
                                ]}
                                onPress={() => handleStagePress(stage, index)}
                                disabled={!stageStatus[index]}
                            >
                                <Ionicons
                                    name={stageStatus[index] ? stage.icon : stage.lockedIcon}
                                    size={40}
                                    color={stageStatus[index] ? '#4facfe' : '#bbb'}
                                />
                            </TouchableOpacity>
                            {index < stages.length - 1 && (
                                <View style={styles.pathLine} />
                            )}
                        </View>
                    ))}
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    resetButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resetText: {
        marginLeft: 5,
        color: '#4facfe',
        fontSize: 14,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    stageGrid: {
        alignItems: 'center',
    },
    stagePath: {
        alignItems: 'center',
        marginBottom: 30,
    },
    stageCard: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#4facfe',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    stageCardLocked: {
        borderColor: '#e9ecef',
        backgroundColor: '#f0f0f0',
        opacity: 0.6,
    },
    stageCardActive: {
        borderColor: '#4facfe',
        backgroundColor: '#fff',
    },
    pathLine: {
        width: 4,
        height: 30,
        backgroundColor: '#4facfe',
        borderRadius: 2,
        marginTop: 10,
    },
});

export default LessonScreen;
