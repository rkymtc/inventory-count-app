# Sayım Fişi Uygulaması

## 🚀 Özellikler


- **Gelişmiş Ürün Yönetimi**: 
  - Ürün arama ve filtreleme
  - Detaylı ürün bilgisi görüntüleme
 
- **Kapsamlı Sayım Sistemi**:
  - Sayım fişi oluşturma ve düzenleme
  - Çoklu sayım fişi yönetimi

- **Veri Senkronizasyonu**: Yerel depolama ve veri yedekleme

## 📱 Ekranlar

1. **Giriş Ekranı**
   - Şirket seçimi
   - Fabrika/İşyeri seçimi
   - Depo/Ambar seçimi
   
2. **Ürün Listesi**
   - Hızlı arama fonksiyonu
   - Kategori filtreleme
   - Ürün detay görüntüleme
   
3. **Sayım Fişi Yönetimi**
   - **Ürün Ara**: Sayıma eklenecek ürünleri bulma
   - **Liste**: Mevcut sayım içeriğini görüntüleme ve düzenleme
   
4. **Ürün Detay**
   - Miktar düzenleme
   - Birim fiyat bilgisi
   - Açıklama ekleme imkanı
   

## 🛠️ Teknoloji

- **Frontend**: React Native, Expo
- **State Yönetimi**: React Context API
- **Navigasyon**: React Navigation
- **Veri Saklama**: AsyncStorage
- **UI Bileşenleri**: Özel tasarlanmış bileşenler

## ⚙️ Kurulum

### Gereksinimler

- Node.js 14.0 veya üzeri
- npm veya yarn
- iOS için XCode (macOS)
- Android için Android Studio

### Adımlar


1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

2. Uygulamayı başlatın:
   ```bash
   npm start
   # veya
   yarn start
   ```

3. Uygulamayı çalıştırın:
   - Android için: `a` tuşuna basın veya `npm run android`
   - iOS için: `i` tuşuna basın veya `npm run ios`

## 📂 Proje Yapısı

```
src/
├── assets/           # Görseller, fontlar ve statik dosyalar
├── components/       # Yeniden kullanılabilir UI bileşenleri
│   ├── common/       # Temel bileşenler (Button, Input, Card)
│   └── features/     # Özelliğe özgü bileşenler
├── context/          # React Context dosyaları (ThemeContext vb.)
├── navigation/       # Navigasyon yapılandırması
├── screens/          # Uygulama ekranları
├── services/         # API ve veri servis fonksiyonları
└── utils/            # Yardımcı fonksiyonlar ve sabitler
```

## 🔧 Sorun Giderme

- **Bağımlılık Sorunları**:
  ```bash
  npm run clean
  npm install
  ```

- **Metro Bundler Sorunları**:
  ```bash
  npm start -- --reset-cache
  ```

- **Pod Sorunları (iOS)**:
  ```bash
  cd ios && pod install && cd ..
  ```

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
