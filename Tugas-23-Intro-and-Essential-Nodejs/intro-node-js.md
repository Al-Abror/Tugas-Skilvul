1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
    - Node.js adalah lingkungan runtime JavaScript open-source, lintas platform, back-end yang berjalan pada V8 engine dan mengeksekusi kode JavaScript di luar browser web. Node.js memungkinkan pengembang menggunakan JavaScript untuk menulis alat baris perintah dan untuk skrip sisi server—menjalankan skrip sisi server untuk menghasilkan konten halaman web dinamis sebelum halaman dikirim ke browser web pengguna.
    - perbedannya Node.js adalah adanya kumpulan API.

2. Mohon jelaskan arsitektur dari Node.js?
    1) Javascript menggunakan konsep single thread, yang berarti hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program.
    2) Walaupun Node.js tidak mendukung multi-threading, ia memiliki implementasi event loop untuk mengerjakan kode program secara asynchronous. 
    Terdapat event queue yang berguna sebagai penampung ketika terdapat perintah baru yang akan dieksekusi. Event loop akan memfasilitasi kondisi ini, event loop akan memeriksa terus menerus, ketika antrian kosong di call stack maka akan menambah antrian baru dari event queue sampai semua perintah selesai di eksekusi.
    3) Server side scripting
    Javascript merupakan bahasa pemrograman yang digunakan di front end side. Sehingga kita hanya bisa mengerjakan javascript dengan menggunakan browser untuk menampilkan hasil eksekusinya. Tetapi dengan menggunakan NodeJS kita dapat menjalankan javascript di server side menggunakan terminal command line menggunakan perintah “node”.

3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
    Built-in Module merupakan Modul-modul yang sudah disediakan sejak kita install Nodejs.
    External Module merupakan Modul yang kita import
    Custom Module merupakan Modul yang tidak ada di dalam build-in dan NPM, maka kita harus buat sendiri.

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?
 Built-in Module
    http, fs, url, querystring, os
 External Module
    require()
 Custom Module 
    exports.salamPagi = function () {
        return "Selamat Pagi!";
    };