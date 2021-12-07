-- Buatlah beberapa entity dibawah ini:
--   User, Singer, Track, Album, Playlist

-- Relasi antar entity adalah
--   1 User bisa memiliki 0 atau lebih Playlist
--   1 Singer bisa memiliki 1 atau lebih Track
--   1 Album bisa memiliki 1 atau lebih Track
--   1 Playlist bisa memiliki 1 atau lebih Track dan 1 Track bisa ada di banyak Playlist. Untuk relasi many to many, kita butuh entity tambahan sebagai penghubung, (conjunction)

-- Entity User mempunyai beberapa attribute yaitu:
--   user_id (int), name (varchar), email (varchar), password (varchar)

-- Entity Singer mempunyai beberapa attribute yaitu:
--   singer_id (int), name (varchar)

-- Entity Track mempunyai beberapa attribute yaitu:
--   track_id (int), title (varchar), singer_id (int), album_id (int)

-- Entity Album mempunyai beberapa attribute yaitu:
--   album_id (int), name (varchar), singer_id (int)

-- Entity Playlist memiliki beberapa attribute yaitu:
--   playlist_id (int), user_id (int), tracks (int)

CREATE DATABASE skilvul_music_streaming;

CREATE TABLE User (
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Singer (
    singer_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NUll
);

CREATE TABLE Track (
    track_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_singerId FOREIGN KEY (singer_id) REFERENCES Singer(singer_id),
    CONSTRAINT fk_albumId FOREIGN KEY (album_id) REFERENCES Album(album_id)
);

CREATE TABLE Album (
    album_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    singer_id INT NOT NULL,
    CONSTRAINT fk_singerId FOREIGN KEY (singer_id) REFERENCES Singer(singer_id)
);

CREATE TABLE Playlist (
    playlist_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    tracks INT NOT NULL,
    CONSTRAINT fk_userId FOREIGN KEY (user_id) REFERENCES User(user_id) 
);

CREATE TABLE Track_Playlist (
    track_id INT NOT NULL,
    playlist_id INT NOT NULL,
    CONSTRAINT fk_trackId FOREIGN KEY (track_id) REFERENCES Track(track_id),
    CONSTRAINT fk_playListId FOREIGN KEY (playlist_id) REFERENCES Playlist(playlist_id)
);