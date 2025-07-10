import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    Platform,
    StatusBar,
} from 'react-native';

export default function HomeScreen2() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Image
                            source={require('./assets/bitmoji.png')}
                            style={styles.avatar}
                        />
                        <View>
                            <Text style={styles.welcome}>Hoş geldin,</Text>
                            <Text style={styles.name}>Melike!</Text>
                        </View>
                    </View>
                    <Text style={styles.star}>★</Text>
                </View>

                {/* Progress & Tasks */}
                <View style={styles.progressSection}>
                    <View style={styles.progressCircleWrapper}>
                        <View style={styles.progressCircle}>
                            <View style={styles.progressBackground} />
                            <View style={[styles.progressBar, { transform: [{ rotate: '400deg' }] }]} />
                            <Text style={styles.progressText}>100%</Text>
                        </View>
                        <Text style={styles.progressInfo}>3/3 görev tamamlandı</Text>
                    </View>
                    <View style={styles.progressTasks}>
                        <Text style={styles.tasksTitle}>Bugünkü Görevlerin</Text>
                        <View style={styles.tasksList}>
                            <Text style={styles.taskDone}>● Bir finansal terim öğren</Text>
                            <Text style={styles.taskDone}>● Harcama kategorilerini belirle</Text>
                            <Text style={styles.taskDone}>● Mini yatırım simülasyonunu tamamla</Text>
                        </View>
                    </View>
                </View>

                {/* Cards */}
                <View style={[styles.card, styles.infoCard]}>
                    <Text style={styles.cardIcon}>📈</Text>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Günün Finansal Bilgisi</Text>
                        <Text style={styles.cardLink}>Bileşik Faiz Nedir?</Text>
                        <Text style={styles.cardDesc}>Küçük birikimler zamanla büyür!</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.quizCard]}>
                    <Text style={styles.cardIcon}>❓</Text>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Mini Quiz</Text>
                        <Text style={styles.cardDesc}>Bugünün sorusunu çöz!</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.badgeCard]}>
                    <Text style={styles.cardIcon}>🏅</Text>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Rozetler</Text>
                        <Text style={styles.cardDesc}>İlk yatırım simülasyonunu tamamladın</Text>
                    </View>
                </View>

                {/* Spending Section */}
                <View style={styles.spendingSection}>
                    <Text style={styles.spendingTitle}>
                        Bugün en çok nereye harcadın?
                    </Text>
                    <Text style={styles.spendingIcons}>🍽️⛽</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const PRIMARY = '#1ec773';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        padding: 18,
        paddingTop: 10,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#eee',
        marginRight: 10,
    },
    welcome: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: -2,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0077ff',
        textDecorationLine: 'underline',
    },
    star: {
        fontSize: 26,
        color: '#FFD600',
        marginRight: 10,
    },
    progressSection: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 18,
        gap: 15,
    },
    progressCircleWrapper: {
        alignItems: 'center',
        width: 70,
    },
    progressCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
    },
    progressBackground: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 7,
        borderColor: '#e6e6e6',
    },
    progressBar: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 7,
        borderColor: PRIMARY,
        borderRightColor: PRIMARY,
        borderBottomColor: PRIMARY,
        borderLeftColor: PRIMARY,
    },
    progressText: {
        position: 'absolute',
        fontWeight: '700',
        fontSize: 16,
        color: '#222',
        textAlign: 'center',
        width: 70,
    },
    progressInfo: {
        fontSize: 13,
        color: '#888',
        marginTop: 8,
        textAlign: 'center',
        alignSelf: 'center', // EKLENDİ
        width: 100, // EKLENDİ: Yazıyı sığdırmak için yeterli genişlik
    },
    progressTasks: {
        flex: 1,
        marginLeft: 10,
    },
    tasksTitle: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 8,
    },
    tasksList: {},
    taskDone: {
        color: PRIMARY,
        fontSize: 14,
        marginBottom: 3,
    },
    taskTodo: {
        color: '#bbb',
        fontSize: 14,
        marginBottom: 3,
    },
    card: {
        borderRadius: 10,
        padding: 13,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        marginBottom: 10,
    },
    infoCard: {
        backgroundColor: '#eaf6ff',
    },
    quizCard: {
        backgroundColor: '#f3eaff',
    },
    badgeCard: {
        backgroundColor: '#fff6e5',
    },
    cardIcon: {
        fontSize: 28,
        marginRight: 8,
        marginTop: 2,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 2,
    },
    cardLink: {
        color: '#00bfae',
        textDecorationLine: 'underline',
        fontWeight: '700',
        fontSize: 14,
        marginBottom: 2,
    },
    cardDesc: {
        fontSize: 13,
        color: '#666',
    },
    spendingSection: {
        backgroundColor: '#eafff2',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 10,
        marginTop: 5,
    },
    spendingTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: '#222',
        flex: 1,
        lineHeight: 22,
    },
    spendingIcons: {
        fontSize: 32,
        color: '#222',
        marginLeft: 10,
    },
});
