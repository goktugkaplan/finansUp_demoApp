import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar, SafeAreaView, Alert, Modal, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const LESSONS = [
    {
        id: 1,
        title: "Tasarruf Temelleri",
        icon: "piggy-bank",
        color: ["#4facfe", "#00f2fe"],
        requiredCompleted: 0, // İlk ders her zaman açık
        learning: {
            sections: [
                {
                    title: "Tasarruf Nedir ve Neden Önemlidir?",
                    icon: "lightbulb",
                    content: "Tasarruf, gelirinizin bir kısmını gelecekteki ihtiyaçlarınız için biriktirmektir. Finansal güvenlik ve hedefler için temel bir alışkanlıktır.",
                    points: [
                        "Acil durumlar için güvenlik ağı oluşturur",
                        "Büyük alışverişler için para biriktirmenizi sağlar",
                        "Yatırım yapmak için sermaye oluşturur",
                        "Finansal bağımsızlık yolunda ilerlemenizi sağlar"
                    ]
                },
                {
                    title: "Tasarruf Stratejileri",
                    icon: "chart-line",
                    content: "Etkili tasarruf için farklı stratejiler kullanabilirsiniz.",
                    points: [
                        "Önce kendine öde prensibi (maaş günü tasarruf)",
                        "50/30/20 kuralı (ihtiyaçlar/istekler/tasarruf)",
                        "Otomatik para transferi ile tasarruf",
                        "Küçük günlük tasarrufların gücü"
                    ]
                },
                {
                    title: "Acil Durum Fonu",
                    icon: "shield-alt",
                    content: "Acil durum fonu, beklenmedik harcamalar için ayrılan paradır.",
                    points: [
                        "3-6 aylık gider kadar biriktirin",
                        "Kolay erişilebilir hesapta tutun",
                        "Düzenli olarak kontrol edin ve güncelleyin",
                        "Sadece gerçek acil durumlar için kullanın"
                    ]
                }
            ],
            tips: [
                { title: "Tasarruf Hedeflerinizi Belirleyin", content: "Net ve ölçülebilir hedefler koyun. Örn: '3 ayda 10.000 TL biriktir'." },
                { title: "Tasarrufunuzu Takip Edin", content: "Aylık olarak tasarruf durumunuzu kontrol edin." },
                { title: "Tasarruf Alışkanlığı Edinin", content: "Küçük miktarlarla başlayın ve zamanla artırın." }
            ]
        },
        quiz: [
            {
                question: "Aylık gelirinin %20'sini tasarruf etmek için en iyi yöntem hangisidir?",
                options: [
                    "Gelir geldiğinde hemen harcamak",
                    "Otomatik para transferi ile maaş günü tasarruf yapmak",
                    "Sadece kalan parayı biriktirmek",
                    "Hiç tasarruf yapmamak"
                ],
                correct: 1,
                explanation: "Otomatik transfer ile tasarruf yapmak, 'önce kendine öde' prensibini uygular ve tutarlı tasarruf sağlar."
            },
            {
                question: "Acil durum fonu için ne kadar para biriktirmelisin?",
                options: [
                    "1 aylık gider",
                    "3-6 aylık gider",
                    "1 yıllık gider",
                    "Hiç gerek yok"
                ],
                correct: 1,
                explanation: "3-6 aylık gider kadar acil durum fonu, beklenmedik durumlarda finansal güvenlik sağlar."
            },
            {
                question: "Tasarruf hedeflerini belirlerken en önemli faktör nedir?",
                options: [
                    "Komşunun ne yaptığı",
                    "Sosyal medyada gördüklerin",
                    "Kendi gelir ve gider durumun",
                    "Arkadaşlarının önerileri"
                ],
                correct: 2,
                explanation: "Kendi finansal durumunu analiz etmek, gerçekçi ve sürdürülebilir tasarruf hedefleri belirlemeni sağlar."
            },
            {
                question: "Hangi tasarruf yöntemi en etkilidir?",
                options: [
                    "Sadece büyük alışverişlerde tasarruf",
                    "Küçük günlük tasarruflar",
                    "Sadece yılbaşında tasarruf",
                    "Hiç tasarruf yapmamak"
                ],
                correct: 1,
                explanation: "Küçük günlük tasarruflar zamanla büyük birikimlere dönüşür ve alışkanlık haline gelir."
            },
            {
                question: "Tasarruf hedeflerini takip etmek için en iyi yöntem nedir?",
                options: [
                    "Hiç takip etmemek",
                    "Aylık bütçe takibi yapmak",
                    "Sadece yıllık kontrol",
                    "Sadece harcama yapmak"
                ],
                correct: 1,
                explanation: "Aylık bütçe takibi, hedeflerine ulaşıp ulaşmadığını görmeni ve gerekli düzenlemeleri yapmanı sağlar."
            }
        ]
    },
    {
        id: 2,
        title: "Yatırım ABC'si",
        icon: "chart-line",
        color: ["#667eea", "#764ba2"],
        requiredCompleted: 1, // 1 ders tamamlandıktan sonra açılır
        learning: {
            sections: [
                {
                    title: "Yatırım Nedir?",
                    icon: "question-circle",
                    content: "Yatırım, paranızı gelecekte daha fazla para kazanmak için kullanmaktır. Bu, risk ve getiri arasındaki dengeyi içerir.",
                    points: [
                        "Paranızı çalıştırarak gelir elde edersiniz",
                        "Enflasyona karşı koruma sağlar",
                        "Uzun vadeli finansal hedeflerinize ulaşmanızı sağlar",
                        "Pasif gelir kaynağı oluşturur"
                    ]
                },
                {
                    title: "Risk ve Getiri",
                    icon: "balance-scale",
                    content: "Yatırımda risk ve getiri arasında doğrudan bir ilişki vardır. Daha yüksek getiri, genellikle daha yüksek risk anlamına gelir.",
                    points: [
                        "Düşük risk = Düşük getiri",
                        "Orta risk = Orta getiri",
                        "Yüksek risk = Yüksek getiri",
                        "Risk toleransınızı belirleyin"
                    ]
                },
                {
                    title: "Yatırım Araçları",
                    icon: "tools",
                    content: "Farklı yatırım araçları farklı risk ve getiri profilleri sunar. Başlangıç için düşük riskli araçlarla başlayın.",
                    points: [
                        "Mevduat hesapları (en güvenli)",
                        "Devlet tahvilleri",
                        "Borsa yatırım fonları (ETF)",
                        "Hisse senetleri (daha riskli)"
                    ]
                }
            ],
            tips: [
                { title: "Diversifikasyon Yapın", content: "Tüm paranızı tek bir yatırım aracına yatırmayın. Farklı araçlar arasında dağıtım yaparak riskinizi azaltın." },
                { title: "Zaman Avantajını Kullanın", content: "Erken yaşta yatırıma başlayın. Bileşik faiz etkisi sayesinde zaman, en büyük avantajınızdır." },
                { title: "Düzenli Yatırım Yapın", content: "Aylık düzenli yatırım yapın. Bu, ortalama maliyet düşürme stratejisi ile piyasa dalgalanmalarından daha az etkilenmenizi sağlar." }
            ]
        },
        quiz: [
            {
                question: "Yatırım yaparken en önemli prensip nedir?",
                options: [
                    "Tüm parayı tek seferde yatırmak",
                    "Risk dağılımı yapmak",
                    "Sadece yüksek riskli yatırımlar",
                    "Hiç yatırım yapmamak"
                ],
                correct: 1,
                explanation: "Risk dağılımı (diversifikasyon), yatırım riskini azaltır ve daha güvenli bir portföy oluşturur."
            },
            {
                question: "Başlangıç yatırımcısı için en uygun yatırım aracı hangisidir?",
                options: [
                    "Kripto para",
                    "Altın",
                    "Borsa yatırım fonu (ETF)",
                    "Kumar"
                ],
                correct: 2,
                explanation: "ETF'ler düşük maliyetli, çeşitlendirilmiş ve başlangıç yatırımcıları için uygun araçlardır."
            },
            {
                question: "Yatırım yaparken zaman faktörü neden önemlidir?",
                options: [
                    "Hiç önemli değil",
                    "Bileşik faiz etkisi",
                    "Sadece kısa vadeli kazanç",
                    "Sadece uzun vadeli kazanç"
                ],
                correct: 1,
                explanation: "Bileşik faiz etkisi sayesinde, uzun vadeli yatırımlar daha büyük getiri potansiyeli sunar."
            },
            {
                question: "Yatırım kararı verirken hangi faktörü göz ardı etmemelisin?",
                options: [
                    "Risk toleransın",
                    "Komşunun yatırımları",
                    "Sosyal medyada trendleri",
                    "Arkadaş önerileri"
                ],
                correct: 0,
                explanation: "Risk toleransın, sana uygun yatırım araçlarını seçmende en önemli faktördür."
            },
            {
                question: "Düzenli yatırım yapmanın avantajı nedir?",
                options: [
                    "Hiç avantaj yok",
                    "Ortalama maliyet düşürme",
                    "Sadece yüksek kazanç",
                    "Sadece düşük risk"
                ],
                correct: 1,
                explanation: "Düzenli yatırım, ortalama maliyet düşürme stratejisi ile piyasa dalgalanmalarından daha az etkilenir."
            }
        ]
    },
    {
        id: 3,
        title: "Bütçe Yönetimi",
        icon: "credit-card",
        color: ["#f093fb", "#f5576c"],
        requiredCompleted: 2, // 2 ders tamamlandıktan sonra açılır
        learning: {
            sections: [
                {
                    title: "Bütçe Nedir?",
                    icon: "calculator",
                    content: "Bütçe, gelir ve giderlerinizi planlamak ve kontrol etmek için kullanılan bir araçtır. Bu, finansal durumunuzu net görmenizi sağlar.",
                    points: [
                        "Gelir ve giderlerinizi takip eder",
                        "Gereksiz harcamaları belirlemenizi sağlar",
                        "Tasarruf hedeflerinizi destekler",
                        "Finansal kararlarınızı iyileştirir"
                    ]
                },
                {
                    title: "50/30/20 Kuralı",
                    icon: "percentage",
                    content: "Bu kural, gelirinizi üç kategoriye ayırmanızı önerir: ihtiyaçlar, istekler ve tasarruf/yatırım.",
                    points: [
                        "%50 İhtiyaçlar (kira, yemek, ulaşım)",
                        "%30 İstekler (eğlence, alışveriş)",
                        "%20 Tasarruf ve yatırım",
                        "Bu oranları kendi durumunuza göre ayarlayın"
                    ]
                },
                {
                    title: "Harcama Takibi",
                    icon: "list",
                    content: "Harcamalarınızı kategorilere ayırarak takip etmek, nereye para harcadığınızı görmenizi sağlar.",
                    points: [
                        "Günlük harcama kaydı tutun",
                        "Harcamaları kategorilere ayırın",
                        "Aylık harcama raporu çıkarın",
                        "Gereksiz harcamaları belirleyin"
                    ]
                }
            ],
            tips: [
                { title: "Gerçekçi Bütçe Yapın", content: "Bütçenizi gerçek gelir ve giderlerinize göre yapın. Çok katı bütçeler sürdürülemez ve başarısızlığa yol açar." },
                { title: "Bütçenizi Düzenli Kontrol Edin", content: "Haftalık veya aylık olarak bütçenizi kontrol edin. Bu, hedeflerinize ulaşıp ulaşmadığınızı görmenizi sağlar." },
                { title: "Esnek Olun", content: "Bütçenizi değişen koşullara göre güncelleyin. Beklenmedik harcamalar için esneklik payı bırakın." }
            ]
        },
        quiz: [
            {
                question: "Bütçe yaparken ilk adım nedir?",
                options: [
                    "Harcamaları kategorilere ayırmak",
                    "Gelir ve giderleri kaydetmek",
                    "Sadece tasarruf hedefi belirlemek",
                    "Kredi kartı almak"
                ],
                correct: 1,
                explanation: "Gelir ve giderlerini kaydetmek, bütçe planlamanın temelidir ve finansal durumunu net görmeni sağlar."
            },
            {
                question: "Harcama takibi için en etkili yöntem hangisidir?",
                options: [
                    "Hiç takip etmemek",
                    "Günlük harcama kaydı tutmak",
                    "Sadece aylık kontrol",
                    "Sadece büyük harcamaları kaydetmek"
                ],
                correct: 1,
                explanation: "Günlük harcama kaydı, nereye para harcadığını görmeni ve gereksiz harcamaları azaltmanı sağlar."
            },
            {
                question: "Hangi harcama kategorisi genellikle en yüksektir?",
                options: [
                    "Eğlence",
                    "Konut (kira/ev kredisi)",
                    "Giyim",
                    "Spor"
                ],
                correct: 1,
                explanation: "Konut giderleri genellikle en büyük harcama kalemidir ve bütçenin %30'unu geçmemelidir."
            },
            {
                question: "Bütçe açığı yaşadığında ilk yapılması gereken nedir?",
                options: [
                    "Daha fazla kredi çekmek",
                    "Gereksiz harcamaları azaltmak",
                    "Tüm harcamaları durdurmak",
                    "Hiçbir şey yapmamak"
                ],
                correct: 1,
                explanation: "Gereksiz harcamaları azaltmak, bütçe açığını kapatmanın en etkili ve sürdürülebilir yoludur."
            },
            {
                question: "50/30/20 bütçe kuralına göre gelirinin %20'si ne için ayrılmalıdır?",
                options: [
                    "Sadece eğlence",
                    "Tasarruf ve yatırım",
                    "Sadece harcama",
                    "Sadece kredi ödemeleri"
                ],
                correct: 1,
                explanation: "50/30/20 kuralına göre gelirinin %20'si tasarruf ve yatırım için ayrılmalıdır."
            }
        ]
    },
    {
        id: 4,
        title: "Kredi ve Borç",
        icon: "hand-holding-usd",
        color: ["#667eea", "#764ba2"],
        requiredCompleted: 3, // 3 ders tamamlandıktan sonra açılır
        learning: {
            sections: [
                {
                    title: "Kredi Nedir?",
                    icon: "question-circle",
                    content: "Kredi, gelecekte geri ödeme yapma sözü vererek şimdi para alma işlemidir.",
                    points: [
                        "Kredi kartı kullanımı",
                        "Kredi hesapları",
                        "Borç yönetimi",
                        "Faiz oranları"
                    ]
                }
            ],
            tips: [
                { title: "Krediyi Akıllıca Kullanın", content: "Sadece gerçekten ihtiyacınız olduğunda kredi alın." }
            ]
        },
        quiz: [
            {
                question: "Kredi kullanırken en önemli faktör nedir?",
                options: [
                    "Faiz oranı",
                    "Kredi limiti",
                    "Ödeme süresi",
                    "Hepsi"
                ],
                correct: 3,
                explanation: "Tüm faktörler önemlidir."
            }
        ]
    },
    {
        id: 5,
        title: "Emeklilik Planlaması",
        icon: "umbrella-beach",
        color: ["#f093fb", "#f5576c"],
        requiredCompleted: 4, // 4 ders tamamlandıktan sonra açılır
        learning: {
            sections: [
                {
                    title: "Emeklilik Planlaması",
                    icon: "calendar",
                    content: "Gelecek için finansal planlama yapmak önemlidir.",
                    points: [
                        "Emeklilik fonları",
                        "Sosyal güvenlik",
                        "Kişisel tasarruf",
                        "Yatırım planlaması"
                    ]
                }
            ],
            tips: [
                { title: "Erken Başlayın", content: "Emeklilik planlamasına erken yaşta başlayın." }
            ]
        },
        quiz: [
            {
                question: "Emeklilik planlamasına ne zaman başlamalısınız?",
                options: [
                    "Emeklilik yaklaşınca",
                    "Mümkün olduğunca erken",
                    "Hiç başlamamalı",
                    "Sadece devlet desteği yeterli"
                ],
                correct: 1,
                explanation: "Erken başlamak bileşik faiz avantajı sağlar."
            }
        ]
    },
    {
        id: 6,
        title: "Finansal Güvenlik",
        icon: "shield-alt",
        color: ["#667eea", "#764ba2"],
        requiredCompleted: 5, // 5 ders tamamlandıktan sonra açılır
        learning: {
            sections: [
                {
                    title: "Finansal Güvenlik",
                    icon: "lock",
                    content: "Dolandırıcılık ve finansal risklerden korunma.",
                    points: [
                        "Dolandırıcılık türleri",
                        "Güvenli ödeme yöntemleri",
                        "Kişisel bilgi koruması",
                        "Şüpheli işlemleri tanıma"
                    ]
                }
            ],
            tips: [
                { title: "Şüpheli İşlemleri Tanıyın", content: "Çok iyi görünen teklifler genellikle dolandırıcılıktır." }
            ]
        },
        quiz: [
            {
                question: "Şüpheli bir finansal teklif aldığınızda ne yapmalısınız?",
                options: [
                    "Hemen kabul edin",
                    "Araştırın ve doğrulayın",
                    "Hiçbir şey yapmayın",
                    "Arkadaşlarınıza sorun"
                ],
                correct: 1,
                explanation: "Her zaman araştırın ve doğrulayın."
            }
        ]
    }
];

