import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getLearningContentForLesson } from '../data/lessonData';
import { Platform, StatusBar } from 'react-native';

const LearningScreen = ({ navigation, route }) => {
    const { lessonId, lessonIndex } = route.params;
    const lessonData = getLearningContentForLesson(lessonId);

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
            <View style={styles.iconContainer}>
                <Ionicons name={lessonData.icon} size={80} color="#4facfe" />
            </View>

            <View style={styles.sections}>
                {lessonData.sections.map((section, index) => (
                    <View key={index} style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name={section.icon} size={24} color="#4facfe" />
                            <Text style={styles.sectionTitle}>{section.title}</Text>
                        </View>
                        <Text style={styles.sectionContent}>{section.content}</Text>
                        {section.points && (
                            <View style={styles.pointsList}>
                                {section.points.map((point, pointIndex) => (
                                    <View key={pointIndex} style={styles.pointItem}>
                                        <Ionicons name="checkmark" size={16} color="#28a745" />
                                        <Text style={styles.pointText}>{point}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </View>

            <View style={styles.tipsContainer}>
                <View style={styles.tipsHeader}>
                    <Ionicons name="bulb" size={24} color="#1976d2" />
                    <Text style={styles.tipsTitle}>Önemli İpuçları</Text>
                </View>
                {lessonData.tips.map((tip, index) => (
                    <View key={index} style={styles.tipItem}>
                        <Text style={styles.tipTitle}>{tip.title}</Text>
                        <Text style={styles.tipContent}>{tip.content}</Text>
                    </View>
                ))}
            </View>

            {/* Buton artık ScrollView içinde, en altta yer alacak */}
            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.startQuizButton}
                    onPress={() => navigation.navigate('Quiz', { lessonId, lessonIndex })}
                >
                    <Ionicons name="play" size={20} color="white" />
                    <Text style={styles.startQuizButtonText}>Quiz'e Başla</Text>
                </TouchableOpacity>
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
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    backButtonText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#666',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    sections: {
        marginBottom: 30,
    },
    section: {
        backgroundColor: '#f8f9fa',
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#4facfe',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginLeft: 10,
    },
    sectionContent: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 15,
    },
    pointsList: {
        marginTop: 10,
    },
    pointItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    pointText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 10,
        lineHeight: 20,
    },
    tipsContainer: {
        backgroundColor: '#e3f2fd',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
    },
    tipsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    tipsTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1976d2',
        marginLeft: 10,
    },
    tipItem: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#ffd700',
    },
    tipTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    tipContent: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    actions: {
        padding: 20,
        paddingBottom: Platform.OS === 'android' ? 40 : 20,  // Android için biraz daha fazla boşluk
    },
    startQuizButton: {
        backgroundColor: '#4facfe',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startQuizButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
});

export default LearningScreen; 