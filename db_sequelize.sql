-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Agu 2018 pada 07.36
-- Versi server: 10.1.31-MariaDB
-- Versi PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sequelize`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `biodata`
--

CREATE TABLE `biodata` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `jurusan` varchar(50) DEFAULT NULL,
  `absen` int(3) DEFAULT NULL,
  `alamat` varchar(150) DEFAULT NULL,
  `jk` varchar(10) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `biodata`
--

INSERT INTO `biodata` (`id`, `nama`, `jurusan`, `absen`, `alamat`, `jk`, `createdAt`, `updatedAt`) VALUES
(2, 'Agus Prasetyo', 'Rekayasa Perangkat Lunak', 1, 'Desa Gesikharjo', 'Laki-laki', '0000-00-00 00:00:00', '2018-08-16 02:11:30'),
(3, 'Eko Prastiyo', 'Instalasi Listrik', 4, 'Ds. Sugiharjo', 'Laki-laki', '2018-08-11 11:43:08', '2018-08-11 11:43:08'),
(4, 'Alda Ardelia', 'Tata Boga', 10, 'Ds. Palang', 'Perempuan', '2018-08-11 11:44:17', '2018-08-11 11:44:17'),
(5, 'Adhi Setyo Wibisono', 'Teknik Kendaraan Ringan', 2, 'Ds. Pliwetan', 'Laki-laki', '2018-08-11 11:46:26', '2018-08-11 11:46:26'),
(6, 'Arif Budi Kusuma', 'Teknik Pengelasan', 20, 'Desa Bejagung Kecamatan Semanding Kabupaten Tuban', 'Laki-laki', '2018-08-12 13:41:16', '2018-08-12 13:44:28'),
(8, 'Juliant Perdana', 'Tata boga', 8, 'Desa Gesikharjo Kec. Palang Kab. Tuban', 'Laki-laki', '2018-08-16 02:11:03', '2018-08-16 03:21:44'),
(9, 'Adhi Setyo Wibisono', 'Administrasi Perkantoran', 2, 'Ds. Pliwetan Kec. Palang', 'Laki-laki', '2018-08-16 03:50:05', '2018-08-16 03:50:05'),
(14, 'Anwar Adi Setiyono', 'Teknik Kendaraan Ringan', 19, 'Kel. Latsari Kec. Tuban Kab. Tuban', 'Laki-laki', '2018-08-16 13:05:14', '2018-08-16 13:05:14');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `biodata`
--
ALTER TABLE `biodata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `biodata`
--
ALTER TABLE `biodata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