export default function GameScreen() {
    const [screen, setScreen] = useState('lessons');
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [completedLessons, setCompletedLessons] = useState({});

    // Load from storage
    useEffect(() => {
        AsyncStorage.getItem('finansEduData').then(data => {
            if (data) {
                const d = JSON.parse(data);
                setCompletedLessons(d.completedLessons || {});
            }
        });
    }, []);

    // Save to storage
    useEffect(() => {
        AsyncStorage.setItem('finansEduData', JSON.stringify({ completedLessons }));
    }, [completedLessons]);

    // Get completed lessons count
    const getCompletedCount = () => {
        return Object.keys(completedLessons).length;
    };

    // Check if lesson is locked
    const isLessonLocked = (lesson) => {
        return getCompletedCount() < lesson.requiredCompleted;
    };

    // Complete lesson
    const completeLesson = (lessonId) => {
        setCompletedLessons(prev => ({
            ...prev,
            [lessonId]: true
        }));
    };

    // Settings Screen Component
    const SettingsScreen = () => (
        <LinearGradient colors={['#ecf0f1', '#bdc3c7']} style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setScreen('lessons')}>
                        <FontAwesome5 name="arrow-left" size={24} color="#e74c3c" />
                    </TouchableOpacity>
                    <Text style={[styles.headerText, { color: '#2c3e50' }]}>Ayarlar</Text>
                    <View style={{ width: 24 }} />
                </View>

                <ScrollView style={{ padding: 16 }}>
                    <View style={styles.settingsCard}>
                        <Text style={styles.settingsTitle}>Mevcut Durum</Text>
                        <View style={styles.statRow}>
                            <FontAwesome5 name="graduation-cap" size={20} color="#3498db" />
                            <Text style={styles.statText}>Tamamlanan Ders: {getCompletedCount()}</Text>
                        </View>
                        <View style={styles.statRow}>
                            <FontAwesome5 name="lock" size={20} color="#e74c3c" />
                            <Text style={styles.statText}>Kilitli Ders: {LESSONS.length - getCompletedCount()}</Text>
                        </View>
                    </View>

                    <View style={styles.settingsCard}>
                        <Text style={styles.settingsTitle}>Veri Yönetimi</Text>
                        <TouchableOpacity
                            style={styles.dangerButton}
                            onPress={() => {
                                Alert.alert(
                                    "Verileri Sıfırla",
                                    "Tüm ilerleme verileriniz silinecek. Bu işlem geri alınamaz. Devam etmek istiyor musunuz?",
                                    [
                                        { text: "İptal", style: "cancel" },
                                        {
                                            text: "Sıfırla",
                                            style: "destructive",
                                            onPress: () => {
                                                setCompletedLessons({});
                                                AsyncStorage.removeItem('finansEduData');
                                                Alert.alert("Başarılı", "Tüm veriler sıfırlandı!");
                                            }
                                        }
                                    ]
                                );
                            }}
                        >
                            <FontAwesome5 name="trash" size={16} color="#fff" />
                            <Text style={styles.dangerButtonText}>Tüm Verileri Sıfırla</Text>
                        </TouchableOpacity>
                        <Text style={styles.warningText}>
                            ⚠️ Bu işlem tüm ilerleme verilerinizi kalıcı olarak silecektir.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );


    if (screen === 'lessons') {
        return (
            <LinearGradient colors={['#ecf0f1', '#bdc3c7']} style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <FontAwesome5 name="coins" size={28} color="#e74c3c" />
                        <Text style={[styles.headerText, { color: '#2c3e50' }]}>Tamamlanan Ders: {getCompletedCount()}</Text>
                        <TouchableOpacity onPress={() => setScreen('settings')}>
                            <FontAwesome5 name="cog" size={24} color="#e74c3c" />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.title, { color: '#2c3e50' }]}>Dersleri Seç</Text>
                    <ScrollView>
                        {LESSONS.map(lesson => {
                            const isLocked = isLessonLocked(lesson);
                            return (
                                <TouchableOpacity
                                    key={lesson.id}
                                    style={[
                                        styles.lessonCard,
                                        {
                                            backgroundColor: isLocked ? '#f5f5f5' : '#fff',
                                            opacity: isLocked ? 0.7 : 1
                                        }
                                    ]}
                                    onPress={() => {
                                        if (isLocked) {
                                            Alert.alert(
                                                "Kilitli Ders",
                                                `Bu dersi açmak için ${lesson.requiredCompleted} ders tamamlanmalı. Şu anki tamamlanan ders sayınız: ${getCompletedCount()}`,
                                                [{ text: "Tamam", style: "default" }]
                                            );
                                        } else {
                                            setSelectedLesson(lesson);
                                            setScreen('learning');
                                        }
                                    }}
                                >
                                    <View style={{ position: 'relative' }}>
                                        <FontAwesome5
                                            name={lesson.icon}
                                            size={32}
                                            color={isLocked ? '#bdc3c7' : '#e74c3c'}
                                        />
                                        {isLocked && (
                                            <View style={styles.lockOverlay}>
                                                <FontAwesome5 name="lock" size={16} color="#e74c3c" />
                                            </View>
                                        )}
                                    </View>
                                    <Text style={[styles.lessonTitle, { color: isLocked ? '#bdc3c7' : '#2c3e50' }]}>
                                        {lesson.title}
                                    </Text>
                                    <Text style={[styles.lessonProgress, { color: isLocked ? '#bdc3c7' : '#7f8c8d' }]}>
                                        {isLocked ? `${lesson.requiredCompleted} ders tamamlanmalı` : completedLessons[lesson.id] ? 'Tamamlandı ✓' : 'Henüz tamamlanmadı'}
                                    </Text>
                                    {isLocked && (
                                        <View style={styles.levelRequirement}>
                                            <FontAwesome5 name="lock" size={12} color="#e74c3c" />
                                            <Text style={styles.levelRequirementText}>{lesson.requiredCompleted} ders gerekli</Text>
                                        </View>
                                    )}
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        );
    }

    if (screen === 'learning' && selectedLesson) {
        return (
            <LinearGradient colors={['#fff', '#f8f9fa']} style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => setScreen('lessons')}>
                        <FontAwesome5 name="arrow-left" size={20} color="#e74c3c" />
                        <Text style={{ color: '#e74c3c', fontWeight: 'bold' }}>Dön</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={{ alignItems: 'center', marginVertical: 16 }}>
                            <FontAwesome5 name={selectedLesson.icon} size={48} color="#e74c3c" />
                            <Text style={[styles.title, { color: '#2c3e50' }]}>{selectedLesson.title}</Text>
                        </View>
                        {selectedLesson.learning.sections.map((section, idx) => (
                            <View key={idx} style={styles.sectionCard}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                                    <FontAwesome5 name={section.icon} size={18} color="#3498db" />
                                    <Text style={styles.sectionTitle}>{section.title}</Text>
                                </View>
                                <Text style={styles.sectionContent}>{section.content}</Text>
                                {section.points && section.points.map((p, i) => (
                                    <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                        <FontAwesome name="check" size={14} color="#27ae60" />
                                        <Text style={styles.sectionPoint}>{p}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                        <View style={styles.tipsCard}>
                            <Text style={styles.tipsTitle}><FontAwesome5 name="lightbulb" size={16} color="#f39c12" /> Önemli İpuçları</Text>
                            {selectedLesson.learning.tips.map((tip, i) => (
                                <View key={i} style={styles.tipItem}>
                                    <Text style={styles.tipTitle}>{tip.title}</Text>
                                    <Text style={styles.tipContent}>{tip.content}</Text>
                                </View>
                            ))}
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => { setQuizIndex(0); setAnswers([]); setScreen('quiz'); }}>
                            <FontAwesome5 name="play" size={20} color="#fff" />
                            <Text style={styles.buttonText}>Quiz'e Başla</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        );
    }

    if (screen === 'quiz' && selectedLesson) {
        const q = selectedLesson.quiz[quizIndex];
        const answered = answers[quizIndex] !== undefined;
        return (
            <LinearGradient colors={['#fff', '#f8f9fa']} style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => setScreen('lessons')}>
                        <FontAwesome5 name="arrow-left" size={20} color="#e74c3c" />
                        <Text style={{ color: '#e74c3c', fontWeight: 'bold' }}>Derslere Dön</Text>
                    </TouchableOpacity>
                    <View style={{ margin: 16 }}>
                        <Text style={styles.quizCounter}>{quizIndex + 1}/{selectedLesson.quiz.length}</Text>
                        <Text style={styles.quizQuestion}>{q.question}</Text>
                        <Text style={styles.quizRequirement}>En az 4 soru doğru olmalı</Text>
                        {q.options.map((opt, i) => {
                            let btnStyle = styles.quizOption;
                            let txtStyle = styles.quizOptionText;
                            if (answered) {
                                if (i === q.correct) btnStyle = styles.quizOptionCorrect;
                                else if (i === answers[quizIndex]) btnStyle = styles.quizOptionWrong;
                            }
                            return (
                                <TouchableOpacity
                                    key={i}
                                    style={btnStyle}
                                    disabled={answered}
                                    onPress={() => {
                                        const newAnswers = [...answers];
                                        newAnswers[quizIndex] = i;
                                        setAnswers(newAnswers);
                                    }}>
                                    <Text style={txtStyle}>{opt}</Text>
                                </TouchableOpacity>
                            );
                        })}
                        {answered && (
                            <View style={{ marginTop: 12 }}>
                                <Text style={{ color: answers[quizIndex] === q.correct ? '#27ae60' : '#e74c3c', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
                                    {answers[quizIndex] === q.correct ? 'Doğru!' : 'Yanlış!'}
                                </Text>
                                <Text style={{ color: '#2c3e50', marginBottom: 8, fontSize: 16, textAlign: 'center' }}>{q.explanation}</Text>
                                {quizIndex < selectedLesson.quiz.length - 1 ? (
                                    <TouchableOpacity style={styles.button} onPress={() => setQuizIndex(quizIndex + 1)}>
                                        <Text style={styles.buttonText}>Sonraki Soru</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity style={styles.button} onPress={() => {
                                        const correctCount = selectedLesson.quiz.filter((q, idx) => answers[idx] === q.correct).length;
                                        const accuracy = Math.round((correctCount / selectedLesson.quiz.length) * 100);

                                        if (correctCount >= 4) {
                                            // En az 4 soru doğru ise dersi tamamla
                                            completeLesson(selectedLesson.id);
                                            setScreen('result');
                                        } else {
                                            // 4'ten az doğru ise uyarı ver
                                            Alert.alert(
                                                "Ders Tamamlanamadı",
                                                `En az 4 soru doğru olmalı. Şu anki doğru sayınız: ${correctCount}/5`,
                                                [
                                                    { text: "Tekrar Dene", style: "default" },
                                                    {
                                                        text: "Dersi Bırak",
                                                        style: "cancel",
                                                        onPress: () => setScreen('lessons')
                                                    }
                                                ]
                                            );
                                        }
                                    }}>
                                        <Text style={styles.buttonText}>Dersi Tamamla</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }

    if (screen === 'result' && selectedLesson) {
        const correctCount = selectedLesson.quiz.filter((q, idx) => answers[idx] === q.correct).length;
        const accuracy = Math.round((correctCount / selectedLesson.quiz.length) * 100);
        const isPassed = correctCount >= 4;

        return (
            <LinearGradient colors={['#2c3e50', '#34495e']} style={styles.container}>
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name={isPassed ? "trophy" : "times-circle"} size={64} color={isPassed ? "#f39c12" : "#e74c3c"} />
                    <Text style={styles.title}>{isPassed ? "Ders Tamamlandı!" : "Ders Tamamlanamadı"}</Text>
                    <Text style={styles.resultStat}>Doğru Cevap: {correctCount}/{selectedLesson.quiz.length}</Text>
                    <Text style={styles.resultStat}>Doğruluk: {accuracy}%</Text>
                    <Text style={[styles.resultStat, { color: isPassed ? '#27ae60' : '#e74c3c' }]}>
                        {isPassed ? "Başarılı! ✓" : "Başarısız! ✗"}
                    </Text>
                    <Text style={styles.resultMsg}>
                        {isPassed
                            ? (accuracy >= 90 ? "Mükemmel! 🎉" : accuracy >= 80 ? "Çok İyi! 👍" : "İyi İş! 👏")
                            : "En az 4 soru doğru olmalı. Tekrar deneyin! 📚"
                        }
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => setScreen('lessons')}>
                        <Text style={styles.buttonText}>Dön</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </LinearGradient>
        );
    }

    if (screen === 'settings') {
        return <SettingsScreen />;
    }

    return null;
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'transparent'
    },
    headerText: { color: '#fff', fontWeight: 'bold', fontSize: 20, marginLeft: 8 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginVertical: 12 },
    subtitle: { fontSize: 16, color: '#e0e0e0', textAlign: 'center', marginBottom: 24, paddingHorizontal: 20 },
    button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff6b35', borderRadius: 24, padding: 16, marginTop: 16, alignSelf: 'center', minWidth: 200, elevation: 4 },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18, marginLeft: 8 },
    lessonCard: { margin: 12, padding: 20, borderRadius: 16, alignItems: 'center', elevation: 4, backgroundColor: '#fff', borderWidth: 2, borderColor: '#e0e0e0' },
    lessonTitle: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50', marginTop: 8 },
    lessonProgress: { fontSize: 14, color: '#7f8c8d', marginTop: 4, fontWeight: '600' },
    backBtn: { flexDirection: 'row', alignItems: 'center', margin: 12, padding: 8, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 8 },
    sectionCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, margin: 8, elevation: 3, borderLeftWidth: 4, borderLeftColor: '#3498db' },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50', marginLeft: 8 },
    sectionContent: { fontSize: 15, color: '#34495e', marginVertical: 8, lineHeight: 22 },
    sectionPoint: { fontSize: 14, color: '#2c3e50', marginLeft: 8, lineHeight: 20 },
    tipsCard: { backgroundColor: '#fff3cd', borderRadius: 12, padding: 16, margin: 8, elevation: 3, borderWidth: 1, borderColor: '#ffeaa7' },
    tipsTitle: { fontSize: 16, fontWeight: 'bold', color: '#856404', marginBottom: 8 },
    tipItem: { marginBottom: 12, backgroundColor: '#fff', padding: 12, borderRadius: 8 },
    tipTitle: { fontWeight: 'bold', color: '#2c3e50', fontSize: 15 },
    tipContent: { color: '#34495e', fontSize: 14, lineHeight: 20 },
    quizCounter: { fontSize: 16, color: '#e74c3c', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
    quizQuestion: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50', marginBottom: 16, lineHeight: 24, textAlign: 'center' },
    quizOption: { backgroundColor: '#fff', borderRadius: 8, padding: 16, marginVertical: 8, borderWidth: 2, borderColor: '#bdc3c7', elevation: 2 },
    quizOptionText: { color: '#2c3e50', fontSize: 16, textAlign: 'center' },
    quizOptionCorrect: { backgroundColor: '#d4edda', borderRadius: 8, padding: 16, marginVertical: 8, borderWidth: 2, borderColor: '#27ae60', elevation: 3 },
    quizOptionWrong: { backgroundColor: '#f8d7da', borderRadius: 8, padding: 16, marginVertical: 8, borderWidth: 2, borderColor: '#e74c3c', elevation: 3 },
    resultStat: { fontSize: 20, color: '#e74c3c', marginVertical: 6, fontWeight: 'bold' },
    resultMsg: { fontSize: 20, color: '#27ae60', marginVertical: 12, fontWeight: 'bold', textAlign: 'center' },
    lockOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    levelRequirement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e74c3c'
    },
    levelRequirementText: {
        color: '#e74c3c',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8
    },
    settingsCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16
    },
    settingsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 8
    },
    statRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4
    },
    statText: {
        fontSize: 16,
        color: '#34495e',
        marginLeft: 8
    },
    dangerButton: {
        backgroundColor: '#e74c3c',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 8
    },
    dangerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    warningText: {
        color: '#e74c3c',
        fontSize: 14,
        marginBottom: 8
    },
    quizRequirement: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center'
    }
});
