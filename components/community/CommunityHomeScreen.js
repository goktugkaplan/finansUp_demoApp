import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    SafeAreaView
} from 'react-native';

export default function App() {
    const handleAddPost = () => {
        Alert.alert('Yeni gönderi ekle!');
    };

    const Post = ({ avatar, name, username, time, text, comments, retweets, likes }) => (
        <View style={styles.post}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.postContent}>
                <View style={styles.postHeader}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.username}>@{username}</Text>
                    <Text style={styles.time}>· {time}</Text>
                </View>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.postFooter}>
                    <Text style={styles.footerText}>💬 {comments}</Text>
                    <Text style={styles.footerText}>❤️ {likes}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.main}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo2}
                        resizeMode="contain"
                    />
                </View>
                <Post
                    avatar={require('../../assets/bitmoji.png')}
                    name="Eda Meral"
                    username="laremeda"
                    time="3h"
                    text="📈 Yatırım yapacak param yok deme. Günde 20 TL birikimle yılda 7.000 TL yatırım yapabilirsin. Küçük adımlar, büyük farklar yaratır. #FinansalBilinç"
                    comments="46"
                    retweets="18"
                    likes="363"
                />
                <Post
                    avatar={require('../../assets/bitmoji.png')}
                    name="Melike Acar"
                    username="acarmelike"
                    time="3h"
                    text="📈 Yatırım yapacak param yok deme. Günde 20 TL birikimle yılda 7.000 TL yatırım yapabilirsin. Küçük adımlar, büyük farklar yaratır. #FinansalBilinç"
                    comments="46"
                    retweets="18"
                    likes="363"
                />
                <Post
                    avatar={require('../../assets/bitmoji.png')}
                    name="Eda Meral"
                    username="laremeda"
                    time="3h"
                    text="📈 Yatırım yapacak param yok deme. Günde 20 TL birikimle yılda 7.000 TL yatırım yapabilirsin. Küçük adımlar, büyük farklar yaratır. #FinansalBilinç"
                    comments="46"
                    retweets="18"
                    likes="363"
                />
                <Post
                    avatar={require('../../assets/bitmoji.png')}
                    name="Melike Acar"
                    username="acarmelike"
                    time="14h"
                    text="💡 Paranı bankada tutmak güvenli olabilir, ama büyümez. Yatırım yap, enflasyona karşı kazanan sen ol! #Ekonomi #AkıllıYatırım"
                    comments="7"
                    retweets="11"
                    likes=""
                />
            </ScrollView>
            <TouchableOpacity style={styles.addBtn} onPress={handleAddPost}>
                <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fa',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
        //backgroundColor: '#fff',
        //borderBottomWidth: 1,
        //borderBottomColor: '#eee',
        marginBottom: 8,
        height: 70,
        overflow: 'hidden',
        marginTop:10
    },
    logo2: {
        width: 600,
        height: 150,
    },
    main: {
        flex: 1,
        paddingHorizontal: 8,
    },
    post: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 16,
        marginVertical: 8,
        marginHorizontal: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    postContent: {
        flex: 1,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontWeight: 'bold',
        marginRight: 6,
    },
    username: {
        color: '#888',
        fontSize: 14,
        marginRight: 6,
    },
    time: {
        color: '#888',
        fontSize: 14,
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 22,
    },
    postFooter: {
        flexDirection: 'row',
        gap: 18,
    },
    footerText: {
        color: '#888',
        fontSize: 14,
    },
    addBtn: {
        position: 'absolute',
        right: 24,
        bottom: 24,
        width: 56,
        height: 56,
        backgroundColor: '#2196f3',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    addBtnText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
}); 