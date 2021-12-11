**1. Apa perbedaan antara static web server dan dynamic web server?**
    *) Server web **statis** adalah  web statis, dan hanya administrator yang dapat memodifikasi konten di web.
    *) Sebuah web server **dinamis** adalah  web yang memungkinkan pengguna untuk memodifikasi konten dan memanipulasi input dan output.

**2. Jelaskan arsitektur static site dan dynamic site**
    *) Dalam **arsitektur situs statis**, browser mengirimkan permintaan ke server web yang berisi HTML, CSS, Javascript, dan file pendukung lainnya di server web, dan kemudian server  mengirimkan  file respons ke browser.
    *) **Arsitektur situs dinamis** adalah sebagai berikut:
    Klien menggunakan method request untuk mengirim permintaan ke server web. Permintaan ini diterima oleh server web dan dikirim ke aplikasi web. Dalam aplikasi web, pengolahan data dilakukan sebagai berikut: Saat mengirim ke method yang mengirim ke database,  data diambil dari database, data yang diterima disematkan  dalam HTML, diteruskan ke server web  bersama dengan static resource, lalu jawaban ini akan dikirim ke klien dan ditampilkan di browser.

**3. Apa saja yang dapat kita buat pada sisi server?**
    *) Pengolahan data dan CRUD (Create, Read, Update, Delete) dapat dilakukan di sisi server dan dapat dilihat di sisi klien sesuai kebutuhan.

**4. Mohon jelaskan apa itu RESTful?**
    *) Restful adalah arsitektur yang menyediakan standar untuk komunikasi antara sistem komputer melalui web dan menggunakan protokol HTTP untuk berkomunikasi. Restful memungkinkan Anda untuk menerapkan implementasi klien dan server satu per satu atau satu per satu. RESTful menggunakan URI untuk mengidentifikasi sumber daya yang tersedia dan disajikan dalam format teks, JSON, atau XML. Setiap saat Anda perlu  menyertakan semua data dan parameter dalam permintaan klien saat mengakses titik akhir.

**5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)**
    *) **GET**, untuk mendapatkan resource dari server sesuai dengan request yang diminta
    *) **POST**, untuk menambahkan entitas baru ke resource yang ditentukan
    *) **PUT**, untuk memperbarui atau mengganti suatu entitas dari target resource
    *) **DELETE**, untuk menghapus resource yang ditentukan

**6. Apa fungsi dari Response Codes?**
    *) Untuk mengingatkan pengguna tentang informasi tentang  operasi yang berhasil dan mengidentifikasi masalah ketika  halaman web atau resource tidak dimuat dengan benar