// Fungsi untuk menampilkan detail layanan
function showServiceDetails(serviceId) {
    var details = document.getElementById('service-details');
    var content = '';

    // Cek layanan yang dipilih dan sesuaikan detailnya
    if (serviceId === 1) {
        content = `
            <h3>Kelas Mata Pelajaran</h3>
            <p>TK, SD, SMP</p>
            <p>Benefit: Pembelajaran yang menyeluruh dengan pendekatan yang menyenangkan untuk semua jenjang.</p>
            <p>Harga: IDR 500.000/bulan</p>
        `;
    } else if (serviceId === 2) {
        content = `
            <h3>Kelas Musik</h3>
            <p>Gitar, Keyboard, Drum</p>
            <p>Benefit: Belajar musik dengan pengajaran yang mudah dipahami dan menyenangkan.</p>
            <p>Harga: IDR 600.000/bulan</p>
        `;
    } else if (serviceId === 3) {
        content = `
            <h3>Kelas Gratis</h3>
            <p>Program Sosial</p>
            <p>Benefit: Program pendidikan untuk anak-anak yang kurang mampu.</p>
            <p>Harga: Gratis</p>
        `;
    } else if (serviceId === 4) {
        content = `
            <h3>Konseling</h3>
            <p>Layanan Psikoterapi</p>
            <p>Benefit: Mendapatkan bantuan psikologis untuk masalah emosional dan mental.</p>
            <p>Harga: IDR 700.000/session</p>
        `;
    } else if (serviceId === 5) {
        content = `
            <h3>Kelas ABK</h3>
            <p>Anak Berkebutuhan Khusus</p>
            <p>Benefit: Program khusus untuk anak dengan kebutuhan khusus, dengan pendekatan yang lebih sabar dan terarah.</p>
            <p>Harga: IDR 550.000/bulan</p>
        `;
    }

    // Masukkan konten ke dalam elemen 'service-details'
    details.innerHTML = content;
    details.style.display = 'block'; // Menampilkan div detail
}


// Ambil elemen form dan elemen feedback
const form = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

// Tambahkan event listener untuk submit
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman saat submit

    // Ambil nilai input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validasi sederhana
    if (!name || !email || !phone) {
        showMessage("Harap isi semua data yang wajib.", "error");
        return;
    }

    if (!validateEmail(email)) {
        showMessage("Email tidak valid.", "error");
        return;
    }

    if (!validatePhone(phone)) {
        showMessage("Nomor telepon tidak valid.", "error");
        return;
    }

    // Jika valid, tampilkan pesan sukses
    showMessage("Pendaftaran berhasil! Kami akan menghubungi Anda segera.", "success");

    // Reset form
    form.reset();
});

// Fungsi untuk menampilkan pesan
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

// Fungsi validasi email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Fungsi validasi nomor telepon (hanya angka)
function validatePhone(phone) {
    const re = /^[0-9]+$/;
    return re.test(phone);
}

