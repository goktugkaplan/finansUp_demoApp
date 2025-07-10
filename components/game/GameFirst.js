import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function GameFirst() {
    const options = [
        { icon: <Ionicons name="code-slash" size={24} color="#7c4dff" />, text: 'Explore what is coding' },
        { icon: <FontAwesome5 name="brain" size={24} color="#e91e63" />, text: 'Challenge my brain' },
        { icon: <Feather name="briefcase" size={24} color="#ff9800" />, text: 'Boost my career' },
        { icon: <Ionicons name="game-controller" size={24} color="#3f51b5" />, text: 'Just for fun' },
        { icon: <MaterialIcons name="school" size={24} color="#009688" />, text: 'Support my education' },
        { icon: <AntDesign name="appstore1" size={24} color="#00bcd4" />, text: 'Build my own apps' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Progress Bar */}
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarFill} />
                </View>

                {/* Character & Speech */}
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/bitmoji.png')}
                        style={styles.mascot}
                    />
                    <View style={styles.speechBubble}>
                        <Text style={styles.speechText}>Why are you learning C#?</Text>
                    </View>
                </View>

                {/* Options */}
                <ScrollView style={styles.optionsContainer}>
                    {options.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.option}>
                            <View style={styles.iconContainer}>{item.icon}</View>
                            <Text style={styles.optionText}>{item.text}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Continue Button */}
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueText}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    progressBarContainer: {
        height: 6,
        backgroundColor: '#E0E0E0',
        borderRadius: 3,
        marginVertical: 10,
        overflow: 'hidden',
    },
    progressBarFill: {
        width: '40%',
        height: '100%',
        backgroundColor: '#74B9FF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    mascot: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    speechBubble: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 15,
        padding: 10,
        marginLeft: 10,
        maxWidth: '70%',
        elevation: 2,
    },
    speechText: {
        fontSize: 16,
        color: '#000',
    },
    optionsContainer: {
        flex: 1,
        marginVertical: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1.2,
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
    },
    iconContainer: {
        marginRight: 15,
        width: 30,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    continueButton: {
        backgroundColor: '#74B9FF',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },
    continueText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
