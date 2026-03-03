# Dokumentasi Modul element.js

## 1. Pendahuluan

`element.js` merupakan salah satu modul dalam CrootJS yang berfungsi untuk membantu manipulasi DOM dan pengelolaan elemen HTML secara lebih sederhana dan modular.

Modul ini mengurangi penulisan kode DOM yang berulang seperti:

- `document.getElementById()`
- `document.querySelector()`
- `addEventListener()`
- manipulasi `innerHTML`
- pengaturan class dan visibilitas elemen

Dengan adanya modul ini, proses pengembangan website menjadi lebih rapi, efisien, dan terstruktur.

---

## 2. Ruang Lingkup Modul

Secara umum, `element.js` menyediakan fitur berikut:

### 2.1 Manipulasi Elemen
- Mengubah isi elemen (`innerHTML`, `innerText`)
- Mengatur atribut
- Mengelola class

### 2.2 Event Handling
- Menambahkan event listener (click, input, change, dan lainnya)
- Mengelola interaksi pengguna

### 2.3 Kontrol Visibilitas
- Menampilkan elemen
- Menyembunyikan elemen
- Toggle tampilan

### 2.4 Render Konten Dinamis
- Memuat file HTML secara dinamis
- Membuat sistem partial page
- Mendukung pendekatan modular

Salah satu fungsi dalam kategori ini adalah `renderHTML`.

---

# 3. Dokumentasi Fungsi renderHTML

## 3.1 Deskripsi

Fungsi `renderHTML` digunakan untuk mengambil file HTML dari sebuah URL, lalu menampilkannya ke dalam elemen tertentu berdasarkan ID.

Fungsi ini memungkinkan halaman web memuat konten secara dinamis tanpa perlu melakukan reload halaman.

---

## 3.2 Sintaks

```javascript
renderHTML(id, urlHTML, callback = null)
```

---

## 3.3 Parameter

- **`id`**  
  ID elemen HTML yang menjadi tempat render konten.

- **`urlHTML`**  
  URL atau path file HTML yang ingin dimuat.

- **`callback` (opsional)**  
  Fungsi yang dijalankan setelah konten berhasil dimuat.

---

## 3.4 Cara Kerja

1. Mencari elemen dengan `document.getElementById()`.
2. Jika elemen tidak ditemukan, sistem menampilkan error di console.
3. Mengambil file menggunakan `fetch()`.
4. Mengubah response menjadi teks HTML.
5. Memasukkan HTML ke elemen menggunakan `innerHTML`.
6. Menjalankan `callback` jika tersedia.

---

## 3.5 Contoh Penggunaan

### HTML

```html
<div id="content"></div>
```

### JavaScript

```javascript
renderHTML("content", "about.html", () => {
    console.log("Konten berhasil dimuat");
});
```

Pada contoh di atas, file `about.html` akan dimuat dan ditampilkan di dalam elemen dengan ID `content`. Setelah proses selesai, callback akan dijalankan.

---

## 3.6 Kegunaan

- Membuat sistem partial page
- Memuat komponen HTML secara modular
- Mengurangi reload halaman
- Membangun website dinamis berbasis ES6 Modules

---

## 4. Kesimpulan

Modul `element.js` membantu pengelolaan elemen dan event secara lebih efisien.

Fungsi `renderHTML` memungkinkan pemuatan konten HTML secara dinamis menggunakan asynchronous JavaScript dan manipulasi DOM, sehingga mendukung pengembangan website yang modular, ringan, dan tidak bergantung pada framework kompleks.
