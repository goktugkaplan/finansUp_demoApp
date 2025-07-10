export const getLearningContentForLesson = (lessonId) => {
    const learningContent = {
        1: {
            title: "Tasarruf Temelleri",
            icon: "wallet",
            sections: [
                {
                    title: "Tasarruf Nedir ve Neden Önemlidir?",
                    icon: "bulb",
                    content: "Tasarruf, gelirinizin bir kısmını gelecekteki ihtiyaçlarınız için biriktirmektir. Bu, finansal güvenlik ve hedeflerinize ulaşmanız için temel bir alışkanlıktır.",
                    points: [
                        "Acil durumlar için güvenlik ağı oluşturur",
                        "Büyük alışverişler için para biriktirmenizi sağlar",
                        "Yatırım yapmak için sermaye oluşturur",
                        "Finansal bağımsızlık yolunda ilerlemenizi sağlar"
                    ]
                },
                {
                    title: "Tasarruf Stratejileri",
                    icon: "trending-up",
                    content: "Etkili tasarruf için farklı stratejiler kullanabilirsiniz. Bu stratejiler, gelir seviyeniz ve hedeflerinize göre değişir.",
                    points: [
                        "Önce kendine öde prensibi (maaş günü tasarruf)",
                        "50/30/20 kuralı (ihtiyaçlar/istekler/tasarruf)",
                        "Otomatik para transferi ile tasarruf",
                        "Küçük günlük tasarrufların gücü"
                    ]
                },
                {
                    title: "Acil Durum Fonu",
                    icon: "shield-checkmark",
                    content: "Acil durum fonu, beklenmedik harcamalar için ayrılan paradır. Bu fon, finansal güvenliğinizin temelidir.",
                    points: [
                        "3-6 aylık gider kadar biriktirin",
                        "Kolay erişilebilir hesapta tutun",
                        "Düzenli olarak kontrol edin ve güncelleyin",
                        "Sadece gerçek acil durumlar için kullanın"
                    ]
                }
            ],
            tips: [
                {
                    title: "Tasarruf Hedeflerinizi Belirleyin",
                    content: "Net ve ölçülebilir tasarruf hedefleri belirleyin. Örneğin: '3 ay içinde 10.000 TL biriktireceğim' gibi."
                },
                {
                    title: "Tasarrufunuzu Takip Edin",
                    content: "Aylık olarak tasarruf durumunuzu kontrol edin. Bu, hedeflerinize ulaşıp ulaşmadığınızı görmenizi sağlar."
                },
                {
                    title: "Tasarruf Alışkanlığı Edinin",
                    content: "Küçük miktarlarla başlayın ve zamanla artırın. Tutarlılık, büyük miktarlardan daha önemlidir."
                }
            ]
        },
        2: {
            title: "Yatırım ABC'si",
            icon: "trending-up",
            sections: [
                {
                    title: "Yatırım Nedir?",
                    icon: "help-circle",
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
                    icon: "scale",
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
                    icon: "construct",
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
                {
                    title: "Diversifikasyon Yapın",
                    content: "Tüm paranızı tek bir yatırım aracına yatırmayın. Farklı araçlar arasında dağıtım yaparak riskinizi azaltın."
                },
                {
                    title: "Zaman Avantajını Kullanın",
                    content: "Erken yaşta yatırıma başlayın. Bileşik faiz etkisi sayesinde zaman, en büyük avantajınızdır."
                },
                {
                    title: "Düzenli Yatırım Yapın",
                    content: "Aylık düzenli yatırım yapın. Bu, ortalama maliyet düşürme stratejisi ile piyasa dalgalanmalarından daha az etkilenmenizi sağlar."
                }
            ]
        },
        3: {
            title: "Bütçe Yönetimi",
            icon: "card",
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
                {
                    title: "Gerçekçi Bütçe Yapın",
                    content: "Bütçenizi gerçek gelir ve giderlerinize göre yapın. Çok katı bütçeler sürdürülemez ve başarısızlığa yol açar."
                },
                {
                    title: "Bütçenizi Düzenli Kontrol Edin",
                    content: "Haftalık veya aylık olarak bütçenizi kontrol edin. Bu, hedeflerinize ulaşıp ulaşmadığınızı görmenizi sağlar."
                },
                {
                    title: "Esnek Olun",
                    content: "Bütçenizi değişen koşullara göre güncelleyin. Beklenmedik harcamalar için esneklik payı bırakın."
                }
            ]
        }
    };

    return learningContent[lessonId] || {
        title: "Bilinmeyen Konu",
        icon: "help-circle",
        sections: [],
        tips: []
    };
};

export const getQuestionsForLesson = (lessonId) => {
    const questions = {
        1: [
            {
                question: "Aylık gelirinin %20'sini tasarruf etmek için en iyi yöntem hangisidir?",
                options: [
                    "Gelir geldiğinde hemen harcamak",
                    "Otomatik para transferi ile maaş günü tasarruf yapmak",
                    "Sadece kalan parayı biriktirmek",
                    "Hiç tasarruf yapmamak"
                ],
                correctAnswer: 1,
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
                correctAnswer: 1,
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
                correctAnswer: 2,
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
                correctAnswer: 1,
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
                correctAnswer: 1,
                explanation: "Aylık bütçe takibi, hedeflerine ulaşıp ulaşmadığını görmeni ve gerekli düzenlemeleri yapmanı sağlar."
            }
        ],
        2: [
            {
                question: "Yatırım yaparken en önemli prensip nedir?",
                options: [
                    "Tüm parayı tek seferde yatırmak",
                    "Risk dağılımı yapmak",
                    "Sadece yüksek riskli yatırımlar",
                    "Hiç yatırım yapmamak"
                ],
                correctAnswer: 1,
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
                correctAnswer: 2,
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
                correctAnswer: 1,
                explanation: "Bileşik faiz etkisi sayesinde, uzun vadeli yatırımlar daha büyük getiri potansiyeli sunar."
            },
            {
                question: "Yatırım kararı verirken hangi faktörü göz ardı etmemelisin?",
                options: [
                    "Risk toleransın",
                    "Komşunun yatırımları",
                    "Sosyal medya trendleri",
                    "Arkadaş önerileri"
                ],
                correctAnswer: 0,
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
                correctAnswer: 1,
                explanation: "Düzenli yatırım, ortalama maliyet düşürme stratejisi ile piyasa dalgalanmalarından daha az etkilenir."
            }
        ],
        3: [
            {
                question: "Bütçe yaparken ilk adım nedir?",
                options: [
                    "Harcamaları kategorilere ayırmak",
                    "Gelir ve giderleri kaydetmek",
                    "Sadece tasarruf hedefi belirlemek",
                    "Kredi kartı almak"
                ],
                correctAnswer: 1,
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
                correctAnswer: 1,
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
                correctAnswer: 1,
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
                correctAnswer: 1,
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
                correctAnswer: 1,
                explanation: "50/30/20 kuralına göre gelirinin %20'si tasarruf ve yatırım için ayrılmalıdır."
            }
        ]
    };

    return questions[lessonId] || [];
}; 