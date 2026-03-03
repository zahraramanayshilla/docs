# Panduan Penggunaan mongo.js

## Pendahuluan

`mongo.js` adalah modul untuk menghubungkan aplikasi ke database MongoDB.
File ini biasanya dipanggil sebelum server atau aplikasi utama dijalankan.

---

# 1. Persiapan

## 1.1 Install Dependency

Install MongoDB driver terlebih dahulu:

```bash
npm install mongodb
```

Pastikan MongoDB sudah berjalan di komputer atau server Anda.

---

# 2. Membuat File mongo.js

Buat file:

```
mongo.js
```

Isi dengan kode berikut:

```javascript
const { MongoClient } = require("mongodb");

let client;

async function mongo(uri, options = {}) {
  try {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log("MongoDB Connected");
    return client;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}

module.exports = mongo;
```

---

# 3. Cara Menggunakan mongo.js

## 3.1 Import di File Utama

Misalnya di `server.js` atau `index.js`:

```javascript
const mongo = require("./mongo");

async function startApp() {
  try {
    await mongo("mongodb://localhost:27017/mydatabase");
    console.log("Database siap digunakan");
  } catch (err) {
    console.error("Gagal koneksi database:", err);
  }
}

startApp();
```

---

# 4. Menggunakan Database Setelah Terhubung

Contoh mengambil collection dan insert data:

```javascript
const mongo = require("./mongo");

async function startApp() {
  const client = await mongo("mongodb://localhost:27017/mydatabase");

  const db = client.db("mydatabase");
  const users = db.collection("users");

  await users.insertOne({
    name: "Budi",
    age: 25
  });

  console.log("Data berhasil ditambahkan");
}

startApp();
```

---

# 5. Menggunakan Environment Variable (Disarankan)

Install dotenv:

```bash
npm install dotenv
```

Buat file `.env`:

```
MONGO_URI=mongodb://localhost:27017/mydatabase
```

Gunakan di aplikasi:

```javascript
require("dotenv").config();
const mongo = require("./mongo");

mongo(process.env.MONGO_URI);
```

---

# 6. Error Handling

Gunakan try/catch untuk mencegah aplikasi crash:

```javascript
try {
  await mongo(process.env.MONGO_URI);
} catch (err) {
  console.error("Koneksi gagal:", err.message);
  process.exit(1);
}
```

---

# 7. Menutup Koneksi

Untuk menutup koneksi saat aplikasi berhenti:

```javascript
process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});
```

---

# Best Practice

- Gunakan environment variable
- Jangan hardcode password
- Gunakan async/await
- Tangani error dengan benar
- Tutup koneksi saat aplikasi shutdown

---

# Kesimpulan

`mongo.js` mempermudah pengelolaan koneksi MongoDB agar kode tetap modular dan rapi.
File ini sebaiknya hanya menangani koneksi database, bukan logika bisnis aplikasi.
