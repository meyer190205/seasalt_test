# seasalt_test
This project dibuat untuk Technical Test.

Untuk instalasi lakukan langkah-langkah berikut:
1. Clone seasalt_test dari github. (link: https://github.com/meyer190205/seasalt_test)
2. gunakan terminal untuk melakukan cd ke folder seasalt_test.
3. Jalankan npm install di terminal setelah cd ke folder seasalt_test. (Jika terjadi error, lakukan npm install --force)
4. Jalankan ng serve / ng serve -o untuk mengakses aplikasi. 

Spec ENV yang dibutuhkan:
1. Nodejs (Nodejs.org)
2. Angular CLI

Requirement yang tidak selesai:
1. Login : Email dan Password
    - Saya masih kurang paham pembuatan halaman login yang meminta email dan password karena tidak saya pegang di pekerjaan saya yang sebelumnya (dipegang tim lain).
2. Integrasi database
    - Saya tidak sempat melakukan pengintegrasian database ke Angular. Untuk Test ini saya membuat server mockup yang saya isi dengan data.
    - Saya bisa membuat tabel dan isi dengan MySQL

Structure Tabel SQL:
Pembuatan Tabel user_table:

CREATE table user_table (
	id int primary key,
    name varchar(255),
    address text,
    phone varchar(30),
    picture varchar(255),
    created_at date
);

Mengisi tabel user_table dengan mock users:
INSERT INTO user_table (id, name, address, phone, picture, created_at)
	VALUES
		(1, 'John Turner', '3282 Shingleton Road', '903-908-6289', 'A', '2010/08/12'),
        (2, 'Anne Green', '1997 Beechwood Avenue', '404-456-6528', 'A', '2019/12/01'),
        (3, 'Joko Widjaya', '1411 Clinton Street', '757-392-1408', 'A', '2015/04/04'),
        (4, 'Chris Lopez', '711 Mattson Street', '727-999-5302', 'A', '2021/10/08'),
        (5, 'Hillary Quill', '2302 Parker Drive', '573-559-7890', 'A', '2012/07/15');