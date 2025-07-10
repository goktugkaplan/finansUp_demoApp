import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0;

const slides = [
    {
        image: require('../../assets/cardImage/gorsel1.jpg'),
        notchColor: '#DFFDFB',
        title: 'Finansal\nFarkındalık\nKazan!',
        descriptions: [
            'Günlük mikro görevlerle finansal bilincini artır.',
            'Küçük adımlarla büyük farklar yarat. Her gün basit görevlerle finansal okuryazarlığını geliştir.',
        ],
    },
    {
        image: require('../../assets/cardImage/gorsel2.jpg'),
        notchColor: '#BAFBDA',
        title: 'Yatırımı \nÖğren, \nKorkunu Yen!',
        descriptions: [
            'Zorlayıcı değil, anlaşılır yatırım rehberleri seni bekliyor.',
            'Yatırım korkunu yen, bilgi kartlarıyla güvenli başlangıçlar yap.',
        ],
    },
    {
        image: require('../../assets/cardImage/gorsel3.jpg'),
        notchColor: '#F3FDF2',
        title: 'Bilgini Paylaş, \nGüçlen!',
        descriptions: [
            'Topluluk desteğiyle finansal bilgi alışverişi sağla.',
            'Kullanıcılar arasında güvenilir bilgi akışı ile birlikte öğrenme ortamına katıl.',
        ],
    },
    {
        image: require('../../assets/cardImage/gorsel4.png'),
        notchColor: '#DEFBDF',
        title: 'Eğlenerek\nÖğren!',
        descriptions: [
            'Oyunlaştırılmış finans eğitimiyle alışkanlık kazan.',
            'Finansal okuryazarlığı günlük rutininin bir parçası haline getir, öğrenmek hiç bu kadar keyifli olmamıştı!',
        ],
    },
    {
        image: require('../../assets/cardImage/gorsel5.jpg'),
        notchColor: '#ECFEFE',
        title: 'Hedefine Uygun\nPaketi Seç!',
        descriptions: [
            'Temel, Standart, Premium ve VIP paket seçenekleriyle finansal hedeflerine göre içerikler seni bekliyor.',
            'İhtiyacına en uygun paketi seç, eğitimini bir üst seviyeye taşı!',
        ],
    },
];

export default function CardScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < slides.length) {
            setCurrentIndex(nextIndex);
        } else {
            setCurrentIndex(0);
        }
    };

    const onFinish = () => {
        console.log('Bitti!');
        navigation.navigate('Login');
    };

    const { image, title, descriptions, notchColor } = slides[currentIndex];

    return (
        <View style={styles.rootContainer}>
            {/* Çentik / status bar altı renkli üst bar */}
            <View style={[styles.statusBarBackground, { backgroundColor: notchColor }]} />

            {/* Ana içerik */}
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} resizeMode="cover" />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {descriptions.map((desc, i) => (
                        <Text key={i} style={styles.description}>
                            {desc}
                        </Text>
                    ))}
                </View>

                <View style={styles.pagination}>
                    {slides.map((_, i) => (
                        <View
                            key={i}
                            style={[styles.dot, currentIndex === i && styles.activeDot]}
                        />
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={currentIndex === slides.length - 1 ? onFinish : onNext}
                    >
                        <Text style={styles.buttonText}>
                            {currentIndex === slides.length - 1 ? 'Bitir' : 'İleri'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarBackground: {
        height: STATUS_BAR_HEIGHT,
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 4,
        color: '#444',
        marginBottom: 20,
    },
    pagination: {
        position: 'absolute',
        bottom: 90,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    dot: {
        width: 20,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#3B82F6',
        width: 15,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
