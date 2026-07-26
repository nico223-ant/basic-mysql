document.addEventListener('DOMContentLoaded', () => {
  // Fitur Copy Command
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const codeText = button.previousElementSibling.innerText;

      navigator.clipboard.writeText(codeText).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        button.style.backgroundColor = '#34d399';
        button.style.color = '#0f172a';

        setTimeout(() => {
          button.innerText = originalText;
          button.style.backgroundColor = '';
          button.style.color = '';
        }, 2000);
      });
    });
  });

  // Fitur Pencarian Real-time
  const searchInput = document.getElementById('searchInput');
  const stepCards = document.querySelectorAll('.step-card');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    stepCards.forEach(card => {
      const title = card.querySelector('.step-title').innerText.toLowerCase();
      const code = card.querySelector('.code-text').innerText.toLowerCase();

      if (title.includes(query) || code.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});