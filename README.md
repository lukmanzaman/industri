# Museum of Industrial Engineering & Operations Research

Visual Infographic Museum & Continuous Reading Stream.

- **GitHub Repository**: [http://github.com/lukmanzaman/industri](http://github.com/lukmanzaman/industri)
- **Total Visual**: 1,500 poster infografis beresolusi tinggi (format JPG rasio 1:3).
- **Struktur Kurikulum**: 10 Paviliun Utama Teknik Industri & Manajemen Operasi.

## Cara Menjalankan Secara Lokal
Buka berkas `index.html` langsung dengan klik ganda di Windows File Explorer atau browser pilihan Anda (Chrome, Edge, Firefox). Tidak memerlukan web server khusus (mendukung penuh protokol `file:///`).

## Deployment ke GitHub Pages
Repositori ini telah dirancang 100% *self-contained*:
1. Aktifkan **GitHub Pages** pada repositori ini di menu *Settings > Pages*.
2. Pilih source **Deploy from a branch**, Branch: `main` (atau `master`), folder: `/ (root)`.
3. Klik **Save**. Web viewer interaktif langsung dapat diakses secara publik di seluruh dunia!

## Struktur Berkas
- `index.html`: Web viewer responsif dengan Spatial 3D Hero, Exhibits Stage, Full Poster Wall, dan Fast Continuous Stream Reader.
- `css/`: Desain modular (variables, layout, exhibits, reader, wall, stream, controls, toast).
- `js/`: Engine interaktif, dataset indeks (`data.js`), config pencarian (`config.js`), dan komponen modular.
- `favicon.png`: Ikon web resmi.
