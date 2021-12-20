1. Jelaskan apa yang dimaksud dengan **container** pada docker ! <br>
**contaienr** adalah Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.

<br>

2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** ! <br>
**Container** dapat berjalan langsung di sistem operasi dan container itu sendiri tidak memiliki akses ke kernel. namun, **Mesin virtual**  menjalankan aplikasi menggunakan kernelnya sendiri

<br>

3. Apa yang dimaksud dengan **docker file** ? <br>
**Dockerfile** adalah file teks yang berisi semua perintah yang bisa dijalankan user pada baris perintah untuk membuat image. Termasuk semua instruksi yang diperlukan oleh docker untuk membangun image.


<br>

4. Apa yang dimaksud dengan **docker registery** ? <br>
**Registry** adalah sebuah repository atau sebuah penyimpanan image terpusat yang dapat diakses oleh banyak orang

<br>

5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung ! <br>
Dengan cara membuat **Docker Compose**, Docker Compose nantinya akan mengelompokkan container yang berbeda menjadi satu container sehingga dapat terhubung dan dijalankan secara bersamaan.