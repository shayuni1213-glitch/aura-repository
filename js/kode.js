// Validasi Form & Pengalihan Otomatis ke Beranda
const formMasuk = document.getElementById('formMasuk');
if (formMasuk) {
    formMasuk.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('emailPengguna').value.trim();
        const sandi = document.getElementById('kunciRahasia').value;
        const kotakPesan = document.getElementById('kotakPesan');
        
        kotakPesan.innerHTML = '';
        let adaSalah = false;
        
        // Validasi Email
        if (!email) {
            kotakPesan.innerHTML += `<div class="alert alert-danger">⚠️ Email tidak boleh kosong!</div>`;
            adaSalah = true;
        } else {
            const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!pola.test(email)) {
                kotakPesan.innerHTML += `<div class="alert alert-danger">⚠️ Format email tidak benar! Contoh: nama@email.com</div>`;
                adaSalah = true;
            }
        }
        
        // Validasi Kata Sandi
        if (!sandi) {
            kotakPesan.innerHTML += `<div class="alert alert-danger">⚠️ Kata sandi tidak boleh kosong!</div>`;
            adaSalah = true;
        } else if (sandi.length < 6) {
            kotakPesan.innerHTML += `<div class="alert alert-danger">⚠️ Kata sandi minimal 6 karakter!</div>`;
            adaSalah = true;
        }
        
        // Jika Lolos → Langsung ke Beranda
        if (!adaSalah) {
            kotakPesan.innerHTML = `<div class="alert alert-success">✅ Selamat datang, ${email}! Mengalihkan ke Beranda...</div>`;
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500); // Pindah dalam 1,5 detik
        }
    });
}