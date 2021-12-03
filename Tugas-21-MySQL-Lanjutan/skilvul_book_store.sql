-- CREATE database bernama skilvulbookstore
CREATE DATABASE skilvulbookstore;

-- Buatlah table bernama penerbit dengan attribute/column yang berisi:
--   id Tipe data: Integer (10) Not Null Auto Increment Primary Key
--   nama Tipe data: String Max of Length: 50 NULL
--   kota Tipe data: String Max of Length: 50 NULL
CREATE TABLE penerbit (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL
);

-- Buatlah table bernama penulis dengan attribute/column yang berisi:
--   id Tipe data: Integer (10) Not Null Auto Increment Primary Key
--   nama Tipe data: String Max of Length: 50 NULL
--   kota Tipe data: String Max of Length: 50 NULL
CREATE TABLE penulis (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL
);

-- Kita akan melakukan relasi pada table terakhir yang bernama buku terhadap kedua table yang ada.
--   1 penerbit dapat memiliki banyak buku
--   1 buku hanya memiliki 1 penulis

-- Buatlah table bernama buku lengkap dengan relasi terhadap penulis dan penerbit dengan attribute/column yang berisi:
--   id Tipe data: Integer (10) Not Null Auto Increment Primary Key
--   ISBN Tipe data: String Max of length: 50 NULL
--   judul Tipe data: String Max of length: 50 NULL
--   penulis Tipe data: String Max of length: 50 NULL
--   penerbit Tipe data: Integer (10) NULL
--   harga Tipe data: Integer (10) NULL
--   stock Tipe data: Integer (10) NULL
CREATE TABLE buku (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ISBN VARCHAR(50) NULL,
    judul VARCHAR(50) NULL,
    penulis INT(10) NULL,
    penerbit INT(10) NULL,
    harga INT(10) NULL,
    stock INT(10) NULL,
    constraint fk_penulis foreign key (penulis) references penulis(id),
    constraint fk_penerbit foreign key (penerbit) references penerbit(id)
);

-- Lakukan INNER JOIN dari table buku terhadap table penerbit
SELECT * FROM buku
INNER JOIN penerbit
ON buku.penerbit = penerbit.id;

-- Lakukan LEFT JOIN dari table buku terhadap table penerbit
SELECT * FROM buku
LEFT JOIN penerbit
ON buku.penerbit = penerbit.id;

-- Lakukan RIGHT JOIN dari table buku terhadap table penerbit
SELECT * FROM buku
RIGHT JOIN penerbit
ON buku.penerbit = penerbit.id;

-- Cek nilai MAX dari column harga pada table book yang memiliki jumlah stok buku di bawah 10
SELECT MAX(harga)
FROM buku
WHERE stock < 10;

-- Cek nilai MIN dari column harga pada table book
SELECT MIN(harga)
FROM buku;

-- Gunakan COUNT untuk melihat list data dengan kondisi harga buku di bawah 100000
SELECT COUNT(id)
FROM buku
WHERE harga < 10000;