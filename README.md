# React-Firebase Chat App

Bu proje, Firebase altyapısı kullanarak gerçek zamanlı bir sohbet uygulaması oluşturmak için geliştirilmiştir. Kullanıcılar, e-posta ile sisteme giriş yapabilir, mesajlarını Firestore veritabanına kaydedebilir.

## Kullanılan Teknolojiler

### Firebase Kullanımı

- **Firebase Authentication**: Uygulamada e-posta ve şifre ile işlemler yapılmaktadır. Kullanıcılar hesap oluşturabilir, giriş yapabilir ve çıkış yapabilirler.
- **Firestore Database**: Mesajlar ve sohbetler Firestore Database'de saklanmaktadır. Bu sayede gerçek zamanlı veri senkronizasyonu sağlanır.

### Kullanılan Kütüphaneler

- **emoji-picker-react**: Sohbet sırasında emoji eklemek için kullanılan popüler bir emoji seçici bileşeni.
- **react-toastify**: Kullanıcı geri bildirimlerini (başarılı işlemler, hatalar vb.) göstermek için kullanılan bildirim kütüphanesi.
- **firebase**: Firebase SDK'sı, Authentication, Firestore Database ve Storage entegrasyonu için kullanılır.
- **zustand**: Uygulamada durum yönetimi için hafif ve etkili bir çözüm olarak kullanılan Zustand kütüphanesi.
