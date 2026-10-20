// 1. Pilih tombol berdasarkan ID-nya (Mencari elemen HTML dengan id="sapaButton")
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan 'event listener' (pendeteksi kejadian) khusus untuk aksi klik (click)
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan kode di bawah ini HANYA ketika tombol diklik oleh pengguna
    alert('Halo! Terima kasih sudah berkunjung!');
});
