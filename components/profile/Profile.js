import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
    Alert,
    Animated,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function App() {
    const [userData, setUserData] = useState({
        name: 'Melike Acar',
        email: 'melikeacar@gmail.com',
        avatar: require('../../assets/bitmoji.png'),
        stats: {
            days: 156,
            totalSavings: 12450,
            completedGoals: 8,
            finanseEdu: '12/15',
            communityLikes: 247,
            posts: 18
        },
        progress: {
            education: 78,
            monthlySavings: 65
        },
        goals: [
            {
                id: 1,
                name: 'MacBook Pro',
                amount: 45000,
                current: 15750,
                icon: 'laptop',
                remainingMonths: 8
            },
            {
                id: 2,
                name: 'Araba',
                amount: 180000,
                current: 32400,
                icon: 'car',
                remainingMonths: 24
            }
        ]
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        // Sayfa yüklendiğinde animasyonları başlat
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const showModal = (type, title, content) => {
        setModalType(type);
        setModalTitle(title);
        setModalContent(content);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const editProfileAvatar = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                setUserData(prev => ({
                    ...prev,
                    avatar: result.assets[0].uri
                }));
            }
        } catch (error) {
            Alert.alert('Hata', 'Fotoğraf seçilirken bir hata oluştu.');
        }
    };

    const showNotifications = () => {
        const notifications = [
            { title: 'Yeni Başarı!', message: '7 gün üst üste görev tamamladın!', time: '2 saat önce' },
            { title: 'Hedef Güncellemesi', message: 'MacBook Pro hedefi %35\'e ulaştı', time: '1 gün önce' },
            { title: 'Yeni Ders', message: 'Yatırım Temelleri dersi eklendi', time: '2 gün önce' }
        ];

        const content = (
            <View style={styles.modalContent}>
                {notifications.map((notification, index) => (
                    <View key={index} style={styles.notificationItem}>
                        <Text style={styles.notificationTitle}>{notification.title}</Text>
                        <Text style={styles.notificationMessage}>{notification.message}</Text>
                        <Text style={styles.notificationTime}>{notification.time}</Text>
                    </View>
                ))}
            </View>
        );

        showModal('notifications', 'Bildirimler', content);
    };

    const showSettings = () => {
        const content = (
            <View style={styles.modalContent}>
                <TouchableOpacity style={styles.settingItem} onPress={() => {
                    hideModal();
                    setTimeout(() => {
                        const profileContent = (
                            <View style={styles.modalContent}>
                                <TextInput style={styles.formInput} placeholder="Ad Soyad" defaultValue={userData.name} />
                                <TextInput style={styles.formInput} placeholder="E-posta" defaultValue={userData.email} />
                                <TouchableOpacity style={styles.btnPrimary} onPress={hideModal}>
                                    <Text style={styles.btnPrimaryText}>Güncelle</Text>
                                </TouchableOpacity>
                            </View>
                        );
                        showModal('profile', 'Profili Düzenle', profileContent);
                    }, 300);
                }}>
                    <Ionicons name="person" size={20} color="#667eea" />
                    <Text style={styles.settingText}>Profil Bilgileri</Text>
                    <Ionicons name="chevron-forward" size={16} color="#a0aec0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Ionicons name="notifications" size={20} color="#667eea" />
                    <Text style={styles.settingText}>Bildirim Ayarları</Text>
                    <Ionicons name="chevron-forward" size={16} color="#a0aec0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Ionicons name="shield-checkmark" size={20} color="#667eea" />
                    <Text style={styles.settingText}>Güvenlik</Text>
                    <Ionicons name="chevron-forward" size={16} color="#a0aec0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Ionicons name="help-circle" size={20} color="#667eea" />
                    <Text style={styles.settingText}>Yardım</Text>
                    <Ionicons name="chevron-forward" size={16} color="#a0aec0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Ionicons name="log-out" size={20} color="#667eea" />
                    <Text style={styles.settingText}>Çıkış Yap</Text>
                    <Ionicons name="chevron-forward" size={16} color="#a0aec0" />
                </TouchableOpacity>
            </View>
        );

        showModal('settings', 'Ayarlar', content);
    };

    const handleActionButton = (type) => {
        if (type === 'primary') {
            const content = (
                <View style={styles.modalContent}>
                    <TextInput style={styles.formInput} placeholder="Hedef Adı" />
                    <TextInput style={styles.formInput} placeholder="Hedef Tutar (₺)" keyboardType="numeric" />
                    <TextInput style={styles.formInput} placeholder="Hedef Süre (Ay)" keyboardType="numeric" />
                    <TouchableOpacity style={styles.btnPrimary} onPress={hideModal}>
                        <Text style={styles.btnPrimaryText}>Hedef Oluştur</Text>
                    </TouchableOpacity>
                </View>
            );
            showModal('goal', 'Yeni Hedef Ekle', content);
        } else if (type === 'secondary') {
            const content = (
                <View style={styles.modalContent}>
                    <TextInput style={styles.formInput} placeholder="Ad Soyad" defaultValue={userData.name} />
                    <TextInput style={styles.formInput} placeholder="E-posta" defaultValue={userData.email} />
                    <TouchableOpacity style={styles.btnPrimary} onPress={hideModal}>
                        <Text style={styles.btnPrimaryText}>Güncelle</Text>
                    </TouchableOpacity>
                </View>
            );
            showModal('profile', 'Profili Düzenle', content);
        }
    };

    const renderProgressBar = (percentage, color = '#667eea') => (
        <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${percentage}%`, backgroundColor: color }]} />
        </View>
    );

    const renderStatItem = (number, label, prefix = '') => (
        <View style={styles.statItem}>
            <Text style={styles.statNumber}>{prefix}{number}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );

    const renderGoalCard = (goal) => {
        const percentage = (goal.current / goal.amount) * 100;
        return (
            <View key={goal.id} style={styles.goalCard}>
                <View style={styles.goalIcon}>
                    <FontAwesome5 name={goal.icon} size={20} color="white" />
                </View>
                <View style={styles.goalContent}>
                    <Text style={styles.goalTitle}>{goal.name}</Text>
                    <Text style={styles.goalAmount}>₺{goal.amount.toLocaleString()}</Text>
                    <View style={styles.goalProgress}>
                        <View style={styles.goalProgressBar}>
                            <View style={[styles.goalProgressFill, { width: `${percentage}%`, backgroundColor: '#667eea' }]} />
                        </View>
                        <Text style={styles.goalPercentage}>{percentage.toFixed(0)}%</Text>
                    </View>
                    <Text style={styles.goalRemaining}>Kalan: {goal.remainingMonths} ay</Text>
                </View>
            </View>
        );
    };

    const renderAchievementCard = (achievement) => (
        <View key={achievement.id} style={styles.achievementCard}>
            <View style={styles.achievementIcon}>
                <FontAwesome5 name={achievement.icon} size={20} color="#2d3748" />
            </View>
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDescription}>{achievement.description}</Text>
            <Text style={styles.achievementDate}>{achievement.date}</Text>
        </View>
    );

    const renderActivityItem = (activity) => (
        <View key={activity.id} style={styles.activityItem}>
            <View style={styles.activityIcon}>
                <Ionicons name={activity.icon} size={16} color="white" />
            </View>
            <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityMessage}>{activity.message}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <View style={styles.headerActions}>
                            <TouchableOpacity style={styles.headerBtn} onPress={showNotifications}>
                                <Ionicons name="notifications" size={24} color="#718096" />
                                <View style={styles.notificationBadge}>
                                    <Text style={styles.notificationBadgeText}>3</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.headerBtn} onPress={showSettings}>
                                <Ionicons name="settings" size={24} color="#718096" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Animated.View style={[styles.animatedContainer, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
                    {/* Profile Header */}
                    <View style={styles.profileHeader}>
                        <TouchableOpacity style={styles.editProfileBtn} onPress={() => handleActionButton('secondary')}>
                            <Ionicons name="create" size={20} color="#667eea" />
                        </TouchableOpacity>
                        <View style={styles.profileCover}>
                            <View style={styles.profileAvatar}>
                                <Image source={userData.avatar} style={styles.avatarImage} />
                            </View>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>{userData.name}</Text>
                            <Text style={styles.profileEmail}>{userData.email}</Text>
                        </View>
                    </View>

                    {/* Stats Card */}
                    <View style={styles.statsCard}>
                        <View style={styles.profileStats}>
                            {renderStatItem(userData.stats.days, 'Gün')}
                            {renderStatItem(userData.stats.totalSavings, 'Toplam Birikim', '₺')}
                            {renderStatItem(userData.stats.completedGoals, 'Tamamlanan Hedef')}
                            {renderStatItem(userData.stats.finanseEdu, 'FinansEdu Ders')}
                            {renderStatItem(userData.stats.communityLikes, 'Topluluk Beğeni')}
                            {renderStatItem(userData.stats.posts, 'Paylaşım')}
                        </View>
                    </View>

                    {/* Recent Activity */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Son Aktiviteler</Text>
                        <View style={styles.activityList}>
                            {[
                                { id: 1, title: 'Yeni birikim eklendi', message: '₺500 birikim eklendi - MacBook Pro hedefi', time: '2 saat önce', icon: 'add-circle' },
                                { id: 2, title: 'Ders tamamlandı', message: '"Yatırım Temelleri" dersi tamamlandı', time: 'Dün', icon: 'book' },
                                { id: 3, title: 'Hedef güncellendi', message: 'Araba hedefi %18\'e ulaştı', time: '3 gün önce', icon: 'trending-up' }
                            ].map(renderActivityItem)}
                        </View>
                    </View>
                </Animated.View>
            </ScrollView>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{modalTitle}</Text>
                            <TouchableOpacity onPress={hideModal}>
                                <Ionicons name="close" size={24} color="#718096" />
                            </TouchableOpacity>
                        </View>
                        {modalContent}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    mainContent: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    animatedContainer: {
        paddingBottom: 20,
    },
    profileHeader: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 24,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    },
    profileCover: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileAvatar: {
        position: 'relative',
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: 'white',
    },
    editProfileBtn: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        zIndex: 10,
    },
    profileInfo: {
        alignItems: 'center',
    },
    profileName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2d3748',
        marginBottom: 4,
    },
    profileEmail: {
        color: '#718096',
        fontSize: 14,
        marginBottom: 20,
    },
    profileStats: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statItem: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 16,
    },
    statNumber: {
        fontSize: 20,
        fontWeight: '700',
        color: '#667eea',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: '#718096',
        fontWeight: '500',
        textAlign: 'center',
    },
    quickActions: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    actionBtn: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    primaryBtn: {
        backgroundColor: '#667eea',
    },
    primaryBtnText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },
    secondaryBtn: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#e2e8f0',
    },
    secondaryBtnText: {
        color: '#667eea',
        fontWeight: '600',
        fontSize: 14,
    },
    section: {
        marginBottom: 20,
        marginTop: 10
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2d3748',
        marginBottom: 16,
    },
    progressCards: {
        gap: 12,
    },
    progressCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    progressTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d3748',
    },
    progressPercentage: {
        fontWeight: '700',
        color: '#667eea',
        fontSize: 18,
    },
    progressBar: {
        width: '100%',
        height: 8,
        backgroundColor: '#e2e8f0',
        borderRadius: 4,
        marginBottom: 8,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    progressDescription: {
        fontSize: 13,
        color: '#718096',
    },
    goalsGrid: {
        gap: 12,
    },
    goalCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    },
    goalIcon: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#667eea',
        justifyContent: 'center',
        alignItems: 'center',
    },
    goalContent: {
        flex: 1,
    },
    goalTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d3748',
        marginBottom: 4,
    },
    goalAmount: {
        fontSize: 18,
        fontWeight: '700',
        color: '#667eea',
        marginBottom: 12,
    },
    goalProgress: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    goalProgressBar: {
        flex: 1,
        height: 6,
        backgroundColor: '#e2e8f0',
        borderRadius: 3,
        overflow: 'hidden',
    },
    goalProgressFill: {
        height: '100%',
        borderRadius: 3,
    },
    goalPercentage: {
        fontSize: 12,
        fontWeight: '600',
        color: '#667eea',
        minWidth: 30,
        textAlign: 'right',
    },
    goalRemaining: {
        fontSize: 12,
        color: '#718096',
    },
    achievementsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    achievementCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        flex: 1,
        minWidth: (width - 60) / 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    },
    achievementIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffd700',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    achievementTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2d3748',
        marginBottom: 8,
        textAlign: 'center',
    },
    achievementDescription: {
        fontSize: 12,
        color: '#718096',
        marginBottom: 12,
        textAlign: 'center',
        lineHeight: 16,
    },
    achievementDate: {
        fontSize: 11,
        color: '#a0aec0',
        fontWeight: '500',
    },
    activityList: {
        gap: 12,
    },
    activityItem: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    },
    activityIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#667eea',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityContent: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2d3748',
        marginBottom: 4,
    },
    activityMessage: {
        fontSize: 12,
        color: '#718096',
        marginBottom: 8,
    },
    activityTime: {
        fontSize: 11,
        color: '#a0aec0',
        fontWeight: '500',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        maxWidth: 400,
        maxHeight: '80%',
        overflow: 'hidden',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#2d3748',
    },
    modalContent: {
        padding: 20,
        maxHeight: '70%',
    },
    notificationItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    notificationTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2d3748',
        marginBottom: 4,
    },
    notificationMessage: {
        fontSize: 12,
        color: '#718096',
        marginBottom: 8,
    },
    notificationTime: {
        fontSize: 11,
        color: '#a0aec0',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        padding: 16,
        borderRadius: 12,
    },
    settingText: {
        flex: 1,
        fontSize: 14,
        color: '#2d3748',
    },
    formInput: {
        width: '100%',
        padding: 16,
        borderWidth: 2,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        fontSize: 14,
        marginBottom: 16,
    },
    btnPrimary: {
        width: '100%',
        padding: 16,
        backgroundColor: '#667eea',
        borderRadius: 12,
        alignItems: 'center',
    },
    btnPrimaryText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    header: {
        //backgroundColor: 'white',
        padding: 16,
        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 4 },
        //shadowOpacity: 0.08,
        //shadowRadius: 20,
        //elevation: 8,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerActions: {
        flexDirection: 'row',
        gap: 12,
    },
    headerBtn: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: '#ff4d4d',
        borderRadius: 16,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationBadgeText: {
        fontSize: 12,
        fontWeight: '700',
        color: 'white',
    },
    statsCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    },
}); 