import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GameLearn() {
    const navigation = useNavigation();

    const messageImages = [
        require('../../assets/message.png'),
        require('../../assets/message1.png'),
        require('../../assets/message2.png'),
    ];

    const [imageIndex, setImageIndex] = useState(0);

    const handlePress = () => {
        if (imageIndex < messageImages.length - 1) {
            setImageIndex(imageIndex + 1);
        } else {
            navigation.navigate('GameScreen');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.speechBubble}>
                <Image
                    source={messageImages[imageIndex]}
                    style={styles.speechImage}
                    resizeMode="contain"
                />
            </View>

            <Image
                source={require('../../assets/bitmoji.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Devam</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    speechBubble: {
        position: 'absolute',
        top: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    speechImage: {
        width: 280,
        height: 100,
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 0,
    },
    button: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: '#007AFF',
        width: '90%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
