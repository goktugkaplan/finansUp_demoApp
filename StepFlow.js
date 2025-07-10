import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const steps = [
    { title: 'Bütçe Nedir?', status: 'active' },
    { title: 'Gelir - Gider Girişi', status: 'completed' },
    { title: '', status: 'locked' },
    { title: '', status: 'locked' },
];

export default function StepPath() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kişisel Finansın Temelleri</Text>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: '50%' }]} />
                </View>
                <Text style={styles.progressText}>2/4</Text>
            </View>

            {/* Adımlar */}
            {steps.map((step, index) => (
                <View
                    key={index}
                    style={[
                        styles.stepContainer,
                        { alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                    ]}
                >
                    {/* Noktalar */}
                    {index !== 0 && (
                        <View style={styles.dotsColumn}>
                            {Array(6).fill(0).map((_, i) => (
                                <View key={i} style={styles.dot} />
                            ))}
                        </View>
                    )}

                    {/* Kutucuk */}
                    <TouchableOpacity
                        style={[
                            styles.stepBox,
                            index % 2 === 0 ? styles.leftBox : styles.rightBox,
                        ]}
                        disabled={step.status === 'locked'}
                    >
                        {step.status === 'active' && (
                            <FontAwesome name="play-circle" size={22} color="green" />
                        )}
                        {step.status === 'completed' && (
                            <MaterialIcons name="menu-book" size={22} color="green" />
                        )}
                        {step.status === 'locked' && (
                            <FontAwesome name="lock" size={22} color="gray" />
                        )}
                        {step.title !== '' && (
                            <Text style={styles.stepText}>{step.title}</Text>
                        )}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    progressContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    progressBar: {
        width: 200,
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressFill: {
        height: 10,
        backgroundColor: '#4CAF50',
    },
    progressText: {
        marginTop: 4,
        fontSize: 12,
        color: '#444',
    },
    stepContainer: {
        marginVertical: 10,
    },
    dotsColumn: {
        alignSelf: 'center',
        marginVertical: 8,
    },
    dot: {
        width: 6,
        height: 6,
        backgroundColor: '#FFD700',
        borderRadius: 3,
        marginVertical: 3,
    },
    stepBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 12,
        borderRadius: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    stepText: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '500',
    },
    leftBox: {
        alignSelf: 'flex-start',
    },
    rightBox: {
        alignSelf: 'flex-end',
    },
});
