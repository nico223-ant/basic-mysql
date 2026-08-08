document.addEventListener('DOMContentLoaded', () => {
  // Fitur Copy Command dengan Animasi Feedback
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const codeText = button.previousElementSibling.innerText;

      navigator.clipboard.writeText(codeText).then(() => {
        const originalHTML = button.innerHTML;
        
        button.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        button.style.backgroundColor = 'var(--accent-green)';
        button.style.color = '#000';
        button.style.borderColor = 'var(--accent-green)';

        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.style.backgroundColor = '';
          button.style.color = '';
          button.style.borderColor = '';
        }, 2000);
      });
    });
  });

  // Fitur Pencarian Real-time yang Mendukung Pencarian Judul & Isi Kode
  const searchInput = document.getElementById('searchInput');
  const stepCards = document.querySelectorAll('.step-card');
  const sectionTitles = document.querySelectorAll('.section-title');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    stepCards.forEach(card => {
      const title = card.querySelector('.step-title').innerText.toLowerCase();
      const code = card.querySelector('.code-text').innerText.toLowerCase();
      const note = card.querySelector('.note') ? card.querySelector('.note').innerText.toLowerCase() : '';

      if (title.includes(query) || code.includes(query) || note.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Sembunyikan/Tampilkan Section Title Jika Tidak Ada Hasil
    if (query !== '') {
      sectionTitles.forEach(sec => sec.style.display = 'none');
    } else {
      sectionTitles.forEach(sec => sec.style.display = 'flex');
    }
  });
});
