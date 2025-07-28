# Bookstore

Bir arkadaşınla birlikte bir `Kitap Alışveriş Sitesi` projesine başladın.
Arkadaşın state ve props kullanarak belli bir aşamaya kadar getirdi. Proje daha fazla büyümeden bu aşamada `React ContextAPI` kullanmayı düşündün ve çalışmalara başladın.

**2 ana hedefin var:**

1. Projeyi ContextAPI kullanır hale getirmek
2. Add to cart butonunu ve özelliğini çalışır hale getirmek

## Konrol listesi

### 1. `ProductContext` oluştur ve kullan:

- `src` altında `contexts` klasörü ve içinde `ProductContextProvider.jsx` dosyası oluştur.
  - `createContext` ile bir `ProductContext` oluştur. Export etmeyi unutma.

- `ProductContext.Provider`ı return edecek bir component fonksiyonu oluştur. Adı `ProductContextProvider` olsun. Default olarak export et.
  - İçinde `products` adıyla bir state oluştur. Başlangıç değeri olarak `data` dosyasındaki içeriği kullanmalısın.
  - Bu state'i `ProductContext.Provider`'a value olarak ver.
  - Bu component `children` propsu almalı ve return etmeli.

- `App.jsx`de tüm kodu bu provider component ile sarmala.
- `App.jsx`de `Products` componentine gönderdiğin propları ve ilgili kısımları sil.
- `Products.jsx`de, `useContext` ve `ProductContext` kullanarak `products` verisini al ve kullan. Kullanılmayan props kodunu sil.

### 2. `CardContext` oluştur ve kullan:

- `src/contexts` içinde `CartContextProvider.jsx` dosyası oluştur.
  - `createContext` ile bir `CartContext` oluştur. Export etmeyi unutma.
- `CartContext.Provider`ı return edecek bir component fonksiyonu oluştur. Adı `CartContextProvider` olsun. Default olarak export et.
  - İçinde `cart` adıyla bir state oluştur.
  - `addItem` metodu oluştur.
  - `removeItem` metodu oluştur.
  - CartContext.Provider'a `cart`, `addItem` ve `removeItem`ı `value` olarak vermeyi unutma.
  - Bu component `children` propsu almalı ve return etmeli.

- `App.jsx`de uygulamanı bu provider ile de sarmala.
- `App.jsx`de `Navigation` ve `ShoppingCart` componentine gönderdiğin propları sil.
- `Navigation.jsx`de `useContext` ve `CartContext` kullanarak cart bilgisini al.
- `ShoppingCart.jsx`de `useContext` ve `CartContext` kullanarak cart bilgisini al.
- `ShoppingCartItem.jsx`de `useContext` ve `CartContext` kullanarak removeItem fonksiyonu al ve kullan. Kullanılmayan props kodunu sil.
- `Products.jsx`de `useContext` ve `CartContext` kullanarak addItem fonksiyonunu al.

### 3. `addItem` ve `removeItem` fonksiyonlarını doğru yerlerde kullan.

```sh
ÖNEMLİ NOT:
Her adımdan sonra testlerde ilerleme olmayabilir.
Uygulamayı çalışır hale getirmeye odaklanırsanız
günün sonunda tüm testler geçecektir.
```

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Çalıştırın ve Browserda Görüntüleyin

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

Bu komut projeyi çalıştıracak ve bir link verecek. Bu linki browserda açın ve yazdıklarınızın çıktısını gözlemleyin.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Testlerin çalıştığı trminali açık tutun ve test çıktılarını izleyin
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

## 🧪 Otomatik Değerlendirme Sistemi

Bu proje otomatik test sistemi ile gelir. Test sonuçları terminal penceresinde görünür. Kırmızı (❌) testleri yeşile (✅) çevirmeye odaklanın.

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

- **npm komutları çalışmıyor:** Node.js kurulu olduğundan emin olun
- **Testler çalışmıyor:** Terminal penceresini kapatıp `npm run c2w` komutunu tekrar çalıştırın

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile projeyi çalıştırın ve size verdiği linki açarak yaptıklarınızı takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
