# FinansUp 📈💰

FinansUp, kullanıcıların finansal okuryazarlığını artırmak ve sağlıklı para yönetimi alışkanlıkları kazanmalarını sağlamak amacıyla geliştirilmiş bir React Native mobil uygulamasıdır.

## 🎯 Proje Amacı

FinansUp, özellikle genç kullanıcıların finansal bilinçlerini geliştirmek için tasarlanmış bir platformdur. Uygulama, oyunlaştırılmış öğrenme deneyimi ile kullanıcıların:

- Finansal terimleri öğrenmesini
- Tasarruf alışkanlıkları kazanmasını
- Yatırım temellerini anlamasını
- Bütçe yönetimi becerilerini geliştirmesini
- Topluluk içinde finansal bilgi paylaşımını

sağlamayı hedeflemektedir.

## ✨ Özellikler

### 🏠 Ana Sayfa
- Kişiselleştirilmiş karşılama ekranı
- Günlük görev takibi ve ilerleme durumu
- Finansal bilgi kartları
- Mini quiz ve rozet sistemi
- Harcama kategorileri takibi

### 📚 Finansal Eğitim (FinansEdu)
- **Tasarruf Temelleri**: Tasarruf stratejileri ve acil durum fonu
- **Yatırım ABC'si**: Yatırım araçları ve risk-getiri ilişkisi
- **Bütçe Yönetimi**: 50/30/20 kuralı ve harcama takibi
- İnteraktif dersler ve quizler
- İlerleme takibi ve sertifika sistemi

### 🎮 Oyunlaştırılmış Öğrenme
- Mini yatırım simülasyonları
- Finansal terim öğrenme oyunları
- Başarı rozetleri ve puan sistemi
- Günlük görevler ve ödüller

### 👥 Topluluk
- Kullanıcılar arası bilgi paylaşımı
- Finansal ipuçları ve deneyimler
- Soru-cevap platformu

### 💰 Birikim Takibi
- Tasarruf hedefleri belirleme
- İlerleme takibi
- Birikim stratejileri önerileri

### 👤 Profil Yönetimi
- Kişisel bilgiler
- İlerleme istatistikleri
- Başarı geçmişi
- Ayarlar ve tercihler

## 🛠️ Teknolojiler

### Frontend
- **React Native** (0.79.2) - Cross-platform mobil uygulama geliştirme
- **Expo** (53.0.9) - Geliştirme ve dağıtım platformu
- **React Navigation** - Navigasyon yönetimi
- **React Native Gesture Handler** - Dokunma ve hareket algılama

### Backend & Veritabanı
- **Firebase** - Backend servisleri
  - Authentication - Kullanıcı kimlik doğrulama
  - Firestore - Veritabanı
  - Storage - Dosya depolama

### UI/UX Kütüphaneleri
- **Expo Linear Gradient** - Gradient efektleri
- **React Native Vector Icons** - İkon kütüphanesi
- **React Native Progress** - İlerleme çubukları
- **React Native SVG** - SVG desteği

### Veri Yönetimi
- **AsyncStorage** - Yerel veri depolama

## 📱 Ekran Görüntüleri
<img width="367" height="694" alt="foto1" src="https://github.com/user-attachments/assets/30c8518c-1445-4742-b03c-290294b90aac" />



### Ana Özellikler
- **Ana Sayfa**: Kişiselleştirilmiş dashboard
- **FinansEdu**: Eğitim modülleri ve dersler
- **Topluluk**: Kullanıcı etkileşimi
- **Profil**: Kullanıcı bilgileri ve istatistikler

## 🚀 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn
- Expo CLI
- iOS Simulator (macOS) veya Android Emulator

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/your-username/finansUp.git
cd finansUp
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Firebase yapılandırması**
- `service/firebaseConfig.js` dosyasındaki Firebase yapılandırmasını kendi projenizle güncelleyin
- Firebase Console'dan yeni bir proje oluşturun
- Authentication ve Firestore servislerini etkinleştirin

4. **Uygulamayı başlatın**
```bash
npm start
# veya
expo start
```

5. **Platform seçimi**
- iOS için: `i` tuşuna basın
- Android için: `a` tuşuna basın
- Web için: `w` tuşuna basın

## 📁 Proje Yapısı

```
finansUp/
├── App.js                          # Ana uygulama bileşeni
├── package.json                    # Proje bağımlılıkları
├── assets/                         # Statik dosyalar
│   ├── fonts/                      # Özel fontlar
│   ├── cardImage/                  # Kart görselleri
│   └── *.png                      # Uygulama ikonları
├── components/                     # Yeniden kullanılabilir bileşenler
│   ├── accumulation/              # Birikim modülü
│   ├── card/                      # Kart bileşenleri
│   ├── community/                 # Topluluk modülü
│   ├── game/                      # Oyun bileşenleri
│   ├── login/                     # Giriş ekranları
│   ├── navigation/                # Navigasyon bileşenleri
│   └── profile/                   # Profil bileşenleri
├── data/                          # Veri dosyaları
│   └── lessonData.js              # Ders içerikleri
├── screens/                       # Ana ekranlar
│   ├── WelcomeScreen.js           # Karşılama ekranı
│   ├── LessonScreen.js            # Ders ekranı
│   ├── LearningScreen.js          # Öğrenme ekranı
│   ├── QuizScreen.js              # Quiz ekranı
│   ├── ResultsScreen.js           # Sonuç ekranı
│   └── Store.js                   # Mağaza ekranı
├── service/                       # Servis dosyaları
│   └── firebaseConfig.js          # Firebase yapılandırması
├── HomeScreen.js                  # Ana sayfa (eski)
├── HomeScreen2.js                 # Ana sayfa (yeni)
└── StepFlow.js                    # Adım akışı
```

## 🎨 Tasarım Sistemi

### Renkler
- **Ana Renk**: `#1ec773` (Yeşil)
- **İkincil Renk**: `#4facfe` (Mavi)
- **Arka Plan**: `#ffffff` (Beyaz)
- **Metin**: `#333333` (Koyu Gri)

### Fontlar
- **Inter** font ailesi kullanılmaktadır
- Regular, Medium, SemiBold, Bold ağırlıkları

### Bileşenler
- Tutarlı kart tasarımı
- Gradient arka planlar
- Modern ikonlar
- Responsive tasarım

## 🔧 Geliştirme

### Kod Standartları
- ES6+ JavaScript kullanımı
- Functional component yaklaşımı
- Hooks kullanımı
- Prop-types ile tip kontrolü (önerilen)

### Yeni Özellik Ekleme
1. İlgili bileşeni `components/` klasöründe oluşturun
2. Navigasyon yapısını `App.js`'de güncelleyin
3. Gerekli veri yapılarını `data/` klasöründe tanımlayın
4. Firebase entegrasyonu için servis dosyalarını güncelleyin

### Test Etme
```bash
# Linter kontrolü
npm run lint

# Type checking (TypeScript kullanılıyorsa)
npm run type-check
```

## 📊 Performans

### Optimizasyonlar
- Lazy loading kullanımı
- Image optimization
- Bundle size optimization
- Memory leak prevention

### Monitoring
- Firebase Analytics entegrasyonu
- Crash reporting
- Performance monitoring

## 🔒 Güvenlik

### Kullanıcı Verileri
- Firebase Authentication ile güvenli kimlik doğrulama
- AsyncStorage ile yerel veri şifreleme
- API key'lerin güvenli saklanması

### Veri Koruma
- GDPR uyumluluğu
- Kullanıcı gizlilik ayarları
- Veri silme seçenekleri

## 🚀 Dağıtım

### Expo Build
```bash
# Production build
expo build:android
expo build:ios

# EAS Build (önerilen)
eas build --platform android
eas build --platform ios
```

### App Store Dağıtımı
1. App Store Connect'te uygulama oluşturun
2. Gerekli sertifikaları yükleyin
3. Build'i yükleyin ve inceleme sürecini başlatın

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👥 Geliştirici Ekibi

- **Proje Yöneticisi**: [İsim]
- **Frontend Geliştirici**: [İsim]
- **Backend Geliştirici**: [İsim]
- **UI/UX Tasarımcı**: [İsim]

## 📞 İletişim

- **Email**: info@finansup.com
- **Website**: https://finansup.com
- **Twitter**: [@finansup](https://twitter.com/finansup)

## 🙏 Teşekkürler

- React Native topluluğu
- Expo ekibi
- Firebase ekibi
- Tüm katkıda bulunanlara

---

**FinansUp** - Finansal geleceğinizi bugünden inşa edin! 💚 
